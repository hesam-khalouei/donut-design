"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "نمونه‌کارها",
    title: "پروژه‌های ما",
    description:
      "مجموعه‌ای از پروژه‌هایی که در حوزه‌های مختلف طراحی کرده‌ایم.",
    all: "همه",
    categories: {
      fintech: "فین‌تک",
      logistics: "لجستیک",
      marketplace: "مارکت‌پلیس",
      travel: "سفر",
      saas: "SaaS",
      government: "دولتی",
    },
    viewCase: "مطالعه موردی",
  },
  en: {
    label: "Our Work",
    title: "Our projects",
    description: "A collection of projects we've designed across various domains.",
    all: "All",
    categories: {
      fintech: "FinTech",
      logistics: "Logistics",
      marketplace: "Marketplace",
      travel: "Travel",
      saas: "SaaS",
      government: "Government",
    },
    viewCase: "Read case study",
  },
  ar: {
    label: "أعمالنا",
    title: "مشاريعنا",
    description: "مجموعة من المشاريع التي صممناها في مجالات مختلفة.",
    all: "الكل",
    categories: {
      fintech: "التكنولوجيا المالية",
      logistics: "الخدمات اللوجستية",
      marketplace: "السوق",
      travel: "السفر",
      saas: "SaaS",
      government: "حكومي",
    },
    viewCase: "اقرأ دراسة الحالة",
  },
};

const projects = [
  {
    slug: "ewano",
    title: "Ewano",
    category: "fintech",
    description: "پلتفرم بانکداری و خدمات مالی دیجیتال",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
    year: "1403",
  },
  {
    slug: "postex",
    title: "Postex",
    category: "logistics",
    description: "پلتفرم مدیریت لجستیک و ارسال مرسولات",
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF6B35",
    year: "1403",
  },
  {
    slug: "vardast",
    title: "Vardast",
    category: "marketplace",
    description: "مارکت‌پلیس B2B و B2C ساختمانی",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
    year: "1402",
  },
  {
    slug: "kayak",
    title: "Kayak",
    category: "travel",
    description: "پلتفرم جستجوی سفر و بلیط",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
    year: "1402",
  },
  {
    slug: "hudhudtrip",
    title: "HudHudTrip",
    category: "travel",
    description: "پلتفرم رزرو آنلاین سفر",
    color: "from-amber-500/20 to-orange-500/20",
    accent: "#F59E0B",
    year: "1402",
  },
  {
    slug: "ronaQ",
    title: "Ronaq",
    category: "saas",
    description: "سیستم مانیتورینگ و مدیریت پروژه",
    color: "from-indigo-500/20 to-blue-500/20",
    accent: "#6366F1",
    year: "1402",
  },
  {
    slug: "mci-world-cup",
    title: "MCI World Cup",
    category: "saas",
    description: "پلتفرم پیش‌بینی مسابقات",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "#F43F5E",
    year: "1403",
  },
  {
    slug: "it-pishkhan",
    title: "IT Pishkhan",
    category: "government",
    description: "پورتال خدمات دفاتر پیشخوان دولت",
    color: "from-slate-500/20 to-gray-500/20",
    accent: "#64748B",
    year: "1401",
  },
];

export default function WorksPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "fintech", "logistics", "marketplace", "travel", "saas", "government"];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main>
      <section className="py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12"
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

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat === "all" ? t.all : t.categories[cat as keyof typeof t.categories]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link
                    href={`/${validLocale}/case-studies/${project.slug}`}
                    className="block group"
                  >
                    <div className="rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:shadow-xl">
                      <div
                        className={`aspect-[4/3] bg-gradient-to-br ${project.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-4xl md:text-5xl font-black opacity-30 group-hover:scale-110 transition-transform duration-700"
                            style={{ color: project.accent }}
                          >
                            {project.title}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[var(--color-primary)]">
                            {t.categories[project.category as keyof typeof t.categories]}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)]" />
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)]">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}