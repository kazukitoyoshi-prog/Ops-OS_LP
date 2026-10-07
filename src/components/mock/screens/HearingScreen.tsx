import { FileText, Paperclip, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { AppFrame } from "../AppFrame";
import { Bar, Chip, PageHeader, Panel, PanelTitle } from "../parts";

const messages = [
  { from: "ai", text: "設計変更が発生したとき、品質への影響はどのように確認していますか？" },
  {
    from: "user",
    text: "設計変更通知を受けたら、変更点を見ながら過去の類似不具合をトラブル台帳（Excel）で探しています。担当者の経験に頼る部分が大きいです。",
  },
  { from: "ai", text: "「影響あり」と判断する基準は文書化されていますか？ 例：変更部位、材質、工程変更の有無など。" },
  { from: "user", text: "一部はチェックシートにありますが、最終判断はベテランの経験で行っています。" },
  {
    from: "ai",
    text: "議事録に「試作品は判定基準が異なる」との記載がありました。例外処理として整理してよろしいですか？",
    ref: "品質会議議事録.docx p.3",
  },
] as const;

const extracted = [
  { label: "業務ステップ", count: 6, items: ["設計変更通知の受領", "変更点の確認", "類似不具合の調査"] },
  { label: "判断基準", count: 3, items: ["変更部位・材質・工程の変更有無", "過去不具合との類似度"] },
];

const data = ["設計変更通知 (PDF)", "トラブル台帳 (Excel)", "図面 (CAD)", "DRBFMシート"];

export function HearingScreen() {
  return (
    <AppFrame active="hearing" breadcrumb={["設計変更時の品質影響検討AI", "業務ヒアリング"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="Step 02"
          title="業務ヒアリング"
          meta={<Chip tone="teal">AIヒアリング中</Chip>}
          actions={
            <div className="flex w-56 items-center gap-2 text-[11.5px] text-slate-500">
              <span className="whitespace-nowrap">標準質問</span>
              <Bar value={68} className="flex-1" />
              <span className="tabular-nums">34/50</span>
            </div>
          }
        />
        <div className="grid min-h-0 flex-1 grid-cols-12 gap-4">
          <Panel className="col-span-7 flex flex-col">
            <PanelTitle action={<span className="text-[11.5px] text-slate-500">回答者：品質保証部 佐藤</span>}>対話ログ</PanelTitle>
            <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex gap-2.5", m.from === "user" && "flex-row-reverse")}>
                  <span
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
                      m.from === "ai" ? "bg-navy text-white" : "bg-slate-200 text-slate-600",
                    )}
                  >
                    {m.from === "ai" ? <Sparkles className="size-3" /> : "佐"}
                  </span>
                  <div
                    className={cn(
                      "max-w-[78%] rounded-lg px-3 py-2 text-[12.5px] leading-relaxed",
                      m.from === "ai" ? "bg-slate-50 text-slate-800" : "bg-teal-soft text-slate-800",
                    )}
                  >
                    {m.text}
                    {"ref" in m && (
                      <span className="mt-1.5 flex items-center gap-1 text-[11px] text-teal-strong">
                        <FileText className="size-3" /> 参照：{m.ref}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="m-3 flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-slate-400">
              <Paperclip className="size-3.5" />
              <span className="flex-1 text-[12px]">回答を入力、または資料を添付…</span>
              <span className="flex size-6 items-center justify-center rounded bg-navy text-white">
                <Send className="size-3" />
              </span>
            </div>
          </Panel>

          <Panel className="col-span-5 flex flex-col">
            <PanelTitle action={<span className="text-[11px] text-slate-500">自動抽出</span>}>抽出された情報</PanelTitle>
            <div className="flex flex-1 flex-col divide-y divide-slate-100 overflow-hidden">
              {extracted.map((e) => (
                <div key={e.label} className="px-4 py-3">
                  <p className="flex items-center justify-between text-[12px] font-medium text-slate-800">
                    {e.label}
                    <span className="font-mono text-[11px] text-slate-500 tabular-nums">{e.count}</span>
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[12px] text-slate-600">
                    {e.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-[7px] h-px w-2.5 shrink-0 bg-slate-300" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="px-4 py-3">
                <p className="flex items-center justify-between text-[12px] font-medium text-slate-800">
                  利用データ
                  <span className="font-mono text-[11px] text-slate-500 tabular-nums">4</span>
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {data.map((d) => (
                    <Chip key={d} tone="outline">
                      {d}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="flex items-center justify-between text-[12px] font-medium text-slate-800">
                  例外処理
                  <span className="font-mono text-[11px] text-slate-500 tabular-nums">1</span>
                </p>
                <p className="mt-1.5 text-[12px] text-slate-600">試作品の設計変更（判定基準が異なる）</p>
              </div>
              <div className="bg-amber-50/60 px-4 py-3">
                <p className="text-[12px] font-medium text-amber-800">未確認事項 2件</p>
                <p className="mt-1 text-[12px] text-amber-800/80">最終判断者の権限範囲 / 判定結果の記録先</p>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </AppFrame>
  );
}
