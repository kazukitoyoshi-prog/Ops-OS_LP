import { cn } from "@/lib/cn";

type LogoMarkProps = {
  className?: string;
  /** Use a light (white → teal) rendering for dark backgrounds. */
  inverted?: boolean;
  title?: string;
};

/**
 * Ops OS infinity mark, redrawn as a single stroke so it stays crisp at any size.
 * TODO: 正式なベクターロゴ（SVG/AI）を受領したら差し替え
 */
export function LogoMark({ className, inverted = false, title }: LogoMarkProps) {
  const id = inverted ? "opsos-mark-inv" : "opsos-mark";
  return (
    <svg
      viewBox="4 6 92 48"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <linearGradient id={id} x1="8" y1="0" x2="92" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0.42" stopColor={inverted ? "#ffffff" : "#1a395a"} />
          <stop offset="0.6" stopColor={inverted ? "#7fc4cb" : "#1a7c87"} />
        </linearGradient>
      </defs>
      <path
        d="M45.32 20 A20 20 0 1 0 38 47.32 C50.12 40.32 49.88 19.68 62 12.68 A20 20 0 1 1 54.68 40"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="5.6"
      />
    </svg>
  );
}

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-6 w-auto" inverted={inverted} />
      <span className="text-[1.0625rem] leading-none font-bold whitespace-nowrap">
        <span className={inverted ? "text-white" : "text-navy"}>Ops</span>{" "}
        <span className={inverted ? "text-[#7fc4cb]" : "text-teal"}>OS</span>
      </span>
    </span>
  );
}
