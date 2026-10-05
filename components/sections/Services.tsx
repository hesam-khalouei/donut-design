"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const translations = {
  fa: {
    label: "خدمات ما",
    title: "چیزی که برات می‌سازیم",
    subtitle:
      "از ایده تا محصول نهایی، با تمرکز بر تجربه کاربری و تصمیم‌های داده‌محور",
    services: [
      {
        title: "طراحی محصول",
        description:
          "از discovery تا high-fidelity، محصولاتی می‌سازیم که کاربر واقعاً دوستشون داره.",
        icon: "palette",
      },
      {
        title: "دیزاین سیستم",
        description:
          "سیستم‌های طراحی مقیاس‌پذیر برای تیم‌هایی که می‌خوان سریع‌تر رشد کنن.",
        icon: "grid",
      },
      {
        title: "پژوهش کاربر",
        description:
          "تحقیقات کاربری عمیق برای تصمیم‌هایی که به داده‌ها وابسته‌ست، نه حدس.",
        icon: "search",
      },
      {
        title: "مشاوره طراحی",
        description:
          "کمک به تیم‌ها برای بهبود فرایند طراحی، استخدام، و ساخت محصول.",
        icon: "sparkles",
      },
    ],
  },
  en: {
    label: "Our services",
    title: "What we build for you",
    subtitle:
      "From idea to final product, focused on UX and data-informed decisions",
    services: [
      {
        title: "Product Design",
        description:
          "From discovery to high-fidelity, we build products users actually love.",
        icon: "palette",
      },
      {
        title: "Design Systems",
        description:
          "Scalable design systems for teams that want to move faster.",
        icon: "grid",
      },
      {
        title: "User Research",
        description:
          "Deep user research for decisions backed by data, not guesses.",
        icon: "search",
      },
      {
        title: "Design Consulting",
        description:
          "Helping teams improve design process, hiring, and product build.",
        icon: "sparkles",
      },
    ],
  },
  ar: {
    label: "خدماتنا",
    title: "ما نبنيه لك",
    subtitle:
      "من الفكرة إلى المنتج النهائي، بتركيز على تجربة المستخدم والقرارات المبنية على البيانات",
    services: [
      {
        title: "تصميم المنتج",
        description:
          "من الاكتشاف إلى الدقة العالية، نبني منتجات يحبها المستخدمون.",
        icon: "palette",
      },
      {
        title: "أنظمة التصميم",
        description: "أنظمة تصميم قابلة للتوسع للفرق التي تريد التحرك أسرع.",
        icon: "grid",
      },
      {
        title: "أبحاث المستخدم",
        description:
          "أبحاث مستخدم عميقة لقرارات مدعومة بالبيانات، لا بالتخمين.",
        icon: "search",
      },
      {
        title: "استشارات التصميم",
        description: "مساعدة الفرق على تحسين عملية التصميم والتوظيف والبناء.",
        icon: "sparkles",
      },
    ],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  palette: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
  grid: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  sparkles: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
};

export default function Services() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[locale];

  return (
    <section className="py-24 md:py-32 bg-[var(--color-bg)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider">
            {t.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full group">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}