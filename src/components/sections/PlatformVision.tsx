import { ArrowRight, Factory } from "lucide-react";
import { departments, flywheel, platformAssets, solutionPartners } from "@/content/site";
import { Br, Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";

/** Animated dashed connector: horizontal on desktop, vertical on mobile. */
function Connector() {
  return (
    <div aria-hidden className="flex items-center justify-center text-[#7fc4cb]">
      <svg className="hidden lg:block" width="56" height="12" viewBox="0 0 56 12">
        <path d="M0 6 H48" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" className="animate-dash" fill="none" />
        <path d="M47 1 L54 6 L47 11" stroke="currentColor" strokeWidth="1.25" fill="none" />
      </svg>
      <svg className="lg:hidden" width="12" height="40" viewBox="0 0 12 40">
        <path d="M6 0 V32" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" className="animate-dash" fill="none" />
        <path d="M1 31 L6 38 L11 31" stroke="currentColor" strokeWidth="1.25" fill="none" />
      </svg>
    </div>
  );
}

export function PlatformVision() {
  return (
    <section id="platform" aria-labelledby="platform-title" className="bg-navy-deep py-24 text-white md:py-36">
      <Container>
        <SectionHeader
          id="platform-title"
          index="06"
          eyebrow="Platform Vision"
          inverted
          title={
            <>
              AI活用設計を起点に、
              <Br />
              製造業と最適なAI Solutionをつなぐ。
            </>
          }
          lead="Ops OS Flowは、個別のAIツールではなく、製造業のAI活用を設計・判断するための基盤です。設計データが蓄積されるほど、最適なSolutionとの接続精度が高まります。"
        />

        <Reveal className="mt-16 grid items-stretch gap-3 md:mt-20 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr] lg:gap-4">
          {/* Manufacturers */}
          <div className="rounded-xl border border-white/15 p-6 md:p-7">
            <p className="text-xs text-slate-400">Manufacturers</p>
            <p className="mt-3 flex items-center gap-2.5 text-xl font-bold">
              <Factory aria-hidden className="size-5 text-[#7fc4cb]" strokeWidth={1.5} />
              製造業
            </p>
            <p className="mt-2 text-sm text-slate-300">大手・中堅製造業</p>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {departments.map((d) => (
                <li key={d} className="rounded border border-white/10 px-2 py-0.5 text-xs text-slate-300">
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <Connector />

          {/* Core */}
          <div className="rounded-xl border border-[#7fc4cb]/50 bg-white/[0.04] p-6 md:p-7">
            <p className="text-xs text-[#a9d6db]">AI活用設計基盤</p>
            <p className="mt-3 flex items-center gap-2.5 text-xl font-bold">
              <LogoMark inverted className="h-5 w-auto" />
              Ops OS Flow
            </p>
            <p className="mt-6 text-xs text-slate-400">蓄積されるデータ</p>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {platformAssets.map((a) => (
                <li key={a} className="rounded-md bg-white/[0.06] px-3 py-2 text-sm text-slate-100">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <Connector />

          {/* Solutions */}
          <div className="rounded-xl border border-white/15 p-6 md:p-7">
            <p className="text-xs text-slate-400">AI Solutions</p>
            <ul className="mt-3 divide-y divide-white/10">
              {solutionPartners.map((s) => (
                <li key={s} className="py-2.5 text-[0.9375rem] text-slate-100 first:pt-0 last:pb-0">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Flywheel */}
        <Reveal className="mt-20 border-t border-white/15 pt-12 md:mt-28">
          <h3 className="jp-heading text-xl font-bold md:text-2xl">利用が増えるほど、次の案件の精度と速度が上がる。</h3>
          <p className="mt-3 max-w-2xl text-[0.9375rem] text-slate-300">
            案件の業務・要件・Solution・評価結果を構造化して蓄積。使われるほど、製造業AI活用の標準プロセスと実績データが厚みを増します。
          </p>
          <ol className="mt-10 grid gap-3 md:grid-cols-4 md:gap-0">
            {flywheel.map((f, i) => (
              <li key={f} className="flex items-center gap-3 md:gap-0">
                <div className="flex flex-1 items-center gap-3 rounded-lg border border-white/15 px-4 py-4">
                  <span className="font-mono text-xs text-[#7fc4cb] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-slate-100">{f}</span>
                </div>
                {i < flywheel.length - 1 && <ArrowRight aria-hidden className="hidden size-4 shrink-0 text-slate-500 md:mx-2 md:block" />}
              </li>
            ))}
          </ol>
          <div aria-hidden className="mt-3 hidden md:block">
            <svg className="h-6 w-full text-slate-500" viewBox="0 0 1000 24" preserveAspectRatio="none">
              <path d="M875 0 V12 H125 V2" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <p className="mt-2 text-xs text-slate-400">このサイクルが、案件を重ねるごとに回り続けます。</p>
        </Reveal>
      </Container>
    </section>
  );
}
