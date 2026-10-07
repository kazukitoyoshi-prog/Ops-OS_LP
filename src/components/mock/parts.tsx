import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-slate-200 bg-white", className)}>{children}</div>;
}

export function PanelTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
      <h3 className="text-[13px] font-semibold text-slate-800">{children}</h3>
      {action}
    </div>
  );
}

type Tone = "neutral" | "teal" | "navy" | "amber" | "outline";

const tones: Record<Tone, string> = {
  neutral: "bg-slate-100 text-slate-600",
  teal: "bg-teal-soft text-teal-strong",
  navy: "bg-navy text-white",
  amber: "bg-amber-50 text-amber-700",
  outline: "border border-slate-200 text-slate-600",
};

export function Chip({ children, tone = "neutral", className }: { children: ReactNode; tone?: Tone; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] whitespace-nowrap", tones[tone], className)}>
      {children}
    </span>
  );
}

export function Bar({ value, className, tone = "teal" }: { value: number; className?: string; tone?: "teal" | "navy" | "slate" }) {
  const fill = tone === "teal" ? "bg-teal" : tone === "navy" ? "bg-navy" : "bg-slate-400";
  return (
    <div className={cn("h-1.5 overflow-hidden rounded-full bg-slate-100", className)}>
      <div className={cn("h-full rounded-full", fill)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function PageHeader({ eyebrow, title, meta, actions }: { eyebrow?: string; title: string; meta?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="flex items-end justify-between">
      <div>
        {eyebrow && <p className="text-[11.5px] text-slate-500">{eyebrow}</p>}
        <div className="mt-1 flex items-center gap-2.5">
          <h2 className="text-[19px] font-semibold text-slate-900">{title}</h2>
          {meta}
        </div>
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function MockButton({ children, primary = false }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-[12px] font-medium",
        primary ? "bg-navy text-white" : "border border-slate-200 bg-white text-slate-700",
      )}
    >
      {children}
    </span>
  );
}

export function Tabs({ items, active }: { items: string[]; active: number }) {
  return (
    <div className="flex items-center gap-1 border-b border-slate-200">
      {items.map((item, i) => (
        <span
          key={item}
          className={cn(
            "-mb-px border-b-2 px-3 py-2 text-[12.5px]",
            i === active ? "border-navy font-medium text-slate-900" : "border-transparent text-slate-500",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
