"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

const translations = {
  fa: {
    label: "نظر مشتری‌ها",
    title: "چی می‌گن درباره ما",
    testimonials: [
      {
        quote:
          "تیم دونات دیزاین فراتر از انتظار ما عمل کرد. طراحی محصول ما رو از یه ابزار ساده به یه تجربه لذت‌بخش تبدیل کرد.",
        name: "سارا محمدی",
        role: "مدیر محصول، فین‌تک",
        initials: "س‌م",
      },
      {
        quote:
          "دیزاین سیستمی که ساختن، کل فرایند توسعه ما رو متحول کرد. زمان handoff حداقل ۳۰٪ کاهش پیدا کرد.",
        name: "علی رضایی",
        role: "مدیر فنی، SaaS",
        initials: "ع‌ر",
      },
      {
        quote:
          "دقت و تعهدشون به نتیجه، فوق‌العاده بود. محصول ما بعد از redesign، ۲۵٪ بهبود در task completion داشت.",
        name: "مریم کریمی",
        role: "بنیان‌گذار، مارکت‌پلیس",
        initials: "م‌ک",
      },
    ],
  },
  en: {
    label: "Testimonials",
    title: "What clients say",
    testimonials: [
      {
        quote:
          "Donut Design team exceeded our expectations. They transformed our product from a simple tool to a delightful experience.",
        name: "Sara Mohammadi",
        role: "Product Manager, FinTech",
        initials: "SM",
      },
      {
        quote:
          "The design system they built transformed our entire development process. Handoff time dropped by at least 30%.",
        name: "Ali Rezaei",
        role: "Engineering Manager, SaaS",
        initials: "AR",
      },
      {
        quote:
          "Their precision and commitment to results was remarkable. Our product saw 25% improvement in task completion after the redesign.",
        name: "Maryam Karimi",
        role: "Founder, Marketplace",
        initials: "MK",
      },
    ],
  },
  ar: {
    label: "آراء العملاء",
    title: "ماذا يقول العملاء",
    testimonials: [
      {
        quote:
          "تجاوز فريق دونات ديزاين توقعاتنا. حولوا منتجنا من أداة بسيطة إلى تجربة ممتعة.",
        name: "سارة محمدي",
        role: "مديرة المنتج، التكنولوجيا المالية",
        initials: "س‌م",
      },
      {
        quote:
          "نظام التصميم الذي بنوه غير عملية التطوير بأكملها. انخفض وقت التسليم بنسبة 30٪ على الأقل.",
        name: "علي رضائي",
        role: "مدير الهندسة، SaaS",
        initials: "ع‌ر",
      },
      {
        quote:
          "دقتهم والتزامهم بالنتائج كانا رائعين. شهد منتجنا تحسنًا بنسبة 25٪ بعد إعادة التصميم.",
        name: "مريم كريمي",
        role: "مؤسسة، السوق",
        initials: "م‌ك",
      },
    ],
  },
};

export default function Testimonials() {
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
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-wider">
            {t.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--color-bg)] rounded-[var(--radius-lg)] p-8 border border-[var(--color-border)] flex flex-col"
            >
              {/* Quote mark */}
              <svg
                className="w-10 h-10 text-[var(--color-primary)] mb-4 opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-[var(--color-text)] leading-relaxed mb-6 flex-1">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}