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
    title: "Ewano — بازطراحی پلتفرم بانکداری دیجیتال",
    excerpt:
      "چطور با بازطراحی جریان‌های کاربری، نرخ تبدیل پلتفرم رو ۲۵٪ افزایش دادیم.",
    category: "FinTech",
    result: "افزایش ۲۵٪ نرخ تبدیل",
    readTime: "۸",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
  },
  {
    slug: "postex",
    title: "Postex — بهینه‌سازی dashboard عملیات",
    excerpt:
      "کاهش ۲۰٪ زمان انجام تسک‌ها با بازطراحی dashboard و بهینه‌سازی workflow.",
    category: "Logistics",
    result: "کاهش ۲۰٪ زمان تسک",
    readTime: "۷",
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF6B35",
  },
  {
    slug: "vardast",
    title: "Vardast — بازطراحی onboarding فروشندگان",
    excerpt:
      "کاهش ۱۵٪ نرخ ریزش در onboarding با طراحی مجدد جریان ثبت‌نام.",
    category: "Marketplace",
    result: "کاهش ۱۵٪ ریزش",
    readTime: "۹",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
  },
  {
    slug: "kayak",
    title: "Kayak — بهبود تجربه جستجوی سفر",
    excerpt:
      "بازطراحی کامل رابط کاربری موتور جستجو با تمرکز بر سرعت و سادگی.",
    category: "Travel",
    result: "بهبود تجربه کاربری",
    readTime: "۶",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
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
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:shadow-xl bg-[var(--color-bg)]">
                    {/* Visual */}
                    <div
                      className={`aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-gradient-to-br ${cs.color} relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-5xl md:text-7xl font-black opacity-25 group-hover:scale-110 transition-transform duration-700"
                          style={{ color: cs.accent }}
                        >
                          {cs.title.split(" ")[0]}
                        </span>
                      </div>
                      <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold">
                        {cs.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4 text-xs text-[var(--color-text-muted)]">
                        <span className="font-bold text-[var(--color-primary)]">
                          {cs.result}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-current" />
                        <span>
                          {t.readTime}: {cs.readTime} {t.min}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                        {cs.title}
                      </h2>
                      <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                        {cs.excerpt}
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