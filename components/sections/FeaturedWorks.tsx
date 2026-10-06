"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const translations = {
  fa: {
    label: "نمونه‌کارها",
    title: "پروژه‌های منتخب",
    subtitle: "نگاهی به بعضی از کارهایی که بهشون افتخار می‌کنیم",
    cta: "مشاهده همه نمونه‌کارها",
    viewCase: "مشاهده",
    projects: [
      {
        title: "Ewano",
        category: "بانکداری دیجیتال",
        description:
          "پلتفرم بانکداری دیجیتال و مالی با تمرکز بر تجربه کاربری روان",
        gradient: "from-orange-400 to-red-500",
        year: "1403",
      },
      {
        title: "Postex",
        category: "لجستیک و ارسال",
        description: "پلتفرم مدیریت ارسال و لجستیک با بهینه‌سازی workflow",
        gradient: "from-blue-500 to-purple-600",
        year: "1403",
      },
      {
        title: "Vardast",
        category: "Marketplace",
        description: "پلتفرم B2B و B2C ساخت‌وساز با تمرکز بر onboarding",
        gradient: "from-green-400 to-teal-600",
        year: "1402",
      },
      {
        title: "Kayak",
        category: "سفر",
        description: "موتور جستجوی سفر با رابط کاربری مدرن و سریع",
        gradient: "from-pink-500 to-rose-500",
        year: "1402",
      },
    ],
  },
  en: {
    label: "Selected work",
    title: "Featured projects",
    subtitle: "A look at some of the work we're proud of",
    cta: "View all work",
    viewCase: "View",
    projects: [
      {
        title: "Ewano",
        category: "Digital Banking",
        description:
          "Digital banking and financial platform focused on smooth UX",
        gradient: "from-orange-400 to-red-500",
        year: "2024",
      },
      {
        title: "Postex",
        category: "Logistics",
        description:
          "Shipment and logistics management platform with workflow optimization",
        gradient: "from-blue-500 to-purple-600",
        year: "2024",
      },
      {
        title: "Vardast",
        category: "Marketplace",
        description: "B2B & B2C construction marketplace with onboarding focus",
        gradient: "from-green-400 to-teal-600",
        year: "2023",
      },
      {
        title: "Kayak",
        category: "Travel",
        description: "Travel metasearch with modern, fast interface",
        gradient: "from-pink-500 to-rose-500",
        year: "2023",
      },
    ],
  },
  ar: {
    label: "أعمال مختارة",
    title: "مشاريع مميزة",
    subtitle: "نظرة على بعض الأعمال التي نفخر بها",
    cta: "عرض جميع الأعمال",
    viewCase: "عرض",
    projects: [
      {
        title: "Ewano",
        category: "الخدمات المصرفية الرقمية",
        description: "منصة مصرفية ومالية رقمية تركز على تجربة سلسة",
        gradient: "from-orange-400 to-red-500",
        year: "2024",
      },
      {
        title: "Postex",
        category: "اللوجستيات",
        description: "منصة إدارة الشحنات واللوجستيات مع تحسين سير العمل",
        gradient: "from-blue-500 to-purple-600",
        year: "2024",
      },
      {
        title: "Vardast",
        category: "السوق",
        description: "سوق بناء B2B و B2C مع التركيز على التسجيل",
        gradient: "from-green-400 to-teal-600",
        year: "2023",
      },
      {
        title: "Kayak",
        category: "السفر",
        description: "محرك بحث سفر بواجهة حديثة وسريعة",
        gradient: "from-pink-500 to-rose-500",
        year: "2023",
      },
    ],
  },
};

export default function FeaturedWorks() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[locale];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg-alt)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider">
              {t.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 leading-tight">
              {t.title}
            </h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              {t.subtitle}
            </p>
          </div>
          <Button variant="outline" href={`/${locale}/works`}>
            {t.cta}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/${locale}/case-studies/${project.title.toLowerCase()}`}
                className="group block"
              >
                <div className="relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--section-card-bg)] border border-[var(--color-border)] transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Placeholder تصویر */}
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/90 font-black text-5xl md:text-6xl tracking-tight">
                        {project.title}
                      </span>
                    </div>
                    {/* بج سال */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/20 backdrop-blur-sm text-white text-xs font-medium">
                      {project.year}
                    </div>
                  </div>

                  {/* اطلاعات */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[var(--color-primary)] font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        {t.viewCase}
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
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}