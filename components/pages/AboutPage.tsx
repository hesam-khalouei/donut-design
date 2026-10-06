"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Timeline from "@/components/ui/Timeline";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "درباره ما",
    title: "دونات دیزاین",
    description:
      "آژانس طراحی محصولات دیجیتال با تمرکز بر تجربه کاربری و دیزاین سیستم — ساخته‌شده توسط امیر حسام خالویی.",
    storyTitle: "داستان ما",
    story:
      "دونات دیزاین از یه ایده ساده شروع شد: طراحی محصول باید ساده، کاربردی و قابل اندازه‌گیری باشه. بعد از بیش از ۷ سال کار در حوزه‌های فین‌تک، SaaS، لجستیک و مارکت‌پلیس — از شرکت‌هایی مثل EBCOM، Postex، Vardast و PDN — تصمیم گرفتیم این تجربه رو در قالب یه آژانس مستقل ارائه بدیم. امروز با افتخار با تیم‌های مختلف همکاری می‌کنیم و محصولاتی می‌سازیم که میلیون‌ها کاربر ازشون استفاده می‌کنن.",
    statsTitle: "در یک نگاه",
    stats: [
      { value: "+۷", label: "سال تجربه" },
      { value: "+۴۰", label: "پروژه موفق" },
      { value: "۲", label: "دیزاین سیستم" },
      { value: "۶", label: "حوزه تخصصی" },
    ],
    valuesTitle: "ارزش‌های ما",
    values: [
      {
        icon: "🎯",
        title: "تمرکز بر نتیجه",
        description:
          "طراحی زیبا کافی نیست. ما به نتایج قابل اندازه‌گیری متعهدیم — مثل ۴۰٪ بهبود بهره‌وری یا ۳۰٪ کاهش زمان handoff.",
      },
      {
        icon: "🔬",
        title: "داده‌محور",
        description:
          "تصمیم‌های طراحی ما بر پایه پژوهش کاربر، تست قابلیت استفاده و تحلیل داده‌های رفتاری هستن — نه حدس.",
      },
      {
        icon: "🤝",
        title: "شفافیت",
        description:
          "ارتباط صادقانه، بازخورد مستقیم، و همکاری نزدیک با تیم‌های محصول، مهندسی و عملیات.",
      },
      {
        icon: "⚡",
        title: "سرعت و کیفیت",
        description:
          "سریع حرکت می‌کنیم ولی هیچ‌وقت کیفیت رو فدا نمی‌کنیم. دیزاین سیستم‌ها به ما اجازه می‌دن هر دو رو داشته باشیم.",
      },
    ],
    timelineTitle: "مسیر حرفه‌ای",
    timelineSubtitle:
      "بیش از ۷ سال تجربه در طراحی محصولات دیجیتال، از استارتاپ تا سازمان‌های بزرگ.",
    teamTitle: "تیم ما",
    team: [
      {
        name: "امیر حسام خالویی",
        role: "بنیان‌گذار و مدیر طراحی",
        bio: "بیش از ۷ سال تجربه در طراحی محصولات دیجیتال در حوزه‌های فین‌تک، SaaS، لجستیک و مارکت‌پلیس. متخصص در دیزاین سیستم و ساده‌سازی فرایندهای پیچیده.",
        initial: "ا",
        linkedin: "https://linkedin.com/in/hesam_khalouei",
        dribbble: "https://dribbble.com/hesam_khalouei",
      },
    ],
    awardsTitle: "افتخارات و مدارک",
    awards: [
      { title: "Google UI/UX Design Certification", year: "2020" },
      { title: "User Research Course — Coursera", year: "2020" },
      { title: "UI/UX Design Specialist — 7Learn", year: "2017-2018" },
      { title: "Product Manager Course — دانشگاه شریف", year: "2022-2023" },
    ],
    domainsTitle: "حوزه‌های تخصصی",
    domains: [
      { name: "FinTech", name_fa: "فین‌تک", color: "#3B82F6" },
      { name: "SaaS", name_fa: "ساس", color: "#8B5CF6" },
      { name: "Logistics", name_fa: "لجستیک", color: "#FF6B35" },
      { name: "Marketplace", name_fa: "مارکت‌پلیس", color: "#10B981" },
      { name: "Travel", name_fa: "سفر", color: "#F59E0B" },
      { name: "Government", name_fa: "دولتی", color: "#64748B" },
    ],
  },
  en: {
    label: "About Us",
    title: "Donut Design",
    description:
      "Digital product design agency focused on UX and design systems — founded by Amir Hesam Khalouei.",
    storyTitle: "Our story",
    story:
      "Donut Design started with a simple idea: product design should be simple, functional, and measurable. After 7+ years working in FinTech, SaaS, Logistics, and Marketplace — at companies like EBCOM, Postex, Vardast, and PDN — we decided to bring this experience into an independent agency. Today, we proudly work with various teams and build products used by millions.",
    statsTitle: "At a glance",
    stats: [
      { value: "7+", label: "Years Experience" },
      { value: "40+", label: "Projects Delivered" },
      { value: "2", label: "Design Systems" },
      { value: "6", label: "Expertise Areas" },
    ],
    valuesTitle: "Our values",
    values: [
      {
        icon: "🎯",
        title: "Results-focused",
        description:
          "Beautiful design isn't enough. We're committed to measurable results — like 40% efficiency gain or 30% handoff time reduction.",
      },
      {
        icon: "🔬",
        title: "Data-informed",
        description:
          "Our design decisions are based on user research, usability testing, and behavioral data — not guesses.",
      },
      {
        icon: "🤝",
        title: "Transparency",
        description:
          "Honest communication, direct feedback, and close collaboration with product, engineering, and operations teams.",
      },
      {
        icon: "⚡",
        title: "Speed & Quality",
        description:
          "We move fast but never compromise on quality. Design systems let us have both.",
      },
    ],
    timelineTitle: "Career Path",
    timelineSubtitle:
      "7+ years of experience designing digital products, from startups to large organizations.",
    teamTitle: "Our team",
    team: [
      {
        name: "Amir Hesam Khalouei",
        role: "Founder & Design Director",
        bio: "7+ years of experience in digital product design across FinTech, SaaS, Logistics, and Marketplace. Specialized in design systems and simplifying complex workflows.",
        initial: "A",
        linkedin: "https://linkedin.com/in/hesam_khalouei",
        dribbble: "https://dribbble.com/hesam_khalouei",
      },
    ],
    awardsTitle: "Recognition & Certifications",
    awards: [
      { title: "Google UI/UX Design Certification", year: "2020" },
      { title: "User Research Course — Coursera", year: "2020" },
      { title: "UI/UX Design Specialist — 7Learn", year: "2017-2018" },
      { title: "Product Manager Course — Sharif University", year: "2022-2023" },
    ],
    domainsTitle: "Expertise areas",
    domains: [
      { name: "FinTech", name_fa: "FinTech", color: "#3B82F6" },
      { name: "SaaS", name_fa: "SaaS", color: "#8B5CF6" },
      { name: "Logistics", name_fa: "Logistics", color: "#FF6B35" },
      { name: "Marketplace", name_fa: "Marketplace", color: "#10B981" },
      { name: "Travel", name_fa: "Travel", color: "#F59E0B" },
      { name: "Government", name_fa: "Government", color: "#64748B" },
    ],
  },
  ar: {
    label: "من نحن",
    title: "دونات ديزاين",
    description:
      "وكالة تصميم منتجات رقمية تركز على تجربة المستخدم وأنظمة التصميم — أسسها أمير حسام خالوي.",
    storyTitle: "قصتنا",
    story:
      "بدأت دونات ديزاين بفكرة بسيطة: يجب أن يكون تصميم المنتج بسيطًا وعمليًا وقابلًا للقياس. بعد أكثر من 7 سنوات من العمل في التكنولوجيا المالية و SaaS والخدمات اللوجستية والأسواق — في شركات مثل EBCOM و Postex و Vardast و PDN — قررنا تقديم هذه الخبرة في وكالة مستقلة.",
    statsTitle: "نظرة سريعة",
    stats: [
      { value: "+7", label: "سنوات خبرة" },
      { value: "+40", label: "مشروع ناجح" },
      { value: "2", label: "نظام تصميم" },
      { value: "6", label: "مجالات التخصص" },
    ],
    valuesTitle: "قيمنا",
    values: [
      {
        icon: "🎯",
        title: "التركيز على النتائج",
        description:
          "التصميم الجميل ليس كافيًا. نحن ملتزمون بنتائج قابلة للقياس.",
      },
      {
        icon: "🔬",
        title: "مبني على البيانات",
        description:
          "قراراتنا مبنية على أبحاث المستخدم واختبار قابلية الاستخدام والبيانات السلوكية.",
      },
      {
        icon: "🤝",
        title: "الشفافية",
        description:
          "تواصل صادق وملاحظات مباشرة وتعاون وثيق مع فرق المنتج والهندسة والعمليات.",
      },
      {
        icon: "⚡",
        title: "السرعة والجودة",
        description:
          "نتحرك بسرعة لكن لا نتنازل عن الجودة. أنظمة التصميم تتيح لنا الحصول على كليهما.",
      },
    ],
    timelineTitle: "المسار المهني",
    timelineSubtitle:
      "أكثر من 7 سنوات من الخبرة في تصميم المنتجات الرقمية، من الشركات الناشئة إلى المؤسسات الكبيرة.",
    teamTitle: "فريقنا",
    team: [
      {
        name: "أمير حسام خالوي",
        role: "المؤسس ومدير التصميم",
        bio: "أكثر من 7 سنوات خبرة في تصميم المنتجات الرقمية في التكنولوجيا المالية و SaaS والخدمات اللوجستية والأسواق.",
        initial: "أ",
        linkedin: "https://linkedin.com/in/hesam_khalouei",
        dribbble: "https://dribbble.com/hesam_khalouei",
      },
    ],
    awardsTitle: "التقديرات والشهادات",
    awards: [
      { title: "شهادة Google UI/UX Design", year: "2020" },
      { title: "دورة User Research — Coursera", year: "2020" },
      { title: "UI/UX Design Specialist — 7Learn", year: "2017-2018" },
      { title: "دورة Product Manager — جامعة شريف", year: "2022-2023" },
    ],
    domainsTitle: "مجالات التخصص",
    domains: [
      { name: "FinTech", name_fa: "التكنولوجيا المالية", color: "#3B82F6" },
      { name: "SaaS", name_fa: "ساس", color: "#8B5CF6" },
      { name: "Logistics", name_fa: "الخدمات اللوجستية", color: "#FF6B35" },
      { name: "Marketplace", name_fa: "السوق", color: "#10B981" },
      { name: "Travel", name_fa: "السفر", color: "#F59E0B" },
      { name: "Government", name_fa: "حكومي", color: "#64748B" },
    ],
  },
};

const timelineData = {
  fa: [
    {
      year: "۱۴۰۴ - اکنون",
      title: "طراح ارشد محصول",
      company: "EBCOM",
      description:
        "بازطراحی پلتفرم اصلی با process mining و ساخت دیزاین سیستم شرکتی مقیاس‌پذیر برای ۵+ محصول.",
      achievement: "کاهش ۳۰٪ زمان handoff · ۲۵٪ بهبود بهره‌وری",
      current: true,
    },
    {
      year: "۱۴۰۳ - ۱۴۰۴",
      title: "طراح ارشد محصول",
      company: "Postex",
      description:
        "بازطراحی dashboard عملیات و پلتفرم لجستیک با تمرکز بر بهینه‌سازی workflow اپراتورها.",
      achievement: "کاهش ۲۰٪ زمان انجام تسک‌ها",
    },
    {
      year: "۱۴۰۲ - ۱۴۰۳",
      title: "سرپرست طراحی محصول",
      company: "Vardast",
      description:
        "بازطراحی onboarding فروشندگان و ساخت کامپوننت‌های UI مقیاس‌پذیر برای مارکت‌پلیس.",
      achievement: "کاهش ۱۵٪ نرخ ریزش در onboarding",
    },
    {
      year: "۱۴۰۲",
      title: "طراح ارشد محصول",
      company: "PDN",
      description: "یکپارچه‌سازی طراحی وب و موبایل بر پایه تست قابلیت استفاده.",
      achievement: "کاهش ۱۰٪ اصطکاک کاربر",
    },
    {
      year: "۱۴۰۰ - ۱۴۰۱",
      title: "طراح محصول",
      company: "ITSaaz",
      description:
        "ساخت و مقیاس‌دهی اولین دیزاین سیستم شرکتی با تمرکز بر پژوهش کاربر و تست قابلیت استفاده.",
      achievement: "۴۰٪ بهبود یکپارچگی UI · ۱۲٪ کاهش اصطکاک",
    },
    {
      year: "۱۳۹۸ - ۱۴۰۰",
      title: "طراح UI/UX",
      company: "Standard",
      description:
        "طراحی اپلیکیشن‌های وب و dashboard از discovery تا پروتوتایپ High-Fidelity.",
    },
    {
      year: "۱۳۹۶ - ۱۳۹۸",
      title: "طراح UI/UX فریلنس",
      company: "پروژه‌های مستقل",
      description:
        "ارائه راه‌حل‌های کامل UI/UX برای استارتاپ‌ها و کسب‌وکارهای کوچک در حوزه‌های مختلف.",
    },
  ],
  en: [
    {
      year: "2025 - Present",
      title: "Senior Product Designer",
      company: "EBCOM",
      description:
        "Redesigning core platform with process mining and building scalable company-wide design system for 5+ products.",
      achievement: "30% handoff time reduction · 25% efficiency gain",
      current: true,
    },
    {
      year: "2024 - 2025",
      title: "Senior Product Designer",
      company: "Postex",
      description:
        "Redesigning operations dashboard and logistics platform with focus on operator workflow optimization.",
      achievement: "20% task time reduction",
    },
    {
      year: "2023 - 2024",
      title: "Product Design Lead",
      company: "Vardast",
      description:
        "Redesigning seller onboarding and building scalable UI components for the marketplace.",
      achievement: "15% onboarding drop-off reduction",
    },
    {
      year: "2023",
      title: "Senior Product Designer",
      company: "PDN",
      description: "Unifying web and mobile design based on usability testing.",
      achievement: "10% user friction reduction",
    },
    {
      year: "2021 - 2023",
      title: "Product Designer",
      company: "ITSaaz",
      description:
        "Building and scaling the first company-wide design system with focus on user research and usability testing.",
      achievement: "40% UI consistency gain · 12% friction reduction",
    },
    {
      year: "2019 - 2021",
      title: "UI/UX Designer",
      company: "Standard",
      description:
        "Designing web applications and dashboards from discovery to high-fidelity prototypes.",
    },
    {
      year: "2017 - 2019",
      title: "Freelance UI/UX Designer",
      company: "Independent Projects",
      description:
        "Delivering end-to-end UI/UX solutions for startups and small businesses across industries.",
    },
  ],
  ar: [
    {
      year: "2025 - الآن",
      title: "مصمم منتجات أول",
      company: "EBCOM",
      description:
        "إعادة تصميم المنصة الأساسية مع process mining وبناء نظام تصميم على مستوى الشركة.",
      achievement: "تقليل 30% في وقت التسليم · 25% تحسين الكفاءة",
      current: true,
    },
    {
      year: "2024 - 2025",
      title: "مصمم منتجات أول",
      company: "Postex",
      description:
        "إعادة تصميم لوحة تحكم العمليات ومنصة اللوجستيات مع التركيز على تحسين سير عمل المشغلين.",
      achievement: "تقليل 20% في وقت المهمة",
    },
    {
      year: "2023 - 2024",
      title: "قائد تصميم المنتج",
      company: "Vardast",
      description:
        "إعادة تصميم تسجيل البائعين وبناء مكونات واجهة مستخدم قابلة للتوسع.",
      achievement: "تقليل 15% في التسرب",
    },
    {
      year: "2023",
      title: "مصمم منتجات أول",
      company: "PDN",
      description: "توحيد تصميم الويب والجوال بناءً على اختبار قابلية الاستخدام.",
      achievement: "تقليل 10% في احتكاك المستخدم",
    },
    {
      year: "2021 - 2023",
      title: "مصمم منتجات",
      company: "ITSaaz",
      description:
        "بناء وتوسيع أول نظام تصميم على مستوى الشركة مع التركيز على أبحاث المستخدم.",
      achievement: "تحسين 40% في اتساق الواجهة · تقليل 12% في الاحتكاك",
    },
    {
      year: "2019 - 2021",
      title: "مصمم UI/UX",
      company: "Standard",
      description:
        "تصميم تطبيقات الويب ولوحات التحكم من الاكتشاف إلى النماذج عالية الدقة.",
    },
    {
      year: "2017 - 2019",
      title: "مصمم UI/UX مستقل",
      company: "مشاريع مستقلة",
      description:
        "تقديم حلول UI/UX شاملة للشركات الناشئة والشركات الصغيرة في مختلف الصناعات.",
    },
  ],
};

export default function AboutPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];
  const timeline = timelineData[validLocale];

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12 md:mb-16"
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

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-14 md:mb-20"
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-4 md:mb-6">
              {t.storyTitle}
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)] leading-relaxed">
              {t.story}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.statsTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="text-center p-5 md:p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)]"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--color-primary)] mb-1.5 md:mb-2 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-[var(--color-text-muted)] leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-14 md:py-20 bg-[var(--color-bg-alt)] [--section-card-bg:var(--color-bg)] [--section-card-bg-hover:var(--color-bg)] [--section-card-border:var(--color-border)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.valuesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {t.values.map((value, idx) => (
                <Card key={idx}>
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-10 md:mb-20"
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-3 md:mb-4">
              {t.timelineTitle}
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-muted)]">
              {t.timelineSubtitle}
            </p>
          </motion.div>

          <Timeline items={timeline} />
        </Container>
      </section>

      {/* Domains */}
      <section className="py-14 md:py-20 bg-[var(--color-bg-alt)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.domainsTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {t.domains.map((domain, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group p-4 md:p-5 rounded-[var(--radius-lg)] bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 text-center"
                >
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-3"
                    style={{ backgroundColor: domain.color }}
                  />
                  <div className="text-xs md:text-sm font-bold">
                    {validLocale === "fa" || validLocale === "ar"
                      ? domain.name_fa
                      : domain.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.teamTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {t.team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] text-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl md:text-3xl font-black mx-auto mb-4 md:mb-5">
                    {member.initial}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--color-primary)] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-5 md:mb-6">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={member.dribbble}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
                      aria-label="Dribbble"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.757-1.406c1.354 1.748 2.555 3.548 3.592 5.387-2.523.673-5.376.784-8.556.331.586-2.594 2.467-4.75 4.964-5.718zm-5.286 7.331c3.488.564 6.662.422 9.493-.424.211.42.408.84.585 1.26-3.09 1.02-5.499 3.077-7.205 6.14-1.725-1.568-2.787-3.826-2.873-6.976zm4.882 8.325c1.476-2.837 3.562-4.69 6.276-5.548.854 2.22 1.397 4.585 1.646 7.088-1.054.464-2.222.717-3.451.717-1.605 0-3.146-.398-4.471-1.257zm9.678-.099c-.244-2.31-.753-4.492-1.531-6.546 1.938-.31 4.059-.24 6.387.181-.539 2.588-2.146 4.79-4.856 6.365z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Awards */}
      <section className="py-14 md:py-20 bg-[var(--color-bg-alt)]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.awardsTitle}
            </h2>
            <div className="space-y-3">
              {t.awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center justify-between gap-3 md:gap-4 p-4 md:p-5 rounded-[var(--radius-md)] bg-[var(--color-bg)] border border-[var(--color-border)]"
                >
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <span className="font-medium text-xs sm:text-sm md:text-base truncate">
                      {award.title}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-[var(--color-primary)] shrink-0">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}