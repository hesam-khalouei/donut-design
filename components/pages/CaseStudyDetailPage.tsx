"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    back: "بازگشت به نمونه‌کارها",
    challenge: "چالش",
    solution: "راه‌حل",
    result: "نتیجه",
    client: "مشتری",
    year: "سال",
    role: "نقش ما",
    duration: "مدت پروژه",
    services: "خدمات ارائه‌شده",
    testimonial: "نظر مشتری",
    nextCase: "مطالعه موردی بعدی",
  },
  en: {
    back: "Back to work",
    challenge: "The Challenge",
    solution: "The Solution",
    result: "The Result",
    client: "Client",
    year: "Year",
    role: "Our Role",
    duration: "Duration",
    services: "Services",
    testimonial: "Testimonial",
    nextCase: "Next case study",
  },
  ar: {
    back: "العودة إلى الأعمال",
    challenge: "التحدي",
    solution: "الحل",
    result: "النتيجة",
    client: "العميل",
    year: "السنة",
    role: "دورنا",
    duration: "المدة",
    services: "الخدمات",
    testimonial: "شهادة",
    nextCase: "دراسة الحالة التالية",
  },
};

interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  services: string[];
  challenge: string;
  solution: string;
  result: string;
  results: { value: string; label: string }[];
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
  color: string;
  accent: string;
}

const caseData: Record<string, CaseStudyData> = {
  ewano: {
    slug: "ewano",
    title: "Ewano",
    subtitle: "بازطراحی پلتفرم بانکداری دیجیتال",
    category: "FinTech",
    year: "1403",
    client: "Ewano Financial",
    role: "طراحی محصول، دیزاین سیستم",
    duration: "۶ ماه",
    services: ["Product Design", "Design System", "User Research"],
    challenge:
      "پلتفرم بانکداری Ewano با چالش‌های متعددی روبرو بود: نرخ بالای ریزش کاربر در فرآیند ثبت‌نام، پیچیدگی جریان‌های انتقال وجه، و عدم یکپارچگی در تجربه بین وب و موبایل. کاربران از پیچیدگی بیش از حد و نبود راهنمایی مناسب شکایت داشتند.",
    solution:
      "با انجام پژوهش کاربری عمیق و تحلیل داده‌های رفتاری، جریان‌های کلیدی رو بازطراحی کردیم. یه دیزاین سیستم جامع ساختیم که تجربه یکپارچه‌ای بین پلتفرم‌های مختلف فراهم می‌کرد. فرآیند ثبت‌نام رو ساده‌تر کردیم و راهنمایی‌های گام‌به‌گام اضافه کردیم.",
    result:
      "بعد از ۶ ماه، نرخ تبدیل پلتفرم ۲۵٪ افزایش پیدا کرد و رضایت کاربران به طور قابل توجهی بهبود یافت. دیزاین سیستم جدید، سرعت توسعه تیم رو دو برابر کرد.",
    results: [
      { value: "+۲۵٪", label: "نرخ تبدیل" },
      { value: "-۳۰٪", label: "زمان handoff" },
      { value: "+۴۰٪", label: "رضایت کاربر" },
      { value: "۲x", label: "سرعت توسعه" },
    ],
    testimonial: {
      quote:
        "همکاری با دونات دیزاین فراتر از انتظارات ما بود. نتایج قابل اندازه‌گیری و تیم فوق‌العاده حرفه‌ای.",
      name: "سارا محمدی",
      role: "مدیر محصول، Ewano",
    },
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
  },
  postex: {
    slug: "postex",
    title: "Postex",
    subtitle: "بازطراحی dashboard عملیات لجستیک",
    category: "Logistics",
    year: "1403",
    client: "Postex Logistics",
    role: "طراحی محصول، بهینه‌سازی UX",
    duration: "۴ ماه",
    services: ["Product Design", "UX Optimization", "Process Mining"],
    challenge:
      "dashboard عملیات Postex با حجم بالای داده و پیچیدگی زیاد، کارایی اپراتورها رو کاهش می‌داد. زمان انجام تسک‌های روزانه بالا بود و خطاهای انسانی زیاد اتفاق می‌افتاد.",
    solution:
      "با استفاده از تکنیک‌های process mining، جریان‌های کاری اپراتورها رو تحلیل کردیم. dashboard رو با اولویت‌بندی اطلاعات و ساده‌سازی جریان‌ها بازطراحی کردیم. قابلیت‌های batch operation و keyboard shortcut اضافه کردیم.",
    result:
      "زمان انجام تسک‌های روزانه ۲۰٪ کاهش پیدا کرد و خطاهای انسانی به طور قابل توجهی کم شد. رضایت اپراتورها از سیستم جدید بالا بود.",
    results: [
      { value: "-۲۰٪", label: "زمان تسک" },
      { value: "-۵۰٪", label: "خطای انسانی" },
      { value: "+۳۵٪", label: "بهره‌وری" },
      { value: "+۲۵٪", label: "رضایت اپراتور" },
    ],
    testimonial: {
      quote:
        "درک عمیق تیم از فرآیندهای لجستیکی و توانایی تبدیلشون به راه‌حل‌های ساده، فوق‌العاده بود.",
      name: "علی رضایی",
      role: "مدیر عملیات، Postex",
    },
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF6B35",
  },
  vardast: {
    slug: "vardast",
    title: "Vardast",
    subtitle: "بازطراحی onboarding فروشندگان",
    category: "Marketplace",
    year: "1402",
    client: "Vardast Marketplace",
    role: "طراحی محصول، پژوهش کاربر",
    duration: "۵ ماه",
    services: ["Product Design", "User Research", "Onboarding Design"],
    challenge:
      "فرآیند ثبت‌نام فروشندگان در Vardast بسیار پیچیده بود و نرخ ریزش بالایی داشت. فروشندگان جدید در مراحل میانی رها می‌کردن و نیاز به پشتیبانی انسانی زیادی داشتند.",
    solution:
      "با مصاحبه با فروشندگان فعلی و جدید، نقاط اصطکاک رو شناسایی کردیم. فرآیند رو به مراحل کوچک‌تر شکستیم و پیشرفت رو قابل مشاهده کردیم. راهنمایی‌های تصویری و چک‌لیست اضافه کردیم.",
    result:
      "نرخ ریزش در onboarding حدود ۱۵٪ کاهش پیدا کرد و زمان تکمیل ثبت‌نام به نصف رسید. نیاز به پشتیبانی انسانی نیز کم شد.",
    results: [
      { value: "-۱۵٪", label: "نرخ ریزش" },
      { value: "-۵۰٪", label: "زمان ثبت‌نام" },
      { value: "+۳۰٪", label: "تکمیل پروفایل" },
      { value: "-۴۰٪", label: "نیاز به پشتیبانی" },
    ],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
  },
  kayak: {
    slug: "kayak",
    title: "Kayak",
    subtitle: "بهبود تجربه جستجوی سفر",
    category: "Travel",
    year: "1402",
    client: "Kayak Travel",
    role: "طراحی UI/UX",
    duration: "۳ ماه",
    services: ["UI Design", "UX Optimization"],
    challenge:
      "رابط کاربری قدیمی Kayak با تراکم اطلاعاتی بالا، کاربران رو سردرگم می‌کرد. فرآیند جستجو و مقایسه بلیط‌ها طولانی و پیچیده بود.",
    solution:
      "رابط کاربری رو کاملاً بازطراحی کردیم با تمرکز بر سادگی و سرعت. فیلترها رو هوشمندتر کردیم و نتایج رو با visual hierarchy بهتر نمایش دادیم.",
    result:
      "تجربه کاربری به طور قابل توجهی بهبود یافت و زمان یافتن بلیط مناسب کاهش پیدا کرد.",
    results: [
      { value: "-۲۵٪", label: "زمان جستجو" },
      { value: "+۲۰٪", label: "نرخ تبدیل" },
      { value: "+۳۵٪", label: "رضایت کاربر" },
      { value: "-۳۰٪", label: "پشتیبانی" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
  },
};

export default function CaseStudyDetailPage({
  locale,
  slug,
}: {
  locale: string;
  slug: string;
}) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];
  const cs = caseData[slug] || caseData["ewano"];

  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href={`/${validLocale}/case-studies`}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
            >
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              {t.back}
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-5">
              {cs.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              {cs.title}
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl">
              {cs.subtitle}
            </p>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[var(--color-border)]"
          >
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                {t.client}
              </div>
              <div className="font-bold">{cs.client}</div>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                {t.year}
              </div>
              <div className="font-bold">{cs.year}</div>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                {t.role}
              </div>
              <div className="font-bold">{cs.role}</div>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                {t.duration}
              </div>
              <div className="font-bold">{cs.duration}</div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Cover Image */}
      <section className="pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`aspect-[16/9] rounded-[var(--radius-xl)] bg-gradient-to-br ${cs.color} relative overflow-hidden`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-7xl md:text-9xl font-black opacity-30"
                style={{ color: cs.accent }}
              >
                {cs.title}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center text-sm font-bold">
                  ۰۱
                </span>
                <h2 className="text-3xl md:text-4xl font-black">
                  {t.challenge}
                </h2>
              </div>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {cs.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center text-sm font-bold">
                  ۰۲
                </span>
                <h2 className="text-3xl md:text-4xl font-black">
                  {t.solution}
                </h2>
              </div>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {cs.solution}
              </p>
            </motion.div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center text-sm font-bold">
                  ۰۳
                </span>
                <h2 className="text-3xl md:text-4xl font-black">{t.result}</h2>
              </div>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
                {cs.result}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Results Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.results.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)]"
              >
                <div className="text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-2">
                  {r.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {r.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      {cs.testimonial && (
        <section className="py-20 bg-[var(--color-bg-dark)] text-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <svg
                className="w-12 h-12 text-[var(--color-primary)] mx-auto mb-8 opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "{cs.testimonial.quote}"
              </p>
              <div>
                <div className="font-bold">{cs.testimonial.name}</div>
                <div className="text-sm text-white/50">
                  {cs.testimonial.role}
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}