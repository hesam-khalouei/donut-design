"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import type { ProcessSection } from "@/types/sections";

const translations = {
  fa: {
    label: "فرآیند کار",
    title: "چطور کار می‌کنیم",
    description: "یه فرآیند شفاف که نتیجه می‌ده.",
    steps: [
      { number: "۰۱", title: "کشف", description: "با شما و کاربراتون حرف می‌زنیم." },
      { number: "۰۲", title: "تعریف", description: "مسئله رو دقیق تعریف می‌کنیم." },
      { number: "۰۳", title: "طراحی", description: "از اسکچ تا پروتوتایپ." },
      { number: "۰۴", title: "تحویل", description: "دیزاین سیستم و هندآف به توسعه‌دهنده." },
    ],
  },
  en: {
    label: "Our Process",
    title: "How we work",
    description: "A transparent process that delivers.",
    steps: [
      { number: "01", title: "Discover", description: "We talk to you and your users." },
      { number: "02", title: "Define", description: "We precisely define the problem." },
      { number: "03", title: "Design", description: "From sketch to prototype." },
      { number: "04", title: "Deliver", description: "Design system and developer handoff." },
    ],
  },
  ar: {
    label: "عمليتنا",
    title: "كيف نعمل",
    description: "عملية شفافة تحقق النتائج.",
    steps: [
      { number: "01", title: "الاكتشاف", description: "نتحدث معك ومع مستخدميك." },
      { number: "02", title: "التحديد", description: "نحدد المشكلة بدقة." },
      { number: "03", title: "التصميم", description: "من الرسم إلى النموذج الأولي." },
      { number: "04", title: "التسليم", description: "نظام التصميم والتسليم للمطورين." },
    ],
  },
};

function normalizeProcessData(
  data: ProcessSection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;
  return {
    label: data.label || fallback.label,
    title: data.title || fallback.title,
    description: data.description || fallback.description,
    steps:
      data.steps && data.steps.length > 0
        ? data.steps.map((s) => ({
            number: s.number,
            title: s.title,
            description: s.description,
          }))
        : fallback.steps,
  };
}

interface ProcessProps {
  data?: ProcessSection;
  locale?: string;
}

export default function Process({ data, locale: propLocale }: ProcessProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  const t = normalizeProcessData(data, locale);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-10 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-4 md:mb-5">
            {t.label}
          </span>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-6xl font-black mb-3 md:mb-6">
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-muted)]">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

          {t.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              <div className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-border)] flex items-center justify-center mb-5 md:mb-6">
                <span className="text-3xl md:text-4xl font-black text-[var(--color-primary)]">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}