import { Filter, Sparkles } from "lucide-react";
import { AppFrame } from "../AppFrame";
import { Chip, MockButton, PageHeader, Panel, PanelTitle, Tabs } from "../parts";

const themes = [
  { name: "設計変更時の品質影響検討", dept: "品質保証", effect: "1,850", roi: "420%", fit: "高", rank: "A", status: "要件設計中" },
  { name: "DRBFM作成支援", dept: "設計", effect: "1,200", roi: "310%", fit: "中", rank: "A", status: "ヒアリング中" },
  { name: "過去図面・類似部品検索", dept: "設計", effect: "960", roi: "280%", fit: "高", rank: "B", status: "PoC中" },
  { name: "技術問い合わせの一次回答", dept: "品質保証", effect: "640", roi: "260%", fit: "高", rank: "B", status: "運用中" },
  { name: "見積回答の自動化", dept: "営業", effect: "720", roi: "240%", fit: "中", rank: "B", status: "候補" },
  { name: "サプライヤーリスクの早期検知", dept: "調達", effect: "540", roi: "190%", fit: "中", rank: "C", status: "候補" },
  { name: "設備保全記録の要約・検索", dept: "生産技術", effect: "480", roi: "170%", fit: "低", rank: "C", status: "候補" },
];

// Bubble positions in the effect × feasibility matrix (percent of plot area)
const dots = [
  { x: 82, y: 18, rank: "A" },
  { x: 58, y: 30, rank: "A" },
  { x: 78, y: 44, rank: "B" },
  { x: 84, y: 62, rank: "B" },
  { x: 52, y: 52, rank: "B" },
  { x: 46, y: 68, rank: "C" },
  { x: 24, y: 74, rank: "C" },
];

export function ThemesScreen() {
  return (
    <AppFrame active="themes" breadcrumb={["デモ製作所", "AI活用テーマ"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="Step 01"
          title="AI活用テーマ"
          meta={<Chip>候補 18件</Chip>}
          actions={
            <>
              <MockButton>
                <Filter className="size-3.5" /> 絞り込み
              </MockButton>
              <MockButton primary>
                <Sparkles className="size-3.5" /> テーマを提案
              </MockButton>
            </>
          }
        />
        <Tabs items={["すべて", "設計", "品質保証", "生産技術", "調達", "営業", "管理部門"]} active={0} />
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-4">
          <Panel className="col-span-8 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[11px] text-slate-500">
                <tr className="border-b border-slate-200">
                  <th className="px-4 py-2.5 font-normal">テーマ</th>
                  <th className="py-2.5 font-normal">部門</th>
                  <th className="py-2.5 text-right font-normal">期待効果(万円/年)</th>
                  <th className="py-2.5 pl-4 text-right font-normal">ROI</th>
                  <th className="py-2.5 pl-4 font-normal">実現性</th>
                  <th className="py-2.5 font-normal">優先度</th>
                  <th className="px-4 py-2.5 font-normal">ステータス</th>
                </tr>
              </thead>
              <tbody>
                {themes.map((t) => (
                  <tr key={t.name} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-[11px] font-medium text-slate-800">{t.name}</td>
                    <td className="py-[11px] text-slate-600">{t.dept}</td>
                    <td className="py-[11px] text-right text-slate-800 tabular-nums">{t.effect}</td>
                    <td className="py-[11px] pl-4 text-right font-medium text-teal-strong tabular-nums">{t.roi}</td>
                    <td className="py-[11px] pl-4 text-slate-600">{t.fit}</td>
                    <td className="py-[11px]">
                      <Chip tone={t.rank === "A" ? "navy" : t.rank === "B" ? "teal" : "neutral"}>{t.rank}</Chip>
                    </td>
                    <td className="px-4 py-[11px]">
                      <Chip tone="outline">{t.status}</Chip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel className="col-span-4 flex flex-col">
            <PanelTitle>優先度マトリクス</PanelTitle>
            <div className="flex flex-1 flex-col px-4 py-4">
              <div className="relative flex-1 border-b border-l border-slate-300">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  <div className="border-r border-b border-dashed border-slate-200" />
                  <div className="border-b border-dashed border-slate-200 bg-teal-soft/60" />
                  <div className="border-r border-dashed border-slate-200" />
                  <div />
                </div>
                {dots.map((d, i) => (
                  <span
                    key={i}
                    className={
                      "absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-semibold " +
                      (d.rank === "A" ? "bg-navy text-white" : d.rank === "B" ? "bg-teal text-white" : "bg-slate-300 text-slate-700")
                    }
                    style={{ left: `${d.x}%`, top: `${d.y}%` }}
                  >
                    {d.rank}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10.5px] text-slate-500">
                <span>実現性 低</span>
                <span>高 →</span>
              </div>
              <p className="mt-3 text-[11.5px] leading-relaxed text-slate-600">
                期待効果・実現性・データ準備度から優先度を算出。上位2テーマを今期の推進対象に推奨します。
              </p>
            </div>
          </Panel>
        </div>
      </div>
    </AppFrame>
  );
}
