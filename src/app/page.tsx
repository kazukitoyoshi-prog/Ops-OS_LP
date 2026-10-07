import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Value } from "@/components/sections/Value";
import { Positioning } from "@/components/sections/Positioning";
import { PlatformVision } from "@/components/sections/PlatformVision";
import { UseCases } from "@/components/sections/UseCases";
import { Services } from "@/components/sections/Services";
import { Company } from "@/components/sections/Company";
import { Contact } from "@/components/sections/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      alternateName: site.nameEn,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      description: site.mission,
    },
    {
      "@type": "SoftwareApplication",
      name: site.product,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: site.description,
      publisher: { "@type": "Organization", name: site.name },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Solution />
        <ProductShowcase />
        <Value />
        <Positioning />
        <PlatformVision />
        <UseCases />
        <Services />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
