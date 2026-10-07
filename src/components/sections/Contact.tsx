import { Br, Container, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-mist py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="09">Contact</Eyebrow>
            <h2 id="contact-title" className="jp-heading mt-5 text-[1.75rem] font-bold text-ink sm:text-4xl">
              製造業のAI活用を、
              <Br />
              PoCから一緒に
              <Br />
              検証しませんか。
            </h2>
            <p className="mt-6 text-base text-pretty text-slate-600">
              現在、Ops OS Flowでは製造業のAI活用に関するユーザーテスト・有償PoCパートナーを募集しています。
            </p>
            <ul className="mt-10 space-y-3 border-t border-line pt-8 text-sm text-slate-600">
              <li>・AI活用テーマが定まらず、検討が進んでいない</li>
              <li>・業務部門とIT部門の間で要件がまとまらない</li>
              <li>・PoCの評価基準や本番移行の判断に悩んでいる</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">このようなご相談からお受けしています。</p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
