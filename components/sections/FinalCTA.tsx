"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { FinalCTASection } from "@/types/sections";

const translations = {
  fa: {
    title: "آماده شروع پروژه‌ای؟",
    description:
      "بیا درباره ایده‌ات حرف بزنیم. بدون تعهد، بدون هزینه — فقط یه گفتگوی صادقانه.",
    cta: "شروع گفتگو",
    email: "یا ایمیل بزن",
  },
  en: {
    title: "Ready to start a project?",
    description:
      "Let's talk about your idea. No commitment, no cost — just an honest conversation.",
    cta: "Start a conversation",
    email: "Or send an email",
  },
  ar: {
    title: "مستعد لبدء مشروع؟",
    description:
      "لنتحدث عن فكرتك. بدون التزام، بدون تكلفة — مجرد محادثة صادقة.",
    cta: "ابدأ محادثة",
    email: "أو أرسل بريدًا إلكترونيًا",
  },
};

function normalizeFinalCTAData(
  data: FinalCTASection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;
  return {
    title: data.title || fallback.title,
    description: data.description || fallback.description,
    cta: data.cta_text || fallback.cta,
    email: data.email_text || fallback.email,
  };
}

interface FinalCTAProps {
  data?: FinalCTASection;
  locale?: string;
}

export default function FinalCTA({
  data,
  locale: propLocale,
}: FinalCTAProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  const t = normalizeFinalCTAData(data, locale);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] md:w-[800px] h-[300px] md:h-[400px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          <h2 className="text-3xl leading-[1.15] sm:text-4xl md:text-7xl font-black mb-5 md:mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-base md:text-xl text-[var(--color-text-muted)] mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button size="lg" href={`/${locale}/contact`}>
              {t.cta}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <a
              href="mailto:hesam.khalouei8@gmail.com"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors px-4 py-3"
            >
              {t.email}
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}