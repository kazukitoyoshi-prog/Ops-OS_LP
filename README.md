# Ops OS コーポレート / プロダクトサイト

株式会社Ops OS と「Ops OS Flow」のWebサイトです。Next.js 16（App Router）/ TypeScript / Tailwind CSS v4 で構築しています。

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## 構成

```
src/
├─ app/
│  ├─ layout.tsx            フォント（Inter / Noto Sans JP）・メタデータ・OGP
│  ├─ page.tsx              トップページ（セクションの並び順）・構造化データ
│  ├─ globals.css           デザイントークン（色・フォント）・アニメーション
│  ├─ api/contact/route.ts  お問い合わせ受付（Webhook 転送）
│  ├─ icon.svg / favicon.ico / apple-icon.png
│  ├─ opengraph-image.png / twitter-image.png（+ .alt.txt）
│  └─ robots.ts / sitemap.ts
├─ content/site.ts          文言・会社情報・ユースケースなど（差し替えはここ）
├─ lib/                     cn ユーティリティ / フォームのバリデーション
└─ components/
   ├─ layout/               Header / Footer
   ├─ sections/             ページの各セクション
   ├─ mock/                 プロダクトUIモック（AppFrame・各画面）
   └─ ui/                   Logo / Container / SectionHeader / Reveal / ButtonLink
```

## 環境変数

`.env.example` を参照してください。

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 本番URL（canonical / OGP / sitemap）。未設定時は Vercel の本番URLを使用 |
| `CONTACT_WEBHOOK_URL` | お問い合わせの転送先（Slack Incoming Webhook 等）。本番で未設定だとフォーム送信はエラーを返します |

## Vercel へのデプロイ

1. このディレクトリを GitHub リポジトリに push
2. Vercel で「Add New → Project」からリポジトリを選択
   - Framework Preset は Next.js が自動検出されます（Root Directory の変更は不要）
3. Environment Variables に `NEXT_PUBLIC_SITE_URL` と `CONTACT_WEBHOOK_URL` を設定
4. Deploy。独自ドメインは Project → Settings → Domains から追加

CLI の場合：

```bash
npm i -g vercel
vercel        # プレビュー
vercel --prod # 本番
```
