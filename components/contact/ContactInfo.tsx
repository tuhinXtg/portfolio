import { Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const items = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "GitHub", value: personal.github, href: personal.github, icon: GithubIcon },
  { label: "LinkedIn", value: personal.linkedin, href: personal.linkedin, icon: LinkedinIcon },
];

export function ContactInfo() {
  return (
    <div className="space-y-3">
      {items.map(({ label, value, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent-border"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border-strong text-accent">
            <Icon width={16} height={16} />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[11px] uppercase tracking-wide text-subtle">
              {label}
            </span>
            <span className="block truncate text-sm text-foreground">
              {value}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
