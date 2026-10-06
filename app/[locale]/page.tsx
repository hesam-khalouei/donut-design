import FlexibleContent from "@/components/sections/FlexibleContent";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { getPageSections } from "@/lib/content";

// ⚠️ Fallback: اگه وردپرس دیتا نداشت، از این استفاده کن
const FALLBACK_SECTIONS = [
  { acf_fc_layout: "hero" },
  { acf_fc_layout: "services" },
  { acf_fc_layout: "featured_works" },
  { acf_fc_layout: "process" },
  { acf_fc_layout: "testimonials" },
  { acf_fc_layout: "blog_preview" },
  { acf_fc_layout: "final_cta" },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = ["fa", "en", "ar"].includes(locale) ? locale : "fa";

  // اول تلاش کن از وردپرس بگیر
  const wpSections = await getPageSections("home");

  // اگه وردپرس دیتا داشت، از اون استفاده کن
  // وگرنه، Fallback (سکشن‌های ثابت)
  if (wpSections && wpSections.length > 0) {
    return (
      <main>
        <FlexibleContent sections={wpSections} locale={validLocale} />
      </main>
    );
  }

  // Fallback
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <FeaturedWorks />
      <Process />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}