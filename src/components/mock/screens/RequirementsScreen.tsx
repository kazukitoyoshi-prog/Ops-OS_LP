import { Download, Plus } from "lucide-react";
import { AppFrame } from "../AppFrame";
import { Bar, Chip, MockButton, PageHeader, Panel, Tabs } from "../parts";

const rows = [
  { id: "REQ-008", text: "設計変更通知（PDF）から変更部位・変更内容を抽出する", type: "入力", task: "変更点の確認", data: "設計変更通知", status: "確定" },
  { id: "REQ-012", text: "変更内容から影響を受ける部品・工程を特定する", type: "判断", task: "影響範囲の特定", data: "BOM / 工程表", status: "確定" },
  { id: "REQ-013", text: "過去の類似不具合を根拠付きで3件以上提示する", type: "出力", task: "類似不具合の調査", data: "トラブル台帳", status: "確定" },
  { id: "REQ-014", text: "判断根拠を参照元文書・該当箇所と紐づけて表示する", type: "出力", task: "影響評価レビュー", data: "—", status: "レビュー中" },
  { id: "REQ-015", text: "機密図面データは社内環境のみで処理する", type: "非機能", task: "全体", data: "図面 (CAD)", status: "確定" },
  { id: "REQ-016", text: "試作品の設計変更は量産品と異なる基準で判定する", type: "例外", task: "影響度の判定", data: "判定基準表", status: "要確認" },
  { id: "REQ-017", text: "影響度を高・中・低の3段階で分類し、理由を併記する", type: "判断", task: "影響度の判定", data: "判定基準表", status: "レビュー中" },
  { id: "REQ-018", text: "回答までの処理時間を1件あたり30秒以内とする", type: "非機能", task: "全体", data: "—", status: "確定" },
];

const coverage = [
  { label: "業務フロー", done: 8, total: 8 },
  { label: "判断基準", done: 6, total: 7 },
  { label: "利用データ", done: 6, total: 7 },
  { label: "例外処理・非機能", done: 4, total: 6 },
];

export function RequirementsScreen() {
  return (
    <AppFrame active="requirements" breadcrumb={["設計変更時の品質影響検討AI", "AI要件"]}>
      <div className="flex h-full flex-col gap-4">
        <PageHeader
          eyebrow="Step 03"
          title="AI要件一覧"
          meta={<Chip>28件</Chip>}
          actions={
            <>
              <MockButton>
                <Download className="size-3.5" /> エクスポート
              </MockButton>
              <MockButton primary>
                <Plus className="size-3.5" /> 要件を追加
              </MockButton>
            </>
          }
        />
        <Tabs items={["すべて 28", "入力 6", "判断 9", "出力 7", "例外 2", "非機能 4"]} active={0} />
        <Panel className="min-h-0 flex-1 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[11px] text-slate-500">
              <tr className="border-b border-slate-200">
                <th className="px-4 py-2.5 font-normal">ID</th>
                <th className="py-2.5 font-normal">要件</th>
                <th className="py-2.5 font-normal">種別</th>
                <th className="py-2.5 font-normal">関連業務</th>
                <th className="py-2.5 font-normal">利用データ</th>
                <th className="px-4 py-2.5 font-normal">状態</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-[9px] font-mono text-[11.5px] text-slate-500 tabular-nums">{r.id}</td>
                  <td className="py-[9px] pr-4 text-slate-800">{r.text}</td>
                  <td className="py-[9px]">
                    <Chip>{r.type}</Chip>
                  </td>
                  <td className="py-[9px] text-slate-600">{r.task}</td>
                  <td className="py-[9px] text-slate-600">{r.data}</td>
                  <td className="px-4 py-[9px]">
                    <Chip tone={r.status === "確定" ? "teal" : r.status === "要確認" ? "amber" : "outline"}>{r.status}</Chip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <Panel className="grid grid-cols-4 divide-x divide-slate-100 py-3">
          {coverage.map((c) => (
            <div key={c.label} className="px-4">
              <p className="flex items-baseline justify-between text-[11.5px] text-slate-500">
                {c.label}
                <span className="text-slate-800 tabular-nums">
                  {c.done}/{c.total}
                </span>
              </p>
              <Bar value={(c.done / c.total) * 100} className="mt-2" tone={c.done === c.total ? "teal" : "navy"} />
            </div>
          ))}
        </Panel>
      </div>
    </AppFrame>
  );
}
