import { CircleCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppFrame } from "../AppFrame";
import { MockButton, PageHeader, Panel, PanelTitle } from "../parts";

const NODE_W = 96;
const NODE_H = 46;
const lanes = [
  { label: "設計部", y: 0 },
  { label: "AI支援", y: 140 },
  { label: "品質保証部", y: 280 },
];

const nodes = [
  { id: "n1", label: ["設計変更の", "起票"], cx: 132, cy: 70, ai: false },
  { id: "n2", label: ["変更点の", "自動抽出"], cx: 242, cy: 210, ai: true },
  { id: "n3", label: ["類似不具合の", "検索"], cx: 352, cy: 210, ai: true },
  { id: "n4", label: ["影響度の", "一次判定"], cx: 462, cy: 210, ai: true },
  { id: "n5", label: ["影響評価", "レビュー"], cx: 462, cy: 350, ai: false },
  { id: "n6", label: ["DRBFM", "更新・承認"], cx: 572, cy: 350, ai: false },
  { id: "n7", label: ["設計対策の", "検討"], cx: 572, cy: 70, ai: false },
];

const edges = ["M180 70 H242 V183", "M290 210 H300", "M400 210 H410", "M462 233 V323", "M510 350 H520", "M510 210 H572 V97"];

const reasons = [
  { title: "変更点の自動抽出", body: "設計変更通知の差分から、対象部品・工程を構造化できる" },
  { title: "類似不具合の検索", body: "トラブル台帳 3,200件を横断し、類似事例を根拠付きで提示" },
  { title: "影響度の一次判定", body: "判断基準3項目をルール化。最終判断は品質保証部が実施" },
];

export function FlowScreen() {
  return (
    <AppFrame active="flow" breadcrumb={["設計変更時の品質影響検討AI", "業務フロー"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="Step 02 – 03"
          title="業務フロー"
          meta={
            <span className="ml-1 inline-flex rounded-md border border-slate-200 p-0.5 text-[11.5px]">
              <span className="rounded px-2 py-0.5 text-slate-500">As-Is</span>
              <span className="rounded bg-navy px-2 py-0.5 text-white">To-Be</span>
            </span>
          }
          actions={
            <div className="flex items-center gap-3 text-[11.5px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm border border-teal bg-teal-soft" /> AI適合箇所
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-sm border border-slate-300 bg-white" /> 人の判断・作業
              </span>
            </div>
          }
        />
        <div className="flex min-h-0 flex-1 gap-4">
          <Panel className="relative flex-1 overflow-hidden p-4">
            <div className="relative" style={{ width: 624, height: 420 }}>
              {lanes.map((lane, i) => (
                <div
                  key={lane.label}
                  className={cn("absolute right-0 left-0 flex border-slate-200", i > 0 && "border-t", i === 1 && "bg-teal-soft/40")}
                  style={{ top: lane.y, height: 140 }}
                >
                  <span className="flex w-[72px] items-center border-r border-slate-200 pl-2 text-[11.5px] font-medium text-slate-500">
                    {lane.label}
                  </span>
                </div>
              ))}
              <svg className="absolute inset-0" width={624} height={420} aria-hidden>
                <defs>
                  <marker id="flow-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M0 0 L8 4 L0 8 z" fill="#94a3b8" />
                  </marker>
                </defs>
                {edges.map((d) => (
                  <path key={d} d={d} fill="none" stroke="#94a3b8" strokeWidth={1.25} markerEnd="url(#flow-arrow)" />
                ))}
                <text x="518" y="200" className="fill-slate-500 text-[10px]">影響大</text>
                <text x="468" y="282" className="fill-slate-500 text-[10px]">要レビュー</text>
              </svg>
              {nodes.map((n) => (
                <div
                  key={n.id}
                  className={cn(
                    "absolute flex items-center justify-center rounded-md border px-2 text-center text-[11.5px] leading-tight font-medium",
                    n.ai ? "border-teal bg-white text-teal-strong" : "border-slate-300 bg-white text-slate-700",
                  )}
                  style={{ left: n.cx - NODE_W / 2, top: n.cy - NODE_H / 2, width: NODE_W, height: NODE_H }}
                >
                  {n.ai && (
                    <span className="absolute -top-2 -right-2 flex items-center gap-0.5 rounded bg-teal px-1 text-[9px] font-semibold text-white">
                      <Sparkles className="size-2.5" />
                      AI
                    </span>
                  )}
                  <span>
                    {n.label[0]}
                    <br />
                    {n.label[1]}
                  </span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="flex w-[288px] shrink-0 flex-col">
            <PanelTitle>AI適合箇所の提案</PanelTitle>
            <ul className="flex-1 space-y-3.5 px-4 py-4">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-2.5">
                  <CircleCheck className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={1.75} />
                  <div>
                    <p className="text-[12.5px] font-medium text-slate-800">{r.title}</p>
                    <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate-500">{r.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 px-4 py-3.5">
              <p className="text-[11px] text-slate-500">期待効果（試算）</p>
              <p className="mt-1 flex items-baseline gap-2">
                <span className="text-[20px] font-semibold text-slate-900 tabular-nums">-45%</span>
                <span className="text-[11.5px] text-slate-500">影響検討の工数</span>
              </p>
              <div className="mt-3 flex gap-2">
                <MockButton primary>To-Beとして確定</MockButton>
                <MockButton>差分を表示</MockButton>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </AppFrame>
  );
}
