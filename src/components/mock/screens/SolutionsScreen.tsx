import { cn } from "@/lib/cn";
import { AppFrame } from "../AppFrame";
import { Bar, Chip, MockButton, PageHeader, Panel } from "../parts";

const options = [
  { name: "社内RAG構築", kind: "内製", fit: 71, initial: "600万円", monthly: "15万円", period: "4〜6ヶ月", storage: "社内", ext: "高" },
  { name: "技術文書検索AI", kind: "AI SaaS", fit: 88, initial: "200万円", monthly: "45万円", period: "1〜2ヶ月", storage: "国内クラウド", ext: "中", recommended: true },
  { name: "個別AI開発", kind: "AI開発会社", fit: 92, initial: "1,800万円", monthly: "30万円", period: "6〜9ヶ月", storage: "社内 / 選択可", ext: "高" },
  { name: "PLMのAI機能拡張", kind: "既存システム", fit: 54, initial: "300万円", monthly: "20万円", period: "2〜3ヶ月", storage: "既存PLM", ext: "低" },
];

const rows: Array<{ label: string; key: "initial" | "monthly" | "period" | "storage" | "ext" }> = [
  { label: "初期費用", key: "initial" },
  { label: "月額費用", key: "monthly" },
  { label: "導入期間", key: "period" },
  { label: "データ保管", key: "storage" },
  { label: "拡張性", key: "ext" },
];

export function SolutionsScreen() {
  return (
    <AppFrame active="solutions" breadcrumb={["設計変更時の品質影響検討AI", "Solution比較"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="Step 03"
          title="Solution比較"
          meta={<Chip>AI要件 28項目で評価</Chip>}
          actions={<MockButton primary>比較レポートを出力</MockButton>}
        />
        <Panel className="min-h-0 flex-1 overflow-hidden">
          <div className="grid grid-cols-[150px_repeat(4,1fr)]">
            <div className="border-b border-slate-200 bg-slate-50" />
            {options.map((o) => (
              <div
                key={o.name}
                className={cn("relative border-b border-l border-slate-200 px-4 py-3.5", o.recommended ? "bg-teal-soft/50" : "bg-slate-50")}
              >
                {o.recommended && <Chip tone="navy" className="absolute top-3 right-3">推奨</Chip>}
                <p className="text-[11px] text-slate-500">{o.kind}</p>
                <p className="mt-0.5 text-[14px] font-semibold text-slate-900">{o.name}</p>
              </div>
            ))}

            <div className="flex items-center border-b border-slate-100 px-4 text-[12px] text-slate-500">要件適合度</div>
            {options.map((o) => (
              <div key={o.name} className={cn("border-b border-l border-slate-100 px-4 py-4", o.recommended && "bg-teal-soft/30")}>
                <p className="text-[20px] font-semibold text-slate-900 tabular-nums">
                  {o.fit}
                  <span className="ml-0.5 text-[12px] font-normal text-slate-500">%</span>
                </p>
                <Bar value={o.fit} className="mt-1.5" tone={o.recommended ? "teal" : "slate"} />
              </div>
            ))}

            {rows.map((row) => (
              <div key={row.key} className="contents">
                <div className="flex items-center border-b border-slate-100 px-4 py-3 text-[12px] text-slate-500">{row.label}</div>
                {options.map((o) => (
                  <div
                    key={o.name}
                    className={cn("border-b border-l border-slate-100 px-4 py-3 text-slate-800 tabular-nums", o.recommended && "bg-teal-soft/30")}
                  >
                    {o[row.key]}
                  </div>
                ))}
              </div>
            ))}

            <div className="flex items-center px-4 py-3 text-[12px] text-slate-500">評価コメント</div>
            {[
              "要件適合は高いが、立上げに時間を要する",
              "適合度・期間・費用のバランスが最も良い",
              "適合度は最高。費用対効果は全社展開が前提",
              "既存資産を活用できるが、判断支援が弱い",
            ].map((c, i) => (
              <div
                key={c}
                className={cn("border-l border-slate-100 px-4 py-3 text-[12px] leading-relaxed text-slate-600", options[i].recommended && "bg-teal-soft/30")}
              >
                {c}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppFrame>
  );
}
