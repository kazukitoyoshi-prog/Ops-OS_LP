import { departments, site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ScaledFrame } from "@/components/mock/ScaledFrame";
import { OverviewScreen } from "@/components/mock/screens/OverviewScreen";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="bg-drafting pointer-events-none absolute inset-x-0 top-0 h-[44rem]" />

      <Container className="relative pt-16 md:pt-24 lg:pt-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-[0.8125rem] text-slate-600">
            <span className="size-1.5 rounded-full bg-teal" aria-hidden />
            製造業のAI活用設計を標準化する
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-8">
            <h1
              id="hero-title"
              className="jp-heading text-[2rem] font-bold text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ lineHeight: 1.25 }}
            >
              {site.vision.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:pb-2" delay={120}>
            <p className="text-base text-pretty text-slate-600 md:text-[1.0625rem]">
              製造業のAI活用に必要な「選ぶ・設計する・評価する・改善する」を、一つの基盤で。
              <span className="mt-3 block text-sm text-slate-500">
                テーマ選定から業務整理、AI要件設計、Solution選定、PoC、運用改善まで。
              </span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="#contact" arrow className="lg:w-full">
                PoC・ユーザーテストに相談
              </ButtonLink>
              <ButtonLink href="#product" variant="secondary" className="lg:w-full">
                Ops OS Flowを見る
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>

      <Container className="relative mt-16 md:mt-20">
        <Reveal delay={200}>
          <div className="animate-float rounded-xl border border-line bg-white p-1.5 shadow-[0_24px_60px_-28px_rgb(15_36_64/0.28)] md:p-2">
            <ScaledFrame
              className="rounded-lg"
              label="Ops OS Flowのプロジェクト画面。5つのステップの進捗、AI要件の一覧、製造業標準チェック、AIからの提案が表示されている。"
            >
              <OverviewScreen />
            </ScaledFrame>
          </div>
        </Reveal>
      </Container>

      <Container className="relative pt-10 pb-20 md:pb-28">
        <div className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-[0.8125rem] text-slate-500">主な利用部門</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[0.9375rem] font-medium text-slate-700">
            {departments.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
