"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { FeaturedWorksSection } from "@/types/sections";

const translations = {
  fa: {
    label: "نمونه‌کارها",
    title: "پروژه‌های منتخب",
    description: "بعضی از کارهایی که بهشون افتخار می‌کنیم.",
    viewAll: "مشاهده همه پروژه‌ها",
    viewCase: "مطالعه موردی",
    cursorLabel: "مشاهده",
    projects: [
      { title: "Ewano", category: "فین‌تک", description: "پلتفرم بانکداری و خدمات مالی دیجیتال", slug: "ewano", color: "from-blue-500/25 to-cyan-500/25", accent: "#3B82F6" },
      { title: "Postex", category: "لجستیک", description: "پلتفرم مدیریت لجستیک و ارسال مرسولات", slug: "postex", color: "from-orange-500/25 to-red-500/25", accent: "#FF6B35" },
      { title: "Vardast", category: "مارکت‌پلیس", description: "مارکت‌پلیس B2B و B2C ساختمانی", slug: "vardast", color: "from-purple-500/25 to-pink-500/25", accent: "#8B5CF6" },
      { title: "Kayak", category: "سفر", description: "پلتفرم جستجوی سفر و بلیط", slug: "kayak", color: "from-emerald-500/25 to-teal-500/25", accent: "#10B981" },
    ],
  },
  en: {
    label: "Our Work",
    title: "Selected projects",
    description: "Some of the work we're proud of.",
    viewAll: "View all projects",
    viewCase: "Read case study",
    cursorLabel: "View",
    projects: [
      { title: "Ewano", category: "FinTech", description: "Digital banking platform", slug: "ewano", color: "from-blue-500/25 to-cyan-500/25", accent: "#3B82F6" },
      { title: "Postex", category: "Logistics", description: "Logistics management platform", slug: "postex", color: "from-orange-500/25 to-red-500/25", accent: "#FF6B35" },
      { title: "Vardast", category: "Marketplace", description: "B2B & B2C marketplace", slug: "vardast", color: "from-purple-500/25 to-pink-500/25", accent: "#8B5CF6" },
      { title: "Kayak", category: "Travel", description: "Travel search platform", slug: "kayak", color: "from-emerald-500/25 to-teal-500/25", accent: "#10B981" },
    ],
  },
  ar: {
    label: "أعمالنا",
    title: "مشاريع مختارة",
    description: "بعض الأعمال التي نفتخر بها.",
    viewAll: "عرض جميع المشاريع",
    viewCase: "اقرأ دراسة الحالة",
    cursorLabel: "عرض",
    projects: [
      { title: "Ewano", category: "التكنولوجيا المالية", description: "منصة مصرفية رقمية", slug: "ewano", color: "from-blue-500/25 to-cyan-500/25", accent: "#3B82F6" },
      { title: "Postex", category: "اللوجستيات", description: "منصة إدارة الشحنات", slug: "postex", color: "from-orange-500/25 to-red-500/25", accent: "#FF6B35" },
      { title: "Vardast", category: "السوق", description: "سوق بناء B2B و B2C", slug: "vardast", color: "from-purple-500/25 to-pink-500/25", accent: "#8B5CF6" },
      { title: "Kayak", category: "السفر", description: "منصة البحث عن السفر", slug: "kayak", color: "from-emerald-500/25 to-teal-500/25", accent: "#10B981" },
    ],
  },
};

function normalizeFeaturedWorksData(
  data: FeaturedWorksSection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;
  return {
    label: data.label || fallback.label,
    title: data.title || fallback.title,
    description: data.description || fallback.description,
    viewAll: data.view_all_text || fallback.viewAll,
    viewCase: fallback.viewCase,
    cursorLabel: fallback.cursorLabel,
    projects:
      data.projects && data.projects.length > 0
        ? data.projects.map((p) => ({
            title: p.title,
            category: p.category,
            description: p.description,
            slug: p.slug,
            color: p.color,
            accent: p.accent,
          }))
        : fallback.projects,
  };
}

interface FeaturedWorksProps {
  data?: FeaturedWorksSection;
  locale?: string;
}

export default function FeaturedWorks({
  data,
  locale: propLocale,
}: FeaturedWorksProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  const t = normalizeFeaturedWorksData(data, locale);

  return (
    <section className="py-16 md:py-32 bg-[var(--color-bg-alt)] [--section-card-bg:var(--color-bg)] [--section-card-bg-hover:var(--color-bg)] [--section-card-border:var(--color-border)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-4 md:mb-5">
              {t.label}
            </span>
            <h2 className="text-3xl leading-tight sm:text-4xl md:text-6xl font-black mb-3 md:mb-4">
              {t.title}
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)]">
              {t.description}
            </p>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href={`/${locale}/works`}>
              {t.viewAll}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {t.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/${locale}/case-studies/${project.slug}`}
                className="block group"
                data-cursor="view"
                data-cursor-label={t.cursorLabel}
              >
                <div className="relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--section-card-bg)] border border-[var(--section-card-border)] hover:border-[var(--color-primary)] transition-all duration-500">
                  <div
                    className={`aspect-[16/10] md:aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <span
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 truncate max-w-full"
                        style={{ color: project.accent }}
                      >
                        {project.title}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] md:text-xs font-bold text-gray-900">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
                      {project.description}
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

        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" href={`/${locale}/works`}>
            {t.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}