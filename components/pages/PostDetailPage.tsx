"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { getPostBySlug, posts, categories } from "@/lib/posts";

const translations = {
  fa: {
    back: "بازگشت به بلاگ",
    share: "اشتراک‌گذاری",
    tags: "برچسب‌ها",
    relatedPosts: "مقالات مرتبط",
    readMore: "ادامه مطلب",
    readTime: "دقیقه",
    notFound: "مقاله یافت نشد",
    backHome: "بازگشت به خانه",
  },
  en: {
    back: "Back to blog",
    share: "Share",
    tags: "Tags",
    relatedPosts: "Related articles",
    readMore: "Read more",
    readTime: "min read",
    notFound: "Post not found",
    backHome: "Back to home",
  },
  ar: {
    back: "العودة إلى المدونة",
    share: "مشاركة",
    tags: "الوسوم",
    relatedPosts: "مقالات ذات صلة",
    readMore: "اقرأ المزيد",
    readTime: "دقيقة",
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

// تبدیل Markdown ساده به HTML
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={key++}
            className="my-6 p-4 rounded-[var(--radius-md)] bg-[var(--color-bg-dark)] text-white text-sm overflow-x-auto"
            dir="ltr"
          >
            <code>{codeBuffer.join("\n")}</code>
          </pre>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl md:text-3xl font-black mt-12 mb-5">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      // Bold markdown
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={key++} className="text-lg leading-relaxed mb-5 text-[var(--color-text-muted)]">
          {parts.map((part, idx) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={idx} className="text-[var(--color-text)] font-bold">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    }
  }

  return elements;
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
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-black mb-6">{t.notFound}</h1>
            <Button href={`/${validLocale}/blog`}>{t.backHome}</Button>
          </div>
        </Container>
      </main>
    );
  }

  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href={`/${validLocale}/blog`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
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

            <Link
              href={`/${validLocale}/blog?category=${post.category}`}
              className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-5"
            >
              {categories[post.category as keyof typeof categories][validLocale]}
            </Link>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {post.title[validLocale]}
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-8">
              {post.excerpt[validLocale]}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[var(--color-border)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
                  {post.author.initial}
                </div>
                <div>
                  <div className="font-bold text-sm">{post.author.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">
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
      <section className="pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`max-w-5xl mx-auto aspect-[16/9] rounded-[var(--radius-xl)] bg-gradient-to-br ${post.coverColor} relative overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-6xl md:text-8xl font-black opacity-30 px-8 text-center leading-tight"
                style={{ color: post.coverAccent }}
              >
                {categories[post.category as keyof typeof categories][validLocale]}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-20">
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            {renderContent(post.content[validLocale])}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
              <div className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                {t.tags}
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${validLocale}/blog/tag/${tag}`}
                    className="px-3 py-1.5 rounded-full bg-[var(--color-bg-alt)] text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </motion.article>
        </Container>
      </section>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[var(--color-bg-alt)]">
          <Container>
            <h2 className="text-3xl font-black mb-10 text-center">
              {t.relatedPosts}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/${validLocale}/blog/${rp.slug}`}
                  className="group block"
                >
                  <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[var(--color-bg)]">
                    <div
                      className={`aspect-[16/10] bg-gradient-to-br ${rp.coverColor}`}
                    />
                    <div className="p-5">
                      <h3 className="font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors text-sm leading-snug">
                        {rp.title[validLocale]}
                      </h3>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {rp.readTime} {t.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}