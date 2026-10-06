"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; initial: string };
  date: string;
  readTime: number;
  coverColor: string;
  coverAccent: string;
  source: "wordpress" | "local";
}

const translations = {
  fa: {
    back: "بازگشت به بلاگ",
    tags: "برچسب‌ها",
    relatedPosts: "مقالات مرتبط",
    readMore: "ادامه مطلب",
    readTime: "دقیقه",
    loading: "در حال بارگذاری...",
    notFound: "مقاله یافت نشد",
    backHome: "بازگشت به خانه",
  },
  en: {
    back: "Back to blog",
    tags: "Tags",
    relatedPosts: "Related articles",
    readMore: "Read more",
    readTime: "min read",
    loading: "Loading...",
    notFound: "Post not found",
    backHome: "Back to home",
  },
  ar: {
    back: "العودة إلى المدونة",
    tags: "الوسوم",
    relatedPosts: "مقالات ذات صلة",
    readMore: "اقرأ المزيد",
    readTime: "دقيقة",
    loading: "جارٍ التحميل...",
    notFound: "المقال غير موجود",
    backHome: "العودة إلى الرئيسية",
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

export default function PostDetailPage({
  locale,
  slug,
}: {
  locale: string;
  slug: string;
}) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) {
          setPost(null);
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Failed to load post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Container>
          <p className="text-center text-[var(--color-text-muted)]">
            {t.loading}
          </p>
        </Container>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-black mb-6">
              {t.notFound}
            </h1>
            <Button href={`/${validLocale}/blog`}>{t.backHome}</Button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href={`/${validLocale}/blog`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6 md:mb-8"
            >
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {t.back}
            </Link>

            <h1 className="text-3xl leading-tight sm:text-4xl md:text-6xl font-black mb-5 md:mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-base md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-6 md:mb-8">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-5 md:pt-6 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {post.author.initial}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm truncate">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)] truncate">
                    {formatDate(post.date, validLocale)} · {post.readTime}{" "}
                    {t.readTime}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Cover */}
      <section className="pb-10 md:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`max-w-5xl mx-auto aspect-[16/10] md:aspect-[16/9] rounded-[var(--radius-lg)] md:rounded-[var(--radius-xl)] bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <span
                className="text-4xl sm:text-5xl md:text-8xl font-black opacity-40 px-6 text-center leading-tight truncate max-w-full"
                style={{ color: post.coverAccent }}
              >
                {post.title}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-20">
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto prose-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="max-w-3xl mx-auto mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[var(--color-border)]">
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                {t.tags}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${validLocale}/blog/tag/${tag}`}
                    className="px-3 py-1.5 rounded-full bg-[var(--color-bg-alt)] text-xs md:text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}