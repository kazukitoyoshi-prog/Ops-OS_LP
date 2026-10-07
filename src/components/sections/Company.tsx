import { company, site } from "@/content/site";
import { Container, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Company() {
  const { founder } = company;
  return (
    <section id="company" aria-labelledby="company-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader id="company-title" index="08" eyebrow="Company" title="会社概要" />

        <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="rounded-lg bg-mist px-6 py-6 md:px-8">
              <p className="text-xs text-slate-500">Mission</p>
              <p className="jp-heading mt-2 text-lg font-bold text-ink">{site.mission}</p>
            </div>
            <dl className="mt-8">
              {company.rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-5 text-[0.9375rem]">
                  <dt className="text-slate-500">{row.label}</dt>
                  <dd className="text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={100}>
            <p className="text-xs text-slate-500">{founder.role}</p>
            <p className="mt-2 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-ink">{founder.name}</span>
              <span className="text-sm text-slate-500">{founder.nameEn}</span>
            </p>
            <p className="mt-5 text-[0.9375rem] text-pretty text-slate-600">
              製造業の現場、システム要件定義、SaaSの3つを経験。現場の業務とシステムの間で起きる「要件のすれ違い」を、プロダクトで解消することを目指しています。
            </p>
            <ol className="mt-8 border-l border-line">
              {founder.career.map((c) => (
                <li key={c.tag} className="relative py-3 pl-6">
                  <span aria-hidden className="absolute top-[1.15rem] -left-[3px] size-[5px] rounded-full bg-teal" />
                  <p className="text-xs font-medium text-teal">{c.tag}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink">{c.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 pl-6 text-sm text-slate-500">{founder.note}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
