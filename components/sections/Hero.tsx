"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const translations = {
  fa: {
    badge: "آژانس طراحی محصولات دیجیتال",
    titleLine1: "تجربه‌های دیجیتال،",
    titleLine2: "با طعم متفاوت",
    description:
      "ما محصولات دیجیتالی می‌سازیم که کار می‌کنن — با تمرکز بر تجربه کاربری، دیزاین سیستم، و تصمیم‌های داده‌محور.",
    ctaPrimary: "شروع پروژه",
    ctaSecondary: "مشاهده نمونه‌کارها",
    stats: [
      { value: "+۷", label: "سال تجربه" },
      { value: "+۴۰", label: "پروژه موفق" },
      { value: "٪۴۰", label: "بهبود بهره‌وری" },
      { value: "+۱۱", label: "حوزه تخصصی" },
    ],
  },
  en: {
    badge: "Digital Product Design Agency",
    titleLine1: "Digital experiences,",
    titleLine2: "with a different taste",
    description:
      "We build digital products that work — focused on UX, design systems, and data-informed decisions.",
    ctaPrimary: "Start a project",
    ctaSecondary: "View our work",
    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "40+", label: "Projects Delivered" },
      { value: "40%", label: "Efficiency Gain" },
      { value: "11+", label: "Domains" },
    ],
  },
  ar: {
    badge: "وكالة تصميم المنتجات الرقمية",
    titleLine1: "تجارب رقمية،",
    titleLine2: "بمذاق مختلف",
    description:
      "نبني منتجات رقمية تعمل — بتركيز على تجربة المستخدم وأنظمة التصميم والقرارات المبنية على البيانات.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
    stats: [
      { value: "+7", label: "سنوات خبرة" },
      { value: "+40", label: "مشروع ناجح" },
      { value: "40%", label: "تحسين الكفاءة" },
      { value: "+11", label: "مجال تخصص" },
    ],
  },
};

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[locale];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // افکت پارالکس
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // انیمیشن‌های ورود
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* گرادینت‌های تزئینی */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-20 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-[var(--color-primary)] opacity-10 blur-[100px] rounded-full pointer-events-none"
      />

      {/* گرید تزئینی */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <Container className="relative z-10">
        <motion.div
          style={{ opacity, scale }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-medium border border-[var(--color-primary)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              {t.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tight"
          >
            <span className="block">{t.titleLine1}</span>
            <span className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
              {t.titleLine2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-20"
          >
            <Button size="lg" href={`/${locale}/contact`}>
              {t.ctaPrimary}
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="outline" size="lg" href={`/${locale}/works`}>
              {t.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
          >
            {t.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[var(--color-primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--color-border)] flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[var(--color-primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}