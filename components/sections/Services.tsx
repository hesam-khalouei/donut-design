"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import type { ServicesSection } from "@/types/sections";

const translations = {
  fa: {
    label: "خدمات ما",
    title: "چیزی که برات می‌سازیم",
    description:
      "از ایده تا محصول نهایی — با تمرکز بر تجربه کاربری و تصمیم‌های داده‌محور.",
    items: [
      { icon: "🎨", title: "طراحی محصول", description: "از کشف نیاز تا محصول نهایی. طراحی جریان‌های کاربری، وایرفریم، پروتوتایپ و رابط کاربری نهایی." },
      { icon: "🧩", title: "دیزاین سیستم", description: "ساخت و مقیاس‌دهی دیزاین سیستم‌های شرکتی. توکن‌های طراحی، کتابخانه کامپوننت و مستندسازی." },
      { icon: "🔍", title: "پژوهش کاربر", description: "مصاحبه کاربر، تست قابلیت استفاده، و تحلیل داده‌های رفتاری برای تصمیم‌های مطمئن." },
      { icon: "⚡", title: "بهینه‌سازی UX", description: "بازطراحی جریان‌های موجود، کاهش اصطکاک، و افزایش نرخ تکمیل تسک‌ها." },
      { icon: "📊", title: "Process Mining", description: "تحلیل فرایندهای عملیاتی با تکنیک‌های process mining برای بهبود بهره‌وری." },
      { icon: "🚀", title: "استراتژی محصول", description: "تعریف چشم‌انداز، اولویت‌بندی فیچرها، نقشه راه، و مشاوره محصول." },
    ],
  },
  en: {
    label: "Our Services",
    title: "What we build for you",
    description: "From idea to final product — focused on UX and data-informed decisions.",
    items: [
      { icon: "🎨", title: "Product Design", description: "From discovery to final product. User flows, wireframes, prototypes, and final UI." },
      { icon: "🧩", title: "Design Systems", description: "Building and scaling company-wide design systems. Design tokens, component libraries, and documentation." },
      { icon: "🔍", title: "User Research", description: "User interviews, usability testing, and behavioral data analysis for confident decisions." },
      { icon: "⚡", title: "UX Optimization", description: "Redesigning existing flows, reducing friction, and increasing task completion rates." },
      { icon: "📊", title: "Process Mining", description: "Analyzing operational workflows with process mining techniques to improve efficiency." },
      { icon: "🚀", title: "Product Strategy", description: "Defining vision, prioritizing features, roadmap, and product advisory." },
    ],
  },
  ar: {
    label: "خدماتنا",
    title: "ما نبنيه لك",
    description: "من الفكرة إلى المنتج النهائي — بتركيز على تجربة المستخدم.",
    items: [
      { icon: "🎨", title: "تصميم المنتج", description: "من الاكتشاف إلى المنتج النهائي. تدفقات المستخدم والإطارات والنماذج والواجهة النهائية." },
      { icon: "🧩", title: "أنظمة التصميم", description: "بناء وتوسيع أنظمة التصميم على مستوى الشركة." },
      { icon: "🔍", title: "أبحاث المستخدم", description: "مقابلات المستخدم واختبار قابلية الاستخدام وتحليل البيانات السلوكية." },
      { icon: "⚡", title: "تحسين تجربة المستخدم", description: "إعادة تصميم التدفقات الحالية وتقليل الاحتكاك." },
      { icon: "📊", title: "تحليل العمليات", description: "تحليل سير العمل التشغيلي بتقنيات process mining لتحسين الكفاءة." },
      { icon: "🚀", title: "استراتيجية المنتج", description: "تحديد الرؤية وترتيب الميزات وخارطة الطريق." },
    ],
  },
};

function normalizeServicesData(
  data: ServicesSection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;
  return {
    label: data.label || fallback.label,
    title: data.title || fallback.title,
    description: data.description || fallback.description,
    items:
      data.items && data.items.length > 0
        ? data.items.map((i) => ({
            icon: i.icon,
            title: i.title,
            description: i.description,
          }))
        : fallback.items,
  };
}

interface ServicesProps {
  data?: ServicesSection;
  locale?: string;
}

export default function Services({ data, locale: propLocale }: ServicesProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  const t = normalizeServicesData(data, locale);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-10 md:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-4 md:mb-5">
            {t.label}
          </span>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-6xl font-black mb-4 md:mb-6">
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {t.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Card className="h-full group">
                <div className="text-5xl md:text-6xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block leading-none">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}