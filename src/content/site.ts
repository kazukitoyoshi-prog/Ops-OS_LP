/**
 * Site copy and structured content.
 * Text that is likely to be revised (company info, examples, services) lives here
 * so it can be updated without touching layout code.
 */

export const site = {
  name: "株式会社Ops OS",
  nameEn: "Ops OS, Inc.",
  product: "Ops OS Flow",
  // 本番ドメインは環境変数 NEXT_PUBLIC_SITE_URL で指定。未設定時は Vercel の本番URL → localhost の順で使用
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  title: "Ops OS Flow | 製造業のAI活用設計を標準化するSaaS",
  description:
    "Ops OS Flowは、製造業のAI活用に必要な「選ぶ・設計する・評価する・改善する」を一つの基盤で管理するSaaSです。活用テーマ選定から業務整理、AI要件設計、Solution選定、PoC、運用改善までを標準化します。",
  vision: ["日本の製造業における", "現場の知を、", "AI時代の競争力へ"],
  mission:
    "現場の知をAIが活かせる要件に変換し、継続的に活用・改善できる仕組みを標準化する。",
} as const;

export const nav = [
  { href: "#problem", label: "課題" },
  { href: "#solution", label: "Ops OS Flow" },
  { href: "#product", label: "プロダクト" },
  { href: "#platform", label: "ビジョン" },
  { href: "#company", label: "会社概要" },
] as const;

export const departments = ["DX推進", "情報システム", "設計", "品質保証", "生産技術", "調達"] as const;

export const verbs = [
  { ja: "選ぶ", en: "Select", steps: "01", span: 1 },
  { ja: "設計する", en: "Design", steps: "02–03", span: 2 },
  { ja: "評価する", en: "Evaluate", steps: "04", span: 1 },
  { ja: "改善する", en: "Improve", steps: "05", span: 1 },
] as const;

export const steps = [
  {
    no: "01",
    title: "AI活用テーマ選定",
    items: ["活用候補を提案", "期待効果 / ROI算定", "優先順位付け"],
  },
  {
    no: "02",
    title: "業務・データ理解",
    items: ["AIによるヒアリング", "既存ドキュメント読込", "As-Is業務フロー生成", "課題 / データ要件整理"],
  },
  {
    no: "03",
    title: "AI要件・Solution設計",
    items: ["AI要件整理", "AI適合箇所提案", "To-Be業務フロー", "内製 / SaaS / AI開発等のSolution比較"],
  },
  {
    no: "04",
    title: "PoC・開発",
    items: ["PoCスコープ", "KPI", "評価基準", "テストケース"],
  },
  {
    no: "05",
    title: "本番導入・運用",
    items: ["ROIモニタリング", "実績データ管理", "業務フロー / 要件改善", "次案件への知見再利用"],
  },
] as const;

export const values = [
  {
    en: "Speed",
    title: "工数削減",
    body: "AIヒアリングと成果物のドラフト生成で、情報収集・整理にかかる作業を削減します。",
  },
  {
    en: "Quality",
    title: "品質向上",
    body: "製造業向けに標準化された質問とチェックで、要件の抜け漏れを抑えます。",
  },
  {
    en: "Reuse",
    title: "知見蓄積",
    body: "業務・要件・Solution・評価結果を蓄積し、次のAI活用へ再利用できます。",
  },
] as const;

export const positioning = [
  {
    name: "生成AI / 汎用AI",
    role: "AI利用・生成",
    relation: "設計したユースケースと業務要件をもとに、生成AIを適切な業務へ組み込む。",
  },
  {
    name: "AI Agent / オーケストレーター",
    role: "AI実行・自動化",
    relation: "To-Be業務フローとAI要件を、実行基盤への確かな入力として引き渡す。",
  },
  {
    name: "コンサル / SIer",
    role: "人による個別支援",
    relation: "標準化された要件・評価基準を共通言語に、支援の質とスピードを高める。",
  },
] as const;

export const platformAssets = ["業務課題", "業務フロー", "AI要件", "Solution選定", "PoC評価", "導入実績"] as const;

export const solutionPartners = ["AI SaaS", "AI開発会社", "SIer", "コンサル", "AI Agent / 実行基盤"] as const;

export const flywheel = ["AI案件が増える", "業務・要件を構造化", "Solution・PoC結果を蓄積", "次の案件の精度・速度が向上"] as const;

// TODO: 実案件・検証状況に合わせて例を差し替え
export const useCases = [
  { en: "Design", domain: "設計", examples: ["図面・類似部品検索", "技術文書活用", "設計変更時の品質検討"] },
  { en: "Quality", domain: "品質", examples: ["FMEA / DRBFM", "不具合情報の横断検索", "品質問い合わせ対応"] },
  { en: "Production", domain: "生産", examples: ["作業標準・技術伝承", "設備保全記録の活用", "生産計画の検討支援"] },
  { en: "Procurement", domain: "調達", examples: ["見積自動化", "調達分析", "サプライヤーリスク把握"] },
  { en: "Sales", domain: "営業", examples: ["見積回答の効率化", "技術問い合わせ対応", "提案資料作成"] },
  { en: "Corporate", domain: "管理部門", examples: ["社内文書検索", "規程・手続きの問い合わせ対応", "契約書確認"] },
] as const;

export const services = [
  { title: "AI活用研修", body: "部門ごとのAI活用テーマ発見と、要件設計の基礎を学ぶ研修。" },
  { title: "AI活用コンサルティング", body: "Ops OS Flowを用いたテーマ選定・要件設計・PoC計画の伴走支援。" },
  { title: "AIツール / ベンダーマッチング", body: "設計したAI要件に適したSaaS・開発会社・SIerのご紹介。" },
] as const;

export const company = {
  rows: [
    { label: "会社名", value: "株式会社Ops OS" },
    { label: "事業内容", value: "製造業向けAI活用設計SaaS「Ops OS Flow」の開発・提供" },
    { label: "代表", value: "豊吉 一貴" },
    // TODO: 所在地・設立日を追記
  ],
  founder: {
    name: "豊吉 一貴",
    nameEn: "Kazuki Toyoshi",
    role: "Founder",
    career: [
      { tag: "製造業の現場", body: "自動車部品メーカーで調達・原価企画" },
      { tag: "システム要件定義", body: "製造業DX / システム刷新コンサルティング" },
      { tag: "SaaS", body: "製造業SaaSで営業・カスタマーサクセス" },
    ],
    note: "立教大学MBA在学",
  },
} as const;
