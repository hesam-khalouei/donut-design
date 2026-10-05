"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

const translations = {
  fa: {
    title: "مورد اعتماد برندهای پیشرو",
  },
  en: {
    title: "Trusted by leading brands",
  },
  ar: {
    title: "موثوق به من قبل العلامات التجارية الرائدة",
  },
};

// ⚠️ اینا placeholder هستن — بعداً با لوگوهای واقعی عوض می‌شن
const clients = [
  { name: "EBCOM", logo: "EBCOM" },
  { name: "Postex", logo: "Postex" },
  { name: "Vardast", logo: "Vardast" },
  { name: "PDN", logo: "PDN" },
  { name: "ITSaaz", logo: "ITSaaz" },
  { name: "Standard", logo: "Standard" },
  { name: "Ewano", logo: "Ewano" },
  { name: "Kayak", logo: "Kayak" },
];

export default function Clients() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[locale];

  // تکرار لوگوها برای انیمیشن بی‌نهایت
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 md:py-20 border-y border-[var(--color-border)] bg-[var(--color-bg-alt)] overflow-hidden">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-10"
        >
          {t.title}
        </motion.p>
      </Container>

      {/* Marquee */}
      <div className="relative">
        {/* گرادینت محو کناره‌ها */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-alt)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-alt)] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 w-max"
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[140px] h-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-2xl font-black text-[var(--color-text)] tracking-tight">
                {client.logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}