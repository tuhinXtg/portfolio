import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantStyles = {
  primary:
    "bg-accent text-[#04120f] hover:bg-accent-strong border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent hover:text-accent",
  ghost:
    "bg-transparent text-muted hover:text-foreground border border-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className } = props;
  const classes = cn(base, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const rest = props as ButtonAsButton;
  return (
    <button
      className={classes}
      type={rest.type ?? "button"}
      disabled={rest.disabled}
      onClick={rest.onClick}
    >
      {children}
    </button>
  );
}
