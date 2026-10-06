"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const translations = {
  fa: {
    label: "نمونه‌کارها",
    title: "پروژه‌های منتخب",
    description: "بعضی از کارهایی که بهشون افتخار می‌کنیم.",
    viewAll: "مشاهده همه پروژه‌ها",
    viewCase: "مطالعه موردی",
    cursorLabel: "مشاهده",
  },
  en: {
    label: "Our Work",
    title: "Selected projects",
    description: "Some of the work we're proud of.",
    viewAll: "View all projects",
    viewCase: "Read case study",
    cursorLabel: "View",
  },
  ar: {
    label: "أعمالنا",
    title: "مشاريع مختارة",
    description: "بعض الأعمال التي نفتخر بها.",
    viewAll: "عرض جميع المشاريع",
    viewCase: "اقرأ دراسة الحالة",
    cursorLabel: "عرض",
  },
};

const projects = [
  {
    title: "Ewano",
    category: { fa: "فین‌تک", en: "FinTech", ar: "التكنولوجيا المالية" },
    description: {
      fa: "پلتفرم بانکداری و خدمات مالی دیجیتال با تمرکز بر تجربه کاربری روان",
      en: "Digital banking and financial services platform focused on smooth UX",
      ar: "منصة مصرفية ومالية رقمية تركز على تجربة سلسة",
    },
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
  },
  {
    title: "Postex",
    category: { fa: "لجستیک", en: "Logistics", ar: "الخدمات اللوجستية" },
    description: {
      fa: "پلتفرم مدیریت لجستیک و ارسال مرسولات با بهینه‌سازی workflow",
      en: "Logistics and shipment management platform with workflow optimization",
      ar: "منصة إدارة الشحنات واللوجستيات مع تحسين سير العمل",
    },
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF6B35",
  },
  {
    title: "Vardast",
    category: { fa: "مارکت‌پلیس", en: "Marketplace", ar: "السوق" },
    description: {
      fa: "مارکت‌پلیس B2B و B2C ساختمانی با تمرکز بر onboarding فروشندگان",
      en: "B2B & B2C construction marketplace focused on seller onboarding",
      ar: "سوق بناء B2B و B2C يركز على تسجيل البائعين",
    },
    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
  },
  {
    title: "Kayak",
    category: { fa: "سفر", en: "Travel", ar: "السفر" },
    description: {
      fa: "پلتفرم جستجوی سفر و بلیط با رابط کاربری مدرن",
      en: "Travel and ticket search platform with modern UI",
      ar: "منصة البحث عن السفر والتذاكر بواجهة حديثة",
    },
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
  },
];

export default function FeaturedWorks() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[locale];

  return (
    <section className="py-20 md:py-32 bg-[var(--color-bg-alt)] [--section-card-bg:var(--color-bg)] [--section-card-bg-hover:var(--color-bg)] [--section-card-border:var(--color-border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-5">
              {t.label}
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              {t.description}
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href={`/${locale}/works`}>
              {t.viewAll}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/${locale}/case-studies/${project.title.toLowerCase()}`}
                className="block group"
                data-cursor="view"
                data-cursor-label={t.cursorLabel}
              >
                <div className="relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-[var(--color-primary)] transition-all duration-500">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-5xl md:text-7xl font-black opacity-20 group-hover:scale-110 transition-transform duration-700"
                        style={{ color: project.accent }}
                      >
                        {project.title}
                      </span>
                    </div>
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold">
                      {project.category[locale]}
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4">
                      {project.description[locale]}
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

        <div className="md:hidden mt-10 text-center">
          <Button variant="outline" href={`/${locale}/works`}>
            {t.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}