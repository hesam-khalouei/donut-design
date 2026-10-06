"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "خدمات ما",
    title: "چیزی که برات می‌سازیم",
    description:
      "از ایده تا محصول نهایی — با تمرکز بر تجربه کاربری و تصمیم‌های داده‌محور.",
    startProject: "شروع پروژه",
    services: [
      {
        icon: "🎨",
        title: "طراحی محصول",
        description:
          "از کشف نیاز تا محصول نهایی. طراحی رابط‌های کاربری که کار می‌کنن.",
        features: [
          "کشف نیاز و مصاحبه کاربر",
          "طراحی جریان کاربری",
          "وایرفریم و پروتوتایپ",
          "طراحی رابط کاربری نهایی",
        ],
      },
      {
        icon: "🧩",
        title: "دیزاین سیستم",
        description:
          "ساخت سیستم‌های طراحی مقیاس‌پذیر که تیم رو سریع‌تر و یکپارچه‌تر می‌کنه.",
        features: [
          "ساخت کتابخانه کامپوننت",
          "توکن‌های طراحی",
          "مستندسازی",
          "آموزش تیم",
        ],
      },
      {
        icon: "🔍",
        title: "پژوهش کاربر",
        description:
          "تحقیقات کاربری، مصاحبه، تست قابلیت استفاده — برای تصمیم‌های مطمئن.",
        features: [
          "مصاحبه کاربر",
          "تست قابلیت استفاده",
          "تحلیل داده‌های رفتاری",
          "گزارش و ارائه یافته‌ها",
        ],
      },
      {
        icon: "⚡",
        title: "بهینه‌سازی تجربه",
        description:
          "بازطراحی جریان‌های موجود، کاهش اصطکاک، افزایش نرخ تبدیل.",
        features: [
          "تحلیل قیف تبدیل",
          "شناسایی نقاط اصطکاک",
          "طراحی راه‌حل‌های جدید",
          "تست A/B",
        ],
      },
      {
        icon: "📊",
        title: "استراتژی محصول",
        description:
          "کمک به تعریف مسیر محصول، اولویت‌بندی فیچرها و نقشه راه.",
        features: [
          "تعریف چشم‌انداز محصول",
          "اولویت‌بندی فیچر",
          "نقشه راه",
          "مشاوره محصول",
        ],
      },
      {
        icon: "🚀",
        title: "مشاوره طراحی",
        description:
          "همراهی تیم شما برای ارتقای سطح طراحی و فرآیندهای کاری.",
        features: [
          "ارزیابی فرآیند طراحی",
          "آموزش تیم",
          "منتورینگ طراحان",
          "بهبود workflow",
        ],
      },
    ],
  },
  en: {
    label: "Our Services",
    title: "What we build for you",
    description:
      "From idea to final product — focused on UX and data-informed decisions.",
    startProject: "Start a project",
    services: [
      {
        icon: "🎨",
        title: "Product Design",
        description:
          "From discovery to final product. Designing interfaces that work.",
        features: [
          "Discovery & user interviews",
          "User flow design",
          "Wireframes & prototypes",
          "High-fidelity UI design",
        ],
      },
      {
        icon: "🧩",
        title: "Design Systems",
        description:
          "Building scalable design systems that make teams faster and more consistent.",
        features: [
          "Component library",
          "Design tokens",
          "Documentation",
          "Team training",
        ],
      },
      {
        icon: "🔍",
        title: "User Research",
        description:
          "User research, interviews, usability testing — for confident decisions.",
        features: [
          "User interviews",
          "Usability testing",
          "Behavioral data analysis",
          "Reports & insights",
        ],
      },
      {
        icon: "⚡",
        title: "UX Optimization",
        description:
          "Redesigning existing flows, reducing friction, increasing conversion.",
        features: [
          "Conversion funnel analysis",
          "Friction point identification",
          "New solution design",
          "A/B testing",
        ],
      },
      {
        icon: "📊",
        title: "Product Strategy",
        description:
          "Helping define product direction, prioritize features and roadmap.",
        features: [
          "Product vision",
          "Feature prioritization",
          "Roadmap",
          "Product advisory",
        ],
      },
      {
        icon: "🚀",
        title: "Design Consulting",
        description:
          "Partnering with your team to elevate design and workflows.",
        features: [
          "Design process audit",
          "Team training",
          "Designer mentoring",
          "Workflow improvement",
        ],
      },
    ],
  },
  ar: {
    label: "خدماتنا",
    title: "ما نبنيه لك",
    description:
      "من الفكرة إلى المنتج النهائي — بتركيز على تجربة المستخدم والقرارات المبنية على البيانات.",
    startProject: "ابدأ مشروعك",
    services: [
      {
        icon: "🎨",
        title: "تصميم المنتج",
        description: "من الاكتشاف إلى المنتج النهائي. تصميم واجهات تعمل.",
        features: [
          "الاكتشاف ومقابلات المستخدم",
          "تصميم تدفق المستخدم",
          "الإطارات السلكية والنماذج",
          "تصميم واجهة عالية الدقة",
        ],
      },
      {
        icon: "🧩",
        title: "أنظمة التصميم",
        description:
          "بناء أنظمة تصميم قابلة للتوسع تجعل الفرق أسرع وأكثر اتساقًا.",
        features: [
          "مكتبة المكونات",
          "رموز التصميم",
          "التوثيق",
          "تدريب الفريق",
        ],
      },
      {
        icon: "🔍",
        title: "أبحاث المستخدم",
        description: "أبحاث المستخدم والمقابلات واختبار قابلية الاستخدام.",
        features: [
          "مقابلات المستخدم",
          "اختبار قابلية الاستخدام",
          "تحليل البيانات السلوكية",
          "التقارير والرؤى",
        ],
      },
      {
        icon: "⚡",
        title: "تحسين تجربة المستخدم",
        description:
          "إعادة تصميم التدفقات الحالية، تقليل الاحتكاك، زيادة التحويل.",
        features: [
          "تحليل قمع التحويل",
          "تحديد نقاط الاحتكاك",
          "تصميم حلول جديدة",
          "اختبار A/B",
        ],
      },
      {
        icon: "📊",
        title: "استراتيجية المنتج",
        description:
          "المساعدة في تحديد اتجاه المنتج وترتيب الميزات وخارطة الطريق.",
        features: [
          "رؤية المنتج",
          "ترتيب الميزات",
          "خارطة الطريق",
          "استشارات المنتج",
        ],
      },
      {
        icon: "🚀",
        title: "استشارات التصميم",
        description: "الشراكة مع فريقك للارتقاء بالتصميم وسير العمل.",
        features: [
          "تدقيق عملية التصميم",
          "تدريب الفريق",
          "إرشاد المصممين",
          "تحسين سير العمل",
        ],
      },
    ],
  },
};

export default function ServicesPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  return (
    <main>
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-10 md:mb-20"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-4 md:mb-5">
              {t.label}
            </span>
            <h1 className="text-3xl leading-tight sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6">
              {t.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[var(--color-text-muted)] leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {t.services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="h-full group">
                  <div className="text-5xl md:text-6xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300 inline-block leading-none">
                    {service.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm mb-5 md:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 pt-5 border-t border-[var(--color-border)]">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                      >
                        <svg
                          className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button size="lg" href={`/${validLocale}/contact`}>
              {t.startProject}
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}