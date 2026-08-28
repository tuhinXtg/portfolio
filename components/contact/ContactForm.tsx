"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
  submittedAt: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
  submittedAt: "",
};

function createInitialState(): FormState {
  return {
    ...initialState,
    submittedAt: String(Date.now()),
  };
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(() => createInitialState());
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (status === "success" || status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (values.website.trim()) {
      setStatus("success");
      setStatusMessage("Message sent successfully.");
      setValues(createInitialState());
      return;
    }

    if (Date.now() - Number(values.submittedAt) < 3000) {
      setStatus("error");
      setStatusMessage("Please take a moment before sending this form.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(data?.message ?? "Unable to send message.");
      }

      setValues(createInitialState());
      setErrors({});
      setStatus("success");
      setStatusMessage(data?.message ?? "Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not send your message right now.",
      );
    }
  }

  const inputClasses =
    "w-full rounded-md border border-border-strong bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(e) => handleChange("website", e.target.value)}
        aria-hidden="true"
        className="sr-only"
      />
      <input
        type="hidden"
        name="submittedAt"
        value={values.submittedAt}
        readOnly
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            maxLength={100}
            autoComplete="name"
            className={inputClasses}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-danger">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            maxLength={254}
            autoComplete="email"
            className={inputClasses}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-danger">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={values.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          maxLength={150}
          autoComplete="off"
          className={inputClasses}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-danger">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          maxLength={5000}
          autoComplete="off"
          className={inputClasses}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-danger">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
        <p
          aria-live="polite"
          className={`text-xs ${
            status === "error"
              ? "text-danger"
              : status === "success"
                ? "text-accent"
                : "text-subtle"
          }`}
        >
          {statusMessage || "Messages are sent through the configured email service."}
        </p>
      </div>
    </form>
  );
}
