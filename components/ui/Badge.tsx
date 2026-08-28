import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "planned";
}) {
  const variants = {
    default:
      "border-border-strong text-muted bg-surface",
    accent: "border-accent-border text-accent bg-accent-dim",
    planned: "border-border-strong text-subtle bg-surface",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2.5 py-1 font-mono text-xs tracking-tight",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
