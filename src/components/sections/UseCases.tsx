import { Building2, Factory, Handshake, Package, Ruler, ShieldCheck } from "lucide-react";
import { useCases } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Ruler, ShieldCheck, Factory, Package, Handshake, Building2];

export function UseCases() {
  return (
    <section id="use-cases" aria-labelledby="use-cases-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader
          id="use-cases-title"
          index="07"
          eyebrow="Use Cases"
          title="製造業の幅広いAI活用へ。"
          lead="設計から管理部門まで。部門ごとに異なる業務とデータを、同じプロセスでAI活用へつなげます。"
        />
        <Reveal className="mt-14 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {useCases.map((u, i) => {
            const Icon = icons[i];
            return (
              <div key={u.domain} className="border-r border-b border-line p-7 md:p-9">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                    <Icon aria-hidden className="size-5 text-teal" strokeWidth={1.5} />
                    {u.domain}
                  </h3>
                  <span className="text-xs text-slate-400">{u.en}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {u.examples.map((e) => (
                    <li key={e} className="flex gap-2.5">
                      <span aria-hidden className="mt-[0.7rem] h-px w-2.5 shrink-0 bg-slate-400" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
