import { nav, site } from "@/content/site";
import { Container } from "@/components/ui/Section";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm text-slate-600">{site.mission}</p>
          </div>
          <nav aria-label="フッター">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm sm:grid-cols-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-slate-600 transition-colors duration-150 hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-slate-600 transition-colors duration-150 hover:text-ink">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.product} は株式会社Ops OSが提供する製造業向けAI活用設計SaaSです。</p>
        </div>
      </Container>
    </footer>
  );
}
