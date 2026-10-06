"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FinalCTA from "@/components/sections/FinalCTA";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  coverColor: string;
  coverAccent: string;
  source: "wordpress" | "local";
}

const translations = {
  fa: {
    label: "بلاگ",
    title: "آخرین مقالات",
    description: "درباره طراحی محصول، تجربه کاربری و دیزاین سیستم.",
    readMore: "ادامه مطلب",
    readTime: "دقیقه",
    loading: "در حال بارگذاری...",
    noPosts: "هنوز مقاله‌ای منتشر نشده.",
  },
  en: {
    label: "Blog",
    title: "Latest articles",
    description: "On product design, UX, and design systems.",
    readMore: "Read more",
    readTime: "min read",
    loading: "Loading...",
    noPosts: "No articles published yet.",
  },
  ar: {
    label: "المدونة",
    title: "أحدث المقالات",
    description: "عن تصميم المنتج وتجربة المستخدم وأنظمة التصميم.",
    readMore: "اقرأ المزيد",
    readTime: "دقيقة",
    loading: "جارٍ التحميل...",
    noPosts: "لم يتم نشر أي مقالات بعد.",
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

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

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

          {loading ? (
            <p className="text-center text-[var(--color-text-muted)] py-20">
              {t.loading}
            </p>
          ) : posts.length === 0 ? (
            <p className="text-center text-[var(--color-text-muted)] py-20">
              {t.noPosts}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Link
                    href={`/${validLocale}/blog/${post.slug}`}
                    className="block group h-full"
                  >
                    <div className="h-full flex flex-col rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-[var(--color-bg)]">
                      <div
                        className={`aspect-[16/10] bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-3xl font-black opacity-30 px-4 text-center leading-tight"
                            style={{ color: post.coverAccent }}
                          >
                            {post.title}
                          </span>
                        </div>
                        {post.source === "wordpress" && (
                          <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-green-500/90 text-white text-xs font-bold">
                            WP
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3 text-xs text-[var(--color-text-muted)]">
                          <span>
                            {post.readTime} {t.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                          {post.title}
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 flex-1">
                          {post.excerpt}
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
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}