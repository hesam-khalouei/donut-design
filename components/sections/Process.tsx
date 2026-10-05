"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

const translations = {
  fa: {
    label: "فرایند کار",
    title: "چطور کار می‌کنیم",
    subtitle: "یه فرایند شفاف و قابل پیش‌بینی که به نتیجه می‌رسه",
    steps: [
      {
        number: "۰۱",
        title: "کشف",
        description:
          "با تحقیق و مصاحبه، نیازهای واقعی کاربر و اهداف کسب‌وکار رو می‌شناسیم.",
      },
      {
        number: "۰۲",
        title: "تعریف",
        description:
          "مسئله رو دقیق تعریف می‌کنیم، فرضیه می‌سازیم و راه‌حل‌ها رو اولویت‌بندی می‌کنیم.",
      },
      {
        number: "۰۳",
        title: "طراحی",
        description:
          "از wireframe تا high-fidelity، با تست‌های مکرر کاربر و iterate کردن.",
      },
      {
        number: "۰۴",
        title: "تحویل",
        description:
          "با تیم مهندسی همکاری می‌کنیم تا طراحی با کیفیت بالا پیاده‌سازی بشه.",
      },
    ],
  },
  en: {
    label: "Our process",
    title: "How we work",
    subtitle: "A transparent and predictable process that delivers results",
    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "Through research and interviews, we identify real user needs and business goals.",
      },
      {
        number: "02",
        title: "Define",
        description:
          "We define the problem precisely, build hypotheses, and prioritize solutions.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "From wireframe to high-fidelity, with frequent user testing and iteration.",
      },
      {
        number: "04",
        title: "Deliver",
        description:
          "We collaborate with engineering to implement the design at high quality.",
      },
    ],
  },
  ar: {
    label: "عمليتنا",
    title: "كيف نعمل",
    subtitle: "عملية شفافة وقابلة للتنبؤ تحقق النتائج",
    steps: [
      {
        number: "01",
        title: "الاكتشاف",
        description:
          "من خلال البحث والمقابلات، نحدد احتياجات المستخدم الحقيقية وأهداف العمل.",
      },
      {
        number: "02",
        title: "التعريف",
        description:
          "نحدد المشكلة بدقة، نبني الفرضيات، ونرتب الحلول حسب الأولوية.",
      },
      {
        number: "03",
        title: "التصميم",
        description:
          "من الإطار السلكي إلى الدقة العالية، مع اختبار المستخدم المتكرر.",
      },
      {
        number: "04",
        title: "التسليم",
        description: "نتعاون مع الهندسة لتنفيذ التصميم بجودة عالية.",
      },
    ],
  },
};

export default function Process() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* خط اتصال */}
              {idx < t.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-[var(--color-border)]" />
              )}

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-center justify-center mb-5 relative z-10">
                  <span className="text-lg font-black text-[var(--color-primary)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}