"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ScrambleText from "@/components/ui/ScrambleText";
import type { HeroSection } from "@/types/sections";

// ---------- Fallback Translations ----------
const translations = {
  fa: {
    badge: "آژانس طراحی محصولات دیجیتال",
    titleLine1: "محصولات دیجیتال،",
    titleLine2: "با تمرکز بر تجربه",
    description:
      "بیش از ۷ سال تجربه در طراحی محصولات پیچیده B2B و B2C در حوزه‌های فین‌تک، SaaS، لجستیک و مارکت‌پلیس. متخصص در ساده‌سازی فرایندهای پیچیده و ساخت دیزاین سیستم‌های مقیاس‌پذیر.",
    ctaPrimary: "شروع پروژه",
    ctaSecondary: "مشاهده نمونه‌کارها",
    stats: [
      { value: "+۷", label: "سال تجربه" },
      { value: "+۴۰", label: "پروژه موفق" },
      { value: "٪۴۰", label: "بهبود بهره‌وری" },
      { value: "۲", label: "دیزاین سیستم" },
    ],
  },
  en: {
    badge: "Digital Product Design Agency",
    titleLine1: "Digital products,",
    titleLine2: "focused on experience",
    description:
      "7+ years designing complex B2B and B2C products across FinTech, SaaS, Logistics, and Marketplace. Specialized in simplifying complex workflows and building scalable design systems.",
    ctaPrimary: "Start a project",
    ctaSecondary: "View our work",
    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "40+", label: "Projects Delivered" },
      { value: "40%", label: "Efficiency Gain" },
      { value: "2", label: "Design Systems" },
    ],
  },
  ar: {
    badge: "وكالة تصميم المنتجات الرقمية",
    titleLine1: "منتجات رقمية،",
    titleLine2: "بتركيز على التجربة",
    description:
      "أكثر من 7 سنوات من الخبرة في تصميم منتجات B2B و B2C المعقدة في مجالات التكنولوجيا المالية و SaaS والخدمات اللوجستية والأسواق.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "شاهد أعمالنا",
    stats: [
      { value: "+7", label: "سنوات خبرة" },
      { value: "+40", label: "مشروع ناجح" },
      { value: "40%", label: "تحسين الكفاءة" },
      { value: "2", label: "نظام تصميم" },
    ],
  },
};

// ---------- Normalize ----------
function normalizeHeroData(
  data: HeroSection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;

  return {
    badge: data.badge || fallback.badge,
    titleLine1: data.title_line_1 || fallback.titleLine1,
    titleLine2: data.title_line_2 || fallback.titleLine2,
    description: data.description || fallback.description,
    ctaPrimary: data.cta_primary_text || fallback.ctaPrimary,
    ctaSecondary: data.cta_secondary_text || fallback.ctaSecondary,
    stats:
      data.stats && data.stats.length > 0
        ? data.stats.map((s) => ({ value: s.value, label: s.label }))
        : fallback.stats,
  };
}

// ---------- Component ----------
interface HeroProps {
  data?: HeroSection;
  locale?: string;
}

export default function Hero({ data, locale: propLocale }: HeroProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  // اگه data بود، از وردپرس. اگه نه، از fallback
  const t = normalizeHeroData(data, locale);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const blob1X = useTransform(mouseXSpring, [-0.5, 0.5], [-40, 40]);
  const blob2X = useTransform(mouseXSpring, [-0.5, 0.5], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

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
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24 pb-16"
    >
      {/* ... (بقیه JSX مثل قبل) */}
      <motion.div
        style={{ y: y1, x: blob1X }}
        className="absolute top-1/4 -right-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-20 blur-[120px] rounded-full pointer-events-none"
      />

      <motion.div
        style={{ y: y2, x: blob2X }}
        className="absolute bottom-0 -left-32 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[var(--color-primary)] opacity-10 blur-[100px] rounded-full pointer-events-none"
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
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs md:text-sm font-medium border border-[var(--color-primary)]/20 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse shrink-0" />
              <ScrambleText text={t.badge} duration={2} delay={0.5} />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-[2rem] leading-[1.2] sm:text-5xl sm:leading-[1.15] md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.05] xl:text-8xl font-black mb-6 md:mb-8 tracking-tight"
          >
            <span className="block">{t.titleLine1}</span>
            <span className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent">
              {t.titleLine2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed md:text-lg lg:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8 md:mb-10 px-2"
          >
            {t.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-wrap gap-3 md:gap-4 justify-center mb-12 md:mb-20"
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
            className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-8 max-w-3xl mx-auto"
          >
            {t.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-1.5 leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-[var(--color-text-muted)] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}