import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  size?: "md" | "sm";
  className?: string;
  arrow?: boolean;
};

const variants = {
  primary: "bg-navy text-white hover:bg-navy-deep",
  secondary: "border border-line bg-white text-ink hover:border-slate-300 hover:bg-mist",
  inverted: "bg-white text-navy hover:bg-teal-soft",
};

export function ButtonLink({ href, children, variant = "primary", size = "md", className, arrow = false }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors duration-150",
        size === "md" ? "h-12 px-6 text-[0.9375rem]" : "h-9 px-4 text-sm",
        variants[variant],
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </a>
  );
}
