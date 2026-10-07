import { Database, ShieldCheck, Timer } from "lucide-react";
import { values } from "@/content/site";
import { Br, Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const icons = [Timer, ShieldCheck, Database];

export function Value() {
  return (
    <section aria-labelledby="value-title" className="py-24 md:py-40">
      <Container>
        <SectionHeader
          id="value-title"
          index="04"
          eyebrow="Value"
          title={
            <>
              AI活用設計を、
              <Br />
              速く、高品質に、再利用可能に。
            </>
          }
        />
        <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-3 md:gap-10">
          {values.map((v, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={v.title} delay={i * 100} className="border-t border-line pt-8">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden className="size-6 text-teal" strokeWidth={1.5} />
                  <span className="text-sm text-slate-400">{v.en}</span>
                </div>
                <h3 className="mt-10 text-2xl font-bold text-ink md:text-[1.75rem]">{v.title}</h3>
                <p className="mt-4 text-[0.9375rem] text-pretty text-slate-600">{v.body}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
