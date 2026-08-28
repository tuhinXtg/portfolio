import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitStore = Map<string, number[]>;

const globalForContact = globalThis as typeof globalThis & {
  __contactRateLimitStore?: RateLimitStore;
};

const rateLimitStore =
  globalForContact.__contactRateLimitStore ?? new Map<string, number[]>();

globalForContact.__contactRateLimitStore = rateLimitStore;

function getAllowedOrigin(request: Request) {
  const requestOrigin = new URL(request.url).origin;
  const configuredSite = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredSite) {
    return requestOrigin;
  }

  try {
    return new URL(configuredSite).origin;
  } catch {
    return requestOrigin;
  }
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recentRequests = (rateLimitStore.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  rateLimitStore.set(ip, recentRequests);
  return false;
}

function logAbuse(event: string, details: Record<string, string>) {
  console.warn(`[contact] ${event}`, {
    ...details,
    timestamp: new Date().toISOString(),
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const allowedOrigin = getAllowedOrigin(request);
    const clientIp = getClientIp(request);

    let sourceOrigin = "";
    try {
      if (origin) {
        sourceOrigin = new URL(origin).origin;
      } else if (referer) {
        sourceOrigin = new URL(referer).origin;
      }
    } catch {
      sourceOrigin = "";
    }

    if (!sourceOrigin || sourceOrigin !== allowedOrigin) {
      logAbuse("blocked origin", {
        ip: clientIp,
        origin: origin ?? "",
        referer: referer ?? "",
      });
      return NextResponse.json(
        { message: "Request origin is not allowed." },
        { status: 403 },
      );
    }

    if (isRateLimited(clientIp)) {
      logAbuse("rate limited", { ip: clientIp });
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)),
          },
        },
      );
    }

    const rawBody = await request.text();
    if (rawBody.length > 8192) {
      logAbuse("payload too large", {
        ip: clientIp,
        size: String(rawBody.length),
      });
      return NextResponse.json(
        { message: "Request body is too large." },
        { status: 413 },
      );
    }

    let body: ContactPayload & {
      website?: string;
      submittedAt?: string;
    };

    try {
      body = JSON.parse(rawBody) as ContactPayload & {
        website?: string;
        submittedAt?: string;
      };
    } catch {
      logAbuse("invalid json", { ip: clientIp });
      return NextResponse.json(
        { message: "Invalid request payload." },
        { status: 400 },
      );
    }

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();
    const website = body.website?.trim();
    const submittedAt = Number(body.submittedAt);

    if (website) {
      logAbuse("honeypot triggered", { ip: clientIp });
      return NextResponse.json({
        message: "Message sent successfully.",
      });
    }

    if (!Number.isFinite(submittedAt) || Date.now() - submittedAt < 3000) {
      logAbuse("submitted too quickly", { ip: clientIp });
      return NextResponse.json(
        { message: "Please take a moment before sending this form." },
        { status: 400 },
      );
    }

    if (!name || !email || !subject || !message) {
      logAbuse("validation failed", { ip: clientIp, reason: "missing fields" });
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      logAbuse("validation failed", { ip: clientIp, reason: "field too long" });
      return NextResponse.json(
        { message: "One or more fields are too long." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      logAbuse("validation failed", { ip: clientIp, reason: "invalid email" });
      return NextResponse.json(
        { message: "Enter a valid email address." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const from = process.env.SMTP_FROM_EMAIL?.trim();
    const to = process.env.CONTACT_TO_EMAIL?.trim();

    if (
      !smtpHost ||
      !Number.isFinite(smtpPort) ||
      smtpPort <= 0 ||
      !smtpUser ||
      !smtpPass ||
      !from ||
      !to
    ) {
      console.warn("[contact] email service misconfigured", {
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        {
          message:
            "Email service is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL, and CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    try {
      const info = await transporter.sendMail({
        from,
        to,
        subject: `Portfolio contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
            <h2 style="margin:0 0 16px;">Portfolio contact form</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
          </div>
        `,
        replyTo: email,
      });

      console.info("[contact] email sent", {
        id: info.messageId,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        message: "Message sent successfully.",
      });
    } catch (error) {
      const details = error instanceof Error ? error.message : String(error);
      console.warn("[contact] smtp send failed", {
        error: details,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        {
          message:
            "Failed to send message through the email service.",
        },
        { status: 500 },
      );
    }
  } catch {
    console.warn("[contact] unexpected error", {
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { message: "Unable to process your message right now." },
      { status: 500 },
    );
  }
}
