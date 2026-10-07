import { services } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Supporting services: intentionally quieter than the product sections. */
export function Services() {
  return (
    <section aria-labelledby="services-title" className="border-y border-line bg-mist py-16 md:py-20">
      <Container>
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>Services</Eyebrow>
            <h2 id="services-title" className="jp-heading mt-4 text-lg font-bold text-ink">
              Ops OS Flowの活用を支える支援サービス
            </h2>
          </div>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {services.map((s) => (
              <li key={s.title}>
                <h3 className="text-[0.9375rem] font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
