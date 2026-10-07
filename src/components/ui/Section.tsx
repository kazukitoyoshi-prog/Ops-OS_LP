import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type ContainerProps = { children: ReactNode; className?: string; size?: "default" | "wide" };

export function Container({ children, className, size = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 md:px-8", size === "wide" ? "max-w-7xl" : "max-w-6xl", className)}>{children}</div>
  );
}

type EyebrowProps = { index?: string; children: ReactNode; className?: string; inverted?: boolean };

/** Small numbered section label, e.g. "02 — The Bottleneck". */
export function Eyebrow({ index, children, className, inverted = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.8125rem] font-medium",
        inverted ? "text-[#7fc4cb]" : "text-teal",
        className,
      )}
    >
      {index && <span className="font-mono tabular-nums">{index}</span>}
      {index && <span aria-hidden className={cn("h-px w-6", inverted ? "bg-white/30" : "bg-teal/40")} />}
      <span>{children}</span>
    </p>
  );
}

type SectionHeaderProps = {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  inverted?: boolean;
  id?: string;
  wide?: boolean;
};

export function SectionHeader({ index, eyebrow, title, lead, className, inverted = false, id, wide = false }: SectionHeaderProps) {
  return (
    <Reveal className={cn(wide ? "max-w-4xl" : "max-w-3xl", className)}>
      <Eyebrow index={index} inverted={inverted}>
        {eyebrow}
      </Eyebrow>
      <h2
        id={id}
        className={cn(
          "jp-heading mt-5 text-[1.75rem] font-bold sm:text-4xl lg:text-[2.75rem]",
          inverted ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-6 text-base text-pretty md:text-lg", inverted ? "text-slate-300" : "text-slate-600")}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}

/** Line break that only applies from the md breakpoint up. */
export function Br() {
  return <br className="hidden md:block" />;
}
