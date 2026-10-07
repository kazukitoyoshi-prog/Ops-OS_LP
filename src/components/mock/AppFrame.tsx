import type { ReactNode } from "react";
import {
  Bell,
  BookOpen,
  ChartLine,
  ChevronRight,
  FlaskConical,
  House,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  Scale,
  Search,
  Settings,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { LogoMark } from "@/components/ui/Logo";

export const FRAME_WIDTH = 1200;
export const FRAME_HEIGHT = 720;

export type ScreenId =
  | "home"
  | "themes"
  | "hearing"
  | "flow"
  | "requirements"
  | "solutions"
  | "poc"
  | "ops";

const navItems: Array<{ id: ScreenId; label: string; icon: LucideIcon; step?: string }> = [
  { id: "home", label: "ホーム", icon: House },
  { id: "themes", label: "AI活用テーマ", icon: Lightbulb, step: "01" },
  { id: "hearing", label: "業務ヒアリング", icon: MessagesSquare, step: "02" },
  { id: "flow", label: "業務フロー", icon: Workflow, step: "02" },
  { id: "requirements", label: "AI要件", icon: ListChecks, step: "03" },
  { id: "solutions", label: "Solution比較", icon: Scale, step: "03" },
  { id: "poc", label: "PoC評価", icon: FlaskConical, step: "04" },
  { id: "ops", label: "運用ダッシュボード", icon: ChartLine, step: "05" },
];

type AppFrameProps = {
  active: ScreenId;
  breadcrumb: string[];
  children: ReactNode;
};

/** Static Ops OS Flow application shell rendered at a fixed design size (scaled by ScaledFrame). */
export function AppFrame({ active, breadcrumb, children }: AppFrameProps) {
  return (
    <div
      className="flex overflow-hidden bg-[#f6f8fb] text-[13px] leading-normal text-slate-700"
      style={{ width: FRAME_WIDTH, height: FRAME_HEIGHT }}
    >
      <aside className="flex w-[208px] shrink-0 flex-col bg-navy-ink px-3 py-4 text-slate-300">
        <div className="flex items-center gap-2 px-2">
          <LogoMark inverted className="h-[18px] w-auto" />
          <span className="text-[14px] font-semibold text-white">Ops OS Flow</span>
        </div>
        <div className="mt-5 rounded-md border border-white/10 px-2.5 py-2">
          <p className="text-[10.5px] text-slate-400">ワークスペース</p>
          <p className="mt-0.5 truncate text-[12.5px] text-white">デモ製作所 品質保証部</p>
        </div>
        <nav className="mt-5 flex flex-col gap-0.5">
          {navItems.map(({ id, label, icon: Icon, step }) => (
            <div
              key={id}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-[7px]",
                id === active ? "bg-white/10 text-white" : "text-slate-400",
              )}
            >
              <Icon className={cn("size-[15px]", id === active ? "text-[#7fc4cb]" : "")} strokeWidth={1.75} />
              <span className="flex-1 truncate">{label}</span>
              {step && <span className="font-mono text-[10px] text-slate-500 tabular-nums">{step}</span>}
            </div>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-0.5 border-t border-white/10 pt-3">
          <div className="flex items-center gap-2.5 px-2.5 py-[7px] text-slate-400">
            <BookOpen className="size-[15px]" strokeWidth={1.75} />
            ナレッジ
          </div>
          <div className="flex items-center gap-2.5 px-2.5 py-[7px] text-slate-400">
            <Settings className="size-[15px]" strokeWidth={1.75} />
            設定
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[52px] shrink-0 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-1.5 text-[12px] text-slate-500">
            {breadcrumb.map((item, i) => (
              <span key={item} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="size-3 text-slate-300" />}
                <span className={i === breadcrumb.length - 1 ? "text-slate-800" : ""}>{item}</span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-56 items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2.5 text-slate-400">
              <Search className="size-3.5" />
              <span className="text-[12px]">テーマ・要件・文書を検索</span>
              <span className="ml-auto rounded border border-slate-200 bg-white px-1 font-mono text-[10px]">⌘K</span>
            </div>
            <Bell className="size-4 text-slate-400" strokeWidth={1.75} />
            <span className="flex size-7 items-center justify-center rounded-full bg-teal text-[11px] font-semibold text-white">
              佐
            </span>
          </div>
        </header>
        <main className="min-h-0 flex-1 overflow-hidden p-6">{children}</main>
      </div>
    </div>
  );
}
