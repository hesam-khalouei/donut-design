"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";
import { posts, categories } from "@/lib/posts";

const translations = {
  fa: {
    label: "بلاگ",
    title: "آخرین مقالات",
    description: "درباره طراحی محصول، تجربه کاربری و دیزاین سیستم.",
    all: "همه",
    readMore: "ادامه مطلب",
    readTime: "دقیقه",
    noPosts: "مقاله‌ای در این دسته‌بندی وجود نداره.",
  },
  en: {
    label: "Blog",
    title: "Latest articles",
    description: "On product design, UX, and design systems.",
    all: "All",
    readMore: "Read more",
    readTime: "min read",
    noPosts: "No articles in this category.",
  },
  ar: {
    label: "المدونة",
    title: "أحدث المقالات",
    description: "عن تصميم المنتج وتجربة المستخدم وأنظمة التصميم.",
    all: "الكل",
    readMore: "اقرأ المزيد",
    readTime: "دقيقة",
    noPosts: "لا توجد مقالات في هذه الفئة.",
  },
};

function formatDate(dateStr: string, locale: string) {
  const date = new Date(dateStr);
  if (locale === "fa") {
    return date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  if (locale === "ar") {
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];
  const [filter, setFilter] = useState("all");

  const categoryKeys = Object.keys(categories);
  const filtered =
    filter === "all" ? posts : posts.filter((p) => p.category === filter);

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

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {t.all}
            </button>
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {categories[cat as keyof typeof categories][validLocale]}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-[var(--color-text-muted)] py-20">
              {t.noPosts}
            </p>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((post, idx) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <Link
                      href={`/${validLocale}/blog/${post.slug}`}
                      className="block group h-full"
                    >
                      <div className="h-full flex flex-col rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[var(--color-bg)]">
                        {/* Cover */}
                        <div
                          className={`aspect-[16/10] bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span
                              className="text-3xl font-black opacity-30 px-4 text-center leading-tight"
                              style={{ color: post.coverAccent }}
                            >
                              {categories[post.category as keyof typeof categories][validLocale]}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-3 mb-3 text-xs text-[var(--color-text-muted)]">
                            <span className="font-bold text-[var(--color-primary)]">
                              {categories[post.category as keyof typeof categories][validLocale]}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-current" />
                            <span>
                              {post.readTime} {t.readTime}
                            </span>
                          </div>

                          <h2 className="text-lg font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                            {post.title[validLocale]}
                          </h2>
                          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 flex-1">
                            {post.excerpt[validLocale]}
                          </p>

                          <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] pt-5 border-t border-[var(--color-border)]">
                            <span>{formatDate(post.date, validLocale)}</span>
                            <span className="text-[var(--color-primary)] font-medium flex items-center gap-1">
                              {t.readMore}
                              <svg
                                className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}