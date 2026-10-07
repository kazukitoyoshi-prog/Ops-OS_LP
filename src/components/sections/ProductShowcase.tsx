"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";
import { Br, Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ScaledFrame } from "@/components/mock/ScaledFrame";
import { ThemesScreen } from "@/components/mock/screens/ThemesScreen";
import { HearingScreen } from "@/components/mock/screens/HearingScreen";
import { FlowScreen } from "@/components/mock/screens/FlowScreen";
import { RequirementsScreen } from "@/components/mock/screens/RequirementsScreen";
import { SolutionsScreen } from "@/components/mock/screens/SolutionsScreen";
import { PocScreen } from "@/components/mock/screens/PocScreen";
import { OpsScreen } from "@/components/mock/screens/OpsScreen";

const screens = [
  {
    id: "themes",
    step: "01",
    label: "AI活用テーマ",
    title: "期待効果と実現性から、取り組むべきテーマを選ぶ",
    body: "製造業の業務・事例データをもとに活用候補を提案。期待効果・ROI・実現性を並べて、優先順位を合意できます。",
    Screen: ThemesScreen,
  },
  {
    id: "hearing",
    step: "02",
    label: "AIヒアリング",
    title: "対話と既存資料から、現場の業務を構造化する",
    body: "AIが標準化された質問でヒアリングし、業務ステップ・判断基準・利用データ・例外処理を自動で整理します。",
    Screen: HearingScreen,
  },
  {
    id: "flow",
    step: "02–03",
    label: "業務フロー",
    title: "As-Is から To-Be へ。AIを組み込む箇所を可視化する",
    body: "ヒアリング結果から業務フローを生成し、AIに適した工程と、人が判断すべき工程を切り分けます。",
    Screen: FlowScreen,
  },
  {
    id: "requirements",
    step: "03",
    label: "AI要件一覧",
    title: "抜け漏れのないAI要件を、チェックしながら固める",
    body: "入力・判断・出力・例外・非機能の観点で要件を整理。製造業向けの標準チェックで不足項目を指摘します。",
    Screen: RequirementsScreen,
  },
  {
    id: "solutions",
    step: "03",
    label: "Solution比較",
    title: "内製・SaaS・AI開発を、同じ物差しで比較する",
    body: "AI要件への適合度、費用、期間、データ保管の条件から、最適な実現手段を選定できます。",
    Screen: SolutionsScreen,
  },
  {
    id: "poc",
    step: "04",
    label: "PoC評価",
    title: "KPIとテストケースで、本番移行を判断する",
    body: "PoCのスコープ・評価基準・テストケースを設計し、結果を一元管理。移行可否の判断根拠を残せます。",
    Screen: PocScreen,
  },
  {
    id: "ops",
    step: "05",
    label: "運用ダッシュボード",
    title: "導入後の効果を測り、要件を改善し続ける",
    body: "ROIと利用実績をモニタリングし、改善提案を提示。得られた知見は次の案件に引き継がれます。",
    Screen: OpsScreen,
  },
] as const;

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = screens[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    let next: number | null = null;
    if (e.key in keys) next = (active + keys[e.key] + screens.length) % screens.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = screens.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="product" aria-labelledby="product-title" className="border-y border-line bg-mist py-24 md:py-36">
      <Container>
        <SectionHeader
          id="product-title"
          index="03"
          eyebrow="Product"
          title={
            <>
              製造業のAI活用設計を、
              <Br />
              一つのワークスペースで。
            </>
          }
          lead="テーマ選定から運用改善まで、すべての成果物がつながったまま蓄積されます。"
        />

        <Reveal className="mt-12 -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0">
          <div role="tablist" aria-label="Ops OS Flowの画面" onKeyDown={onKeyDown} className="flex w-max gap-1 rounded-lg border border-line bg-white p-1">
            {screens.map((s, i) => (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={i === active}
                aria-controls="product-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3.5 py-2 text-sm whitespace-nowrap transition-colors duration-150",
                  i === active ? "bg-navy text-white" : "text-slate-600 hover:bg-mist hover:text-ink",
                )}
              >
                <span className={cn("font-mono text-[11px] tabular-nums", i === active ? "text-[#a9d6db]" : "text-slate-400")}>{s.step}</span>
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container size="wide" className="mt-8">
        <Reveal>
          <div
            role="tabpanel"
            id="product-panel"
            aria-labelledby={`tab-${current.id}`}
            className="rounded-xl border border-line bg-white p-1.5 shadow-[0_24px_60px_-32px_rgb(15_36_64/0.25)] md:p-2"
          >
            <ScaledFrame className="rounded-lg" label={`${current.label}の画面イメージ。${current.body}`}>
              <current.Screen />
            </ScaledFrame>
          </div>
        </Reveal>
      </Container>

      <Container className="mt-10">
        <div className="grid gap-4 md:grid-cols-12 md:gap-8">
          <p className="font-mono text-sm text-teal tabular-nums md:col-span-2">Step {current.step}</p>
          <div className="md:col-span-7" aria-live="polite">
            <h3 className="jp-heading text-lg font-bold text-ink md:text-xl">{current.title}</h3>
            <p className="mt-3 text-[0.9375rem] text-slate-600">{current.body}</p>
          </div>
          <p className="text-xs text-slate-500 md:col-span-3 md:text-right">※ 画面は開発中のイメージです。表示データはすべてサンプルです。</p>
        </div>
      </Container>
    </section>
  );
}
