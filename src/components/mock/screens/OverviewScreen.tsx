import { Check, FileText, Share2, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppFrame } from "../AppFrame";
import { Bar, Chip, MockButton, PageHeader, Panel, PanelTitle } from "../parts";

const stepper = [
  { no: "01", title: "AI活用テーマ選定", state: "done", note: "完了" },
  { no: "02", title: "業務・データ理解", state: "done", note: "完了" },
  { no: "03", title: "AI要件・Solution設計", state: "current", note: "進行中 62%" },
  { no: "04", title: "PoC・開発", state: "todo", note: "10月開始予定" },
  { no: "05", title: "本番導入・運用", state: "todo", note: "—" },
] as const;

const requirements = [
  { id: "REQ-012", text: "設計変更通知から、影響を受ける部品・工程を特定する", type: "判断", status: "確定" },
  { id: "REQ-013", text: "過去の類似不具合を根拠付きで3件以上提示する", type: "出力", status: "確定" },
  { id: "REQ-014", text: "判断根拠を参照元文書・該当箇所と紐づけて表示する", type: "出力", status: "レビュー中" },
  { id: "REQ-015", text: "機密図面データは社内環境のみで処理する", type: "非機能", status: "確定" },
  { id: "REQ-016", text: "試作品の設計変更は量産品と異なる基準で判定する", type: "例外", status: "要確認" },
];

const docs = ["設計変更通知書_2026Q3.pdf", "トラブル台帳.xlsx", "DRBFMシート_ブレーキ部品.xlsx", "品質会議議事録.docx"];

export function OverviewScreen() {
  return (
    <AppFrame active="requirements" breadcrumb={["品質保証部", "設計変更時の品質影響検討AI"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="プロジェクト"
          title="設計変更時の品質影響検討AI"
          meta={
            <>
              <Chip tone="outline">品質保証部</Chip>
              <Chip tone="teal">優先度 A</Chip>
            </>
          }
          actions={
            <>
              <MockButton>
                <Share2 className="size-3.5" /> 共有
              </MockButton>
              <MockButton primary>
                <FileText className="size-3.5" /> 要件定義書を出力
              </MockButton>
            </>
          }
        />

        <Panel className="grid grid-cols-5 px-2 py-3">
          {stepper.map((s, i) => (
            <div key={s.no} className={cn("flex items-center gap-3 px-3", i > 0 && "border-l border-slate-100")}>
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] tabular-nums",
                  s.state === "done" && "bg-teal text-white",
                  s.state === "current" && "border-2 border-navy text-navy",
                  s.state === "todo" && "border border-slate-200 text-slate-400",
                )}
              >
                {s.state === "done" ? <Check className="size-3.5" strokeWidth={2.5} /> : s.no}
              </span>
              <div className="min-w-0">
                <p className={cn("truncate text-[12.5px] font-medium", s.state === "todo" ? "text-slate-400" : "text-slate-800")}>
                  {s.title}
                </p>
                <p className="text-[11px] text-slate-500">{s.note}</p>
              </div>
            </div>
          ))}
        </Panel>

        <div className="grid min-h-0 flex-1 grid-cols-3 gap-4">
          <Panel className="col-span-2 flex flex-col">
            <PanelTitle action={<span className="text-[11.5px] text-slate-500">28件中 5件を表示</span>}>AI要件</PanelTitle>
            <table className="w-full text-left">
              <thead className="text-[11px] text-slate-500">
                <tr className="border-b border-slate-100">
                  <th className="px-4 py-2 font-normal">ID</th>
                  <th className="py-2 font-normal">要件</th>
                  <th className="py-2 font-normal">種別</th>
                  <th className="px-4 py-2 font-normal">状態</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((r) => (
                  <tr key={r.id} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2.5 font-mono text-[11.5px] text-slate-500 tabular-nums">{r.id}</td>
                    <td className="py-2.5 pr-3 text-slate-800">{r.text}</td>
                    <td className="py-2.5">
                      <Chip>{r.type}</Chip>
                    </td>
                    <td className="px-4 py-2.5">
                      <Chip tone={r.status === "確定" ? "teal" : r.status === "要確認" ? "amber" : "outline"}>{r.status}</Chip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-auto border-t border-slate-100 px-4 py-3">
              <p className="text-[11px] text-slate-500">参照ドキュメント</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {docs.map((d) => (
                  <Chip key={d} tone="outline">
                    <FileText className="size-3 text-slate-400" />
                    {d}
                  </Chip>
                ))}
              </div>
            </div>
          </Panel>

          <div className="flex flex-col gap-4">
            <Panel>
              <PanelTitle>製造業標準チェック</PanelTitle>
              <div className="px-4 py-3.5">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-[26px] font-semibold text-slate-900 tabular-nums">24</span>
                  <span className="text-slate-500 tabular-nums">/ 28 項目</span>
                </p>
                <Bar value={86} className="mt-2" />
                <ul className="mt-3.5 space-y-2 text-[12px]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                    例外時のエスカレーション先が未定義
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                    判定精度の許容範囲が未設定
                  </li>
                </ul>
              </div>
            </Panel>
            <Panel className="flex-1">
              <PanelTitle>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-teal" /> AIからの提案
                </span>
              </PanelTitle>
              <div className="px-4 py-3.5">
                <p className="text-[12.5px] leading-relaxed text-slate-700">
                  議事録に「試作品は判定基準が異なる」との記載があります。例外処理として要件に追加し、品質保証部へ確認しますか？
                </p>
                <div className="mt-3.5 flex gap-2">
                  <MockButton primary>要件に追加</MockButton>
                  <MockButton>確認事項にする</MockButton>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
