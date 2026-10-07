import { Repeat, Sparkles, TrendingUp } from "lucide-react";
import { AppFrame } from "../AppFrame";
import { Chip, PageHeader, Panel, PanelTitle } from "../parts";

const kpis = [
  { label: "月間利用件数", value: "1,284", delta: "+12%" },
  { label: "累計削減工数", value: "1,920h", delta: "+214h" },
  { label: "想定ROI（年換算）", value: "320%", delta: "+18pt" },
  { label: "回答精度", value: "86%", delta: "+3pt" },
];

const months = [
  { m: "4月", v: 120 },
  { m: "5月", v: 168 },
  { m: "6月", v: 205 },
  { m: "7月", v: 236 },
  { m: "8月", v: 262 },
  { m: "9月", v: 298 },
];

const CHART_H = 180;
const MAX = 320;

export function OpsScreen() {
  return (
    <AppFrame active="ops" breadcrumb={["設計変更時の品質影響検討AI", "運用ダッシュボード"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader eyebrow="Step 05" title="運用ダッシュボード" meta={<Chip tone="teal">本番運用中</Chip>} />
        <div className="grid grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Panel key={k.label} className="px-4 py-3.5">
              <p className="text-[11.5px] text-slate-500">{k.label}</p>
              <p className="mt-1.5 flex items-baseline gap-2">
                <span className="text-[24px] font-semibold text-slate-900 tabular-nums">{k.value}</span>
                <span className="flex items-center gap-0.5 text-[11.5px] text-teal-strong tabular-nums">
                  <TrendingUp className="size-3" />
                  {k.delta}
                </span>
              </p>
            </Panel>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-4">
          <Panel className="col-span-7 flex flex-col">
            <PanelTitle action={<span className="text-[11.5px] text-slate-500">時間 / 月</span>}>削減工数の推移</PanelTitle>
            <div className="flex flex-1 items-end gap-6 px-6 pt-4 pb-4">
              <div className="relative flex flex-1 items-end justify-between gap-5" style={{ height: CHART_H }}>
                <div className="absolute inset-x-0 border-t border-dashed border-slate-300" style={{ bottom: (250 / MAX) * CHART_H }}>
                  <span className="absolute -top-2 -left-1 -translate-x-full bg-white pr-1 text-[10px] whitespace-nowrap text-slate-500">目標 250h</span>
                </div>
                {months.map((d, i) => (
                  <div key={d.m} className="flex flex-1 flex-col items-center gap-1.5">
                    <span className="text-[10.5px] text-slate-500 tabular-nums">{d.v}</span>
                    <div
                      className={i === months.length - 1 ? "w-full rounded-t-sm bg-navy" : "w-full rounded-t-sm bg-slate-300"}
                      style={{ height: (d.v / MAX) * CHART_H }}
                    />
                    <span className="text-[11px] text-slate-500">{d.m}</span>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
          <div className="col-span-5 flex flex-col gap-4">
            <Panel className="flex-1">
              <PanelTitle>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-teal" /> 改善提案
                </span>
              </PanelTitle>
              <ul className="divide-y divide-slate-100 text-[12.5px]">
                <li className="px-4 py-3">
                  <p className="text-slate-800">樹脂部品カテゴリの回答精度が低下しています</p>
                  <p className="mt-0.5 text-[11.5px] text-slate-500">2025年度トラブル台帳の追加学習を推奨（要件 REQ-013）</p>
                </li>
                <li className="px-4 py-3">
                  <p className="text-slate-800">参照上位の文書に旧版の判定基準表が含まれています</p>
                  <p className="mt-0.5 text-[11.5px] text-slate-500">文書管理システムとの同期設定を確認してください</p>
                </li>
              </ul>
            </Panel>
            <Panel className="px-4 py-3.5">
              <p className="flex items-center gap-1.5 text-[12px] font-medium text-slate-800">
                <Repeat className="size-3.5 text-teal" /> 次案件への再利用
              </p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-slate-600">
                「DRBFM作成支援」に、要件 12件・評価基準 5件・テストケース 18件を引き継ぎ
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
