"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "مطالعات موردی",
    title: "داستان پروژه‌ها",
    description:
      "روایت کامل پروژه‌ها — چالش، راه‌حل، و نتیجه‌ای که به دست آوردیم.",
    viewCase: "مطالعه کامل",
    readTime: "زمان مطالعه",
    min: "دقیقه",
  },
  en: {
    label: "Case Studies",
    title: "Project stories",
    description:
      "The full story — challenge, solution, and the outcome we achieved.",
    viewCase: "Read full case",
    readTime: "Read time",
    min: "min",
  },
  ar: {
    label: "دراسات الحالة",
    title: "قصص المشاريع",
    description: "القصة الكاملة — التحدي والحل والنتيجة التي حققناها.",
    viewCase: "اقرأ الحالة كاملة",
    readTime: "وقت القراءة",
    min: "دقيقة",
  },
};

const caseStudies = [
  {
    slug: "ewano",
    title: {
      fa: "Ewano — بازطراحی پلتفرم بانکداری دیجیتال",
      en: "Ewano — Redesigning a digital banking platform",
      ar: "Ewano — إعادة تصميم منصة مصرفية رقمية",
    },
    excerpt: {
      fa: "چطور با بازطراحی جریان‌های کاربری، نرخ تبدیل پلتفرم رو ۲۵٪ افزایش دادیم.",
      en: "How we increased platform conversion by 25% through flow redesign.",
      ar: "كيف زدنا تحويل المنصة بنسبة 25% من خلال إعادة تصميم التدفقات.",
    },
    category: "FinTech",
    result: {
      fa: "افزایش ۲۵٪ نرخ تبدیل",
      en: "25% conversion increase",
      ar: "زيادة 25% في التحويل",
    },
    readTime: "8",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
  },
  {
    slug: "postex",
    title: {
      fa: "Postex — بهینه‌سازی dashboard عملیات",
      en: "Postex — Optimizing operations dashboard",
      ar: "Postex — تحسين لوحة تحكم العمليات",
    },
    excerpt: {
      fa: "کاهش ۲۰٪ زمان انجام تسک‌ها با بازطراحی dashboard و process mining.",
      en: "Reducing task time by 20% with dashboard redesign and process mining.",
      ar: "تقليل وقت المهمة بنسبة 20% من خلال إعادة تصميم اللوحة وتحليل العمليات.",
    },
    category: "Logistics",
    result: {
      fa: "کاهش ۲۰٪ زمان تسک",
      en: "20% task time reduction",
      ar: "تقليل 20% في وقت المهمة",
    },
    readTime: "7",
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF6B35",
  },
  {
    slug: "vardast",
    title: {
      fa: "Vardast — بازطراحی onboarding فروشندگان",
      en: "Vardast — Redesigning seller onboarding",
      ar: "Vardast — إعادة تصميم تسجيل البائعين",
    },
    excerpt: {
      fa: "کاهش ۱۵٪ نرخ ریزش در onboarding با طراحی مجدد جریان ثبت‌نام.",
      en: "Reducing onboarding drop-off by 15% through signup flow redesign.",
      ar: "تقليل التسرب في التسجيل بنسبة 15% من خلال إعادة تصميم التدفق.",
    },
    category: "Marketplace",
    result: {
      fa: "کاهش ۱۵٪ ریزش",
      en: "15% drop-off reduction",
      ar: "تقليل 15% في التسرب",
    },
    readTime: "9",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
  },
  {
    slug: "ebcom",
    title: {
      fa: "EBCOM — ساخت دیزاین سیستم شرکتی",
      en: "EBCOM — Building a company-wide design system",
      ar: "EBCOM — بناء نظام تصميم على مستوى الشركة",
    },
    excerpt: {
      fa: "کاهش ۳۰٪ زمان handoff و ۲۵٪ بهبود بهره‌وری با دیزاین سیستم مقیاس‌پذیر.",
      en: "Reducing handoff time by 30% and improving efficiency by 25% with a scalable design system.",
      ar: "تقليل وقت التسليم بنسبة 30% وتحسين الكفاءة بنسبة 25% بنظام تصميم قابل للتوسع.",
    },
    category: "SaaS",
    result: {
      fa: "کاهش ۳۰٪ زمان handoff",
      en: "30% handoff time reduction",
      ar: "تقليل 30% في وقت التسليم",
    },
    readTime: "6",
    color: "from-indigo-500/20 to-blue-500/20",
    accent: "#6366F1",
  },
];

export default function CaseStudiesPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  return (
    <main>
      <section className="py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-5">
              {t.label}
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)]">
              {t.description}
            </p>
          </motion.div>

          <div className="space-y-6">
            {caseStudies.map((cs, idx) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={`/${validLocale}/case-studies/${cs.slug}`}
                  className="block group"
                  data-cursor="view"
                  data-cursor-label={t.viewCase}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:shadow-xl bg-[var(--section-card-bg)]">
                    <div
                      className={`aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-gradient-to-br ${cs.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-5xl md:text-7xl font-black opacity-25 group-hover:scale-110 transition-transform duration-700"
                          style={{ color: cs.accent }}
                        >
                          {cs.slug === "ebcom" ? "EBCOM" : cs.slug.charAt(0).toUpperCase() + cs.slug.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold">
                        {cs.category}
                      </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4 text-xs text-[var(--color-text-muted)]">
                        <span className="font-bold text-[var(--color-primary)]">
                          {cs.result[validLocale]}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-current" />
                        <span>
                          {t.readTime}: {cs.readTime} {t.min}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                        {cs.title[validLocale]}
                      </h2>
                      <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                        {cs.excerpt[validLocale]}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]">
                        {t.viewCase}
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}