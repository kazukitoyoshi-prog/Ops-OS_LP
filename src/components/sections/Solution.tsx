import { Repeat } from "lucide-react";
import { steps, verbs } from "@/content/site";
import { Br, Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const verbForStep: Record<string, string> = { "01": "選ぶ", "02": "設計する", "03": "設計する", "04": "評価する", "05": "改善する" };

export function Solution() {
  return (
    <section id="solution" aria-labelledby="solution-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader
          id="solution-title"
          index="02"
          eyebrow="Solution — Ops OS Flow"
          title={
            <>
              AI活用に必要な
              <Br />
              「選ぶ・設計する・評価する・改善する」を
              <Br />
              一つの基盤で。
            </>
          }
          lead="Ops OS Flowは、AI活用のテーマ選定から運用改善までを一貫して管理する、製造業のためのAI活用設計基盤です。各ステップの成果物と判断の経緯が、一つの場所に残ります。"
          wide
        />

        {/* Verb band (desktop): shows which steps each verb covers */}
        <Reveal className="mt-20 hidden grid-cols-5 gap-x-6 lg:grid">
          {verbs.map((v) => (
            <div key={v.en} className="border-t-2 border-navy pt-4" style={{ gridColumn: `span ${v.span}` }}>
              <p className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-ink">{v.ja}</span>
                <span className="text-sm text-slate-500">{v.en}</span>
              </p>
            </div>
          ))}
        </Reveal>

        <ol className="relative mt-14 grid lg:mt-12 lg:grid-cols-5 lg:gap-x-6">
          <span aria-hidden className="absolute top-0 bottom-0 left-4 w-px bg-line lg:top-4 lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 80} className="relative pb-12 pl-14 last:pb-0 lg:pb-0 lg:pl-0">
              <span className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-full border border-navy bg-white font-mono text-xs text-navy tabular-nums lg:relative">
                {step.no}
              </span>
              <p className="mb-1 text-xs font-medium text-teal lg:hidden">{verbForStep[step.no]}</p>
              <h3 className="jp-heading text-lg font-bold text-ink lg:mt-7">{step.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {step.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden className="mt-[0.7rem] h-px w-2.5 shrink-0 bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 flex items-center gap-3 border-t border-line pt-6 text-sm text-slate-600">
          <Repeat aria-hidden className="size-4 shrink-0 text-teal" strokeWidth={1.75} />
          運用で得た実績データと知見は、次のAI活用テーマの選定・設計へ引き継がれます。
        </Reveal>
      </Container>
    </section>
  );
}
