"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import type { TestimonialsSection } from "@/types/sections";

const translations = {
  fa: {
    label: "نظر مشتری‌ها",
    title: "چی می‌گن",
    items: [
      { quote: "همکاری با دونات دیزاین تجربه ما رو متحول کرد.", name: "علی رضایی", role: "مدیر محصول، فین‌تک", initial: "ع" },
      { quote: "دقت، تعهد و خلاقیتی که توی این تیم دیدم، کم‌نظیر بود.", name: "سارا محمدی", role: "بنیان‌گذار، استارتاپ", initial: "س" },
      { quote: "درک عمیقشون از UX فوق‌العاده بود.", name: "محمد کریمی", role: "CTO، لجستیک", initial: "م" },
    ],
  },
  en: {
    label: "Testimonials",
    title: "What they say",
    items: [
      { quote: "Working with Donut Design transformed our experience.", name: "Ali Rezaei", role: "Product Manager, FinTech", initial: "A" },
      { quote: "The precision and creativity I saw was unmatched.", name: "Sara Mohammadi", role: "Founder, Startup", initial: "S" },
      { quote: "Their deep understanding of UX was remarkable.", name: "Mohammad Karimi", role: "CTO, Logistics", initial: "M" },
    ],
  },
  ar: {
    label: "شهادات",
    title: "ماذا يقولون",
    items: [
      { quote: "العمل مع دونات ديزاين غيّر تجربتنا.", name: "علي رضائي", role: "مدير المنتج", initial: "ع" },
      { quote: "الدقة والإبداع كان لا مثيل له.", name: "سارة محمدي", role: "مؤسسة", initial: "س" },
      { quote: "فهمهم العميق لتجربة المستخدم كان رائعًا.", name: "محمد كريمي", role: "المدير التقني", initial: "م" },
    ],
  },
};

function normalizeTestimonialsData(
  data: TestimonialsSection | undefined,
  locale: "fa" | "en" | "ar"
) {
  const fallback = translations[locale];
  if (!data) return fallback;
  return {
    label: data.label || fallback.label,
    title: data.title || fallback.title,
    items:
      data.items && data.items.length > 0
        ? data.items.map((i) => ({
            quote: i.quote,
            name: i.name,
            role: i.role,
            initial: i.initial,
          }))
        : fallback.items,
  };
}

interface TestimonialsProps {
  data?: TestimonialsSection;
  locale?: string;
}

export default function Testimonials({
  data,
  locale: propLocale,
}: TestimonialsProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = (propLocale ||
    (["fa", "en", "ar"].includes(currentLocale) ? currentLocale : "fa")) as
    | "fa"
    | "en"
    | "ar";

  const t = normalizeTestimonialsData(data, locale);

  return (
    <section className="py-16 md:py-32 bg-[var(--color-bg-dark)] text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-10 md:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-4 md:mb-5">
            {t.label}
          </span>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-6xl font-black">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {t.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-6 md:p-8 rounded-[var(--radius-lg)] bg-white/[0.03] border border-white/10 hover:border-[var(--color-primary)]/50 transition-colors duration-500"
            >
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-[var(--color-primary)] mb-4 md:mb-5 opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>

              <p className="text-white/80 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-sm font-bold shrink-0">
                  {item.initial}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm truncate">{item.name}</div>
                  <div className="text-xs text-white/50 truncate">
                    {item.role}
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