"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { BlogPreviewSection } from "@/types/sections";

const translations = {
  fa: {
    label: "بلاگ",
    title: "آخرین مقالات",
    description: "درباره طراحی، تجربه کاربری و محصول.",
    viewAll: "مشاهده همه مقالات",
    readMore: "ادامه مطلب",
    posts: [
      { title: "چرا دیزاین سیستم برای هر تیمی ضروریه؟", excerpt: "دیزاین سیستم فقط یه کتابخانه کامپوننت نیست.", category: "دیزاین سیستم", readTime: "۵ دقیقه", date: "۱۴۰۳/۰۸/۱۵" },
      { title: "پژوهش کاربر در محصولات B2B", excerpt: "کاربر B2B با کاربر B2C فرق داره.", category: "پژوهش", readTime: "۷ دقیقه", date: "۱۴۰۳/۰۸/۰۸" },
      { title: "از اسکچ تا پروتوتایپ: یه مسیر عملی", excerpt: "چطور از ایده خام به پروتوتایپ قابل تست برسیم.", category: "فرآیند", readTime: "۶ دقیقه", date: "۱۴۰۳/۰۷/۳۰" },
    ],
  },
  en: {
    label: "Blog",
    title: "Latest articles",
    description: "On design, UX, and product.",
    viewAll: "View all articles",
    readMore: "Read more",
    posts: [
      { title: "Why design systems matter for every team", excerpt: "A design system is not just a component library.", category: "Design System", readTime: "5 min", date: "2024/11/05" },
      { title: "User research in B2B products", excerpt: "B2B users differ from B2C users.", category: "Research", readTime: "7 min", date: "2024/10/28" },
      { title: "From sketch to prototype: a practical path", excerpt: "How to go from raw idea to testable prototype.", category: "Process", readTime: "6 min", date: "2024/10/20" },
    ],
  },
  ar: {
    label: "المدونة",
    title: "أحدث المقالات",
    description: "عن التصميم وتجربة المستخدم والمنتج.",
    viewAll: "عرض جميع المقالات",
    readMore: "اقرأ المزيد",
    posts: [
      { title: "لماذا تهم أنظمة التصميم لكل فريق؟", excerpt: "نظام التصميم ليس مجرد مكتبة مكونات.", category: "نظام التصميم", readTime: "5 دقيقة", date: "2024/11/05" },
      { title: "أبحاث المستخدم في منتجات B2B", excerpt: "مستخدمو B2B يختلفون عن B2C.", category: "البحث", readTime: "7 دقيقة", date: "2024/10/28" },
      { title: "من الرسم إلى النموذج الأولي", excerpt: "كيف تنتقل من الفكرة الخام إلى النموذج القابل للاختبار.", category: "العملية", readTime: "6 دقيقة", date: "2024/10/20" },
    ],
  },
};

function normalizeBlogPreviewData(
  data: BlogPreviewSection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;
  return {
    label: data.label || fallback.label,
    title: data.title || fallback.title,
    description: data.description || fallback.description,
    viewAll: data.view_all_text || fallback.viewAll,
    readMore: fallback.readMore,
    posts: fallback.posts, // فعلاً از fallback
  };
}

interface BlogPreviewProps {
  data?: BlogPreviewSection;
  locale?: string;
}

export default function BlogPreview({
  data,
  locale: propLocale,
}: BlogPreviewProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  const t = normalizeBlogPreviewData(data, locale);

  return (
    <section className="py-16 md:py-32">
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
            <Button variant="outline" href={`/${locale}/blog`}>
              {t.viewAll}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {t.posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/${locale}/blog/post-${idx + 1}`}
                className="block group h-full"
              >
                <div className="h-full flex flex-col p-6 md:p-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4 md:mb-5 flex-wrap">
                    <span className="text-xs font-bold text-[var(--color-primary)]">
                      {post.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)]" />
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] pt-5 border-t border-[var(--color-border)] gap-2">
                    <span className="truncate">{post.date}</span>
                    <span className="text-[var(--color-primary)] font-medium flex items-center gap-1 shrink-0">
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
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="md:hidden mt-8 text-center">
          <Button variant="outline" href={`/${locale}/blog`}>
            {t.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}