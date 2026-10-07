import { positioning } from "@/content/site";
import { Br, Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LogoMark } from "@/components/ui/Logo";

export function Positioning() {
  return (
    <section aria-labelledby="positioning-title" className="bg-mist py-24 md:py-36">
      <Container>
        <SectionHeader
          id="positioning-title"
          index="05"
          eyebrow="Positioning"
          title={
            <>
              AIを「実行する」前の、
              <Br />
              「何をAI化するか」を支援。
            </>
          }
          lead="Ops OS Flowは、生成AIやAI Agent、コンサル・SIerを置き換えるものではありません。それらをより適切に活用するための、上流の設計基盤です。"
        />

        <Reveal className="mt-14 md:mt-20">
          <div className="grid overflow-hidden rounded-xl border border-line bg-white lg:grid-cols-12">
            {/* Upstream: Ops OS Flow */}
            <div className="flex flex-col justify-between bg-navy p-7 text-white md:p-10 lg:col-span-4">
              <div>
                <p className="text-[0.8125rem] text-[#a9d6db]">上流｜何を・なぜAI化するか</p>
                <p className="mt-6 flex items-center gap-3 text-2xl font-bold">
                  <LogoMark inverted className="h-6 w-auto" />
                  Ops OS Flow
                </p>
                <p className="mt-4 text-[0.9375rem] text-slate-200">製造業のAI活用設計を標準化</p>
              </div>
              <ul className="mt-10 space-y-2 border-t border-white/15 pt-6 text-sm text-slate-300">
                <li>活用テーマ・ROI</li>
                <li>業務フロー・AI要件</li>
                <li>Solution選定・PoC評価基準</li>
              </ul>
            </div>

            {/* Downstream: complementary players */}
            <div className="lg:col-span-8">
              <div className="hidden grid-cols-12 border-b border-line px-8 py-4 text-xs text-slate-500 md:grid">
                <span className="col-span-4">実行・支援のレイヤー</span>
                <span className="col-span-3">役割</span>
                <span className="col-span-5">Ops OS Flowとの関係</span>
              </div>
              <ul>
                {positioning.map((p) => (
                  <li key={p.name} className="grid gap-2 border-b border-line px-7 py-6 last:border-0 md:grid-cols-12 md:gap-4 md:px-8 md:py-7">
                    <p className="font-bold text-ink [word-break:auto-phrase] md:col-span-4">{p.name}</p>
                    <p className="text-sm text-slate-500 md:col-span-3">{p.role}</p>
                    <p className="text-sm text-pretty text-slate-600 md:col-span-5">{p.relation}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
