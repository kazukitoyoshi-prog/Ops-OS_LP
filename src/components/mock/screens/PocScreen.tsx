import { CircleCheck, CircleAlert, FileText } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppFrame } from "../AppFrame";
import { Chip, MockButton, PageHeader, Panel, PanelTitle } from "../parts";

const kpis = [
  { label: "類似事例の再現率", value: "84%", target: "目標 80%以上", ok: true },
  { label: "判定一致率（熟練者比）", value: "72%", target: "目標 75%以上", ok: false },
  { label: "影響検討の工数", value: "-46%", target: "目標 -40%", ok: true },
  { label: "利用者評価", value: "4.2", target: "目標 4.0 / 5.0", ok: true },
];

const cases = [
  { id: "TC-01", name: "金属部品の材質変更", result: "合格" },
  { id: "TC-02", name: "締結トルク仕様の変更", result: "合格" },
  { id: "TC-03", name: "樹脂部品の形状変更", result: "不合格" },
  { id: "TC-04", name: "サプライヤー変更に伴う工程変更", result: "合格" },
  { id: "TC-05", name: "試作品の設計変更（例外処理）", result: "合格" },
  { id: "TC-06", name: "複数部品にまたがる同時変更", result: "条件付" },
];

export function PocScreen() {
  return (
    <AppFrame active="poc" breadcrumb={["設計変更時の品質影響検討AI", "PoC評価"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="Step 04"
          title="PoC評価"
          meta={<Chip tone="outline">評価期間 2026/09/01 – 09/30</Chip>}
          actions={
            <MockButton primary>
              <FileText className="size-3.5" /> 評価レポートを出力
            </MockButton>
          }
        />
        <div className="grid grid-cols-4 gap-4">
          {kpis.map((k) => (
            <Panel key={k.label} className="px-4 py-3.5">
              <p className="text-[11.5px] text-slate-500">{k.label}</p>
              <p className="mt-1.5 text-[24px] font-semibold text-slate-900 tabular-nums">{k.value}</p>
              <p className={cn("mt-1 flex items-center gap-1 text-[11.5px]", k.ok ? "text-teal-strong" : "text-amber-700")}>
                {k.ok ? <CircleCheck className="size-3.5" /> : <CircleAlert className="size-3.5" />}
                {k.target}
              </p>
            </Panel>
          ))}
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-4">
          <Panel className="col-span-7 overflow-hidden">
            <PanelTitle action={<span className="text-[11.5px] text-slate-500">42ケース中 6件を表示</span>}>テストケース</PanelTitle>
            <table className="w-full text-left">
              <tbody>
                {cases.map((c) => (
                  <tr key={c.id} className="border-b border-slate-100 last:border-0">
                    <td className="w-20 px-4 py-[11px] font-mono text-[11.5px] text-slate-500 tabular-nums">{c.id}</td>
                    <td className="py-[11px] text-slate-800">{c.name}</td>
                    <td className="px-4 py-[11px] text-right">
                      <Chip tone={c.result === "合格" ? "teal" : c.result === "不合格" ? "amber" : "outline"}>{c.result}</Chip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>
          <Panel className="col-span-5 flex flex-col">
            <PanelTitle>総合判定</PanelTitle>
            <div className="flex flex-1 flex-col px-4 py-4">
              <p className="text-[11.5px] text-slate-500">判定</p>
              <p className="mt-1 text-[17px] font-semibold text-navy">条件付きで本番移行可</p>
              <p className="mt-4 text-[11.5px] text-slate-500">移行条件</p>
              <ul className="mt-2 space-y-2 text-[12.5px] text-slate-700">
                <li className="flex gap-2">
                  <span className="font-mono text-[11px] text-slate-400">1</span>
                  樹脂部品カテゴリの学習データを追加し、判定一致率75%以上を確認
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-[11px] text-slate-400">2</span>
                  判定根拠の表示に、該当図面の参照リンクを追加
                </li>
              </ul>
              <div className="mt-auto rounded-md bg-slate-50 px-3 py-2.5 text-[11.5px] leading-relaxed text-slate-600">
                評価基準・テストケースは「DRBFM作成支援」テーマのテンプレートとして保存されます。
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </AppFrame>
  );
}
