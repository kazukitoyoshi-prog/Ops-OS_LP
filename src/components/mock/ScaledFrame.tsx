"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { FRAME_HEIGHT, FRAME_WIDTH } from "./AppFrame";

type ScaledFrameProps = {
  children: ReactNode;
  className?: string;
  /** Accessible description of what the (decorative) UI shows. */
  label: string;
};

/**
 * Renders a fixed-size UI mock and scales it to the available width,
 * so the product screen reads like a crisp screenshot at every breakpoint.
 */
export function ScaledFrame({ children, className, label }: ScaledFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const update = () => setScale(Math.min(1, node.clientWidth / FRAME_WIDTH));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={label}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}` }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 origin-top-left transition-opacity duration-300"
        style={{
          width: FRAME_WIDTH,
          height: FRAME_HEIGHT,
          transform: `scale(${scale ?? 1})`,
          opacity: scale === null ? 0 : 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
