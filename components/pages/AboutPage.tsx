"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
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
    teamTitle: "تیم ما",
    team: [
      {
        name: "امیر حسام خالویی",
        role: "بنیان‌گذار و مدیر طراحی",
        bio: "بیش از ۷ سال تجربه در طراحی محصولات دیجیتال در حوزه‌های فین‌تک، SaaS، لجستیک و مارکت‌پلیس. متخصص در دیزاین سیستم و ساده‌سازی فرایندهای پیچیده.",
        initial: "ا",
      },
    ],
    experienceTitle: "سابقه",
    experience:
      "همکاری با شرکت‌های پیشرو در حوزه‌های مختلف: EBCOM (پلتفرم اصلی + دیزاین سیستم شرکتی)، Postex (dashboard عملیات و پلتفرم لجستیک)، Vardast (onboarding فروشندگان و UI مارکت‌پلیس)، PDN (یکپارچه‌سازی وب و موبایل)، ITSaaz (اولین دیزاین سیستم شرکتی)، Standard و پروژه‌های فریلنس.",
    awardsTitle: "افتخارات و مدارک",
    awards: [
      "Google UI/UX Design Certification (2020)",
      "User Research Course — Coursera (2020)",
      "UI/UX Design Specialist — 7Learn (2017-2018)",
      "Product Manager Course — دانشگاه شریف (2022-2023)",
      "ساخت و مقیاس‌دهی ۲ دیزاین سیستم شرکتی",
      "بیش از ۴۰ پروژه موفق در ۶ حوزه تخصصی",
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
    teamTitle: "Our team",
    team: [
      {
        name: "Amir Hesam Khalouei",
        role: "Founder & Design Director",
        bio: "7+ years of experience in digital product design across FinTech, SaaS, Logistics, and Marketplace. Specialized in design systems and simplifying complex workflows.",
        initial: "A",
      },
    ],
    experienceTitle: "Experience",
    experience:
      "Collaborating with leading companies across domains: EBCOM (core platform + company-wide design system), Postex (operations dashboard and logistics platform), Vardast (seller onboarding and marketplace UI), PDN (web and mobile unification), ITSaaz (first company-wide design system), Standard, and freelance projects.",
    awardsTitle: "Recognition & Certifications",
    awards: [
      "Google UI/UX Design Certification (2020)",
      "User Research Course — Coursera (2020)",
      "UI/UX Design Specialist — 7Learn (2017-2018)",
      "Product Manager Course — Sharif University (2022-2023)",
      "Built and scaled 2 company-wide design systems",
      "40+ successful projects across 6 domains",
    ],
  },
  ar: {
    label: "من نحن",
    title: "دونات ديزاين",
    description:
      "وكالة تصميم منتجات رقمية تركز على تجربة المستخدم وأنظمة التصميم — أسسها أمير حسام خالوي.",
    storyTitle: "قصتنا",
    story:
      "بدأت دونات ديزاين بفكرة بسيطة: يجب أن يكون تصميم المنتج بسيطًا وعمليًا وقابلًا للقياس. بعد أكثر من 7 سنوات من العمل في التكنولوجيا المالية و SaaS والخدمات اللوجستية والأسواق — في شركات مثل EBCOM و Postex و Vardast و PDN — قررنا تقديم هذه الخبرة في وكالة مستقلة. اليوم نعمل بفخر مع فرق مختلفة ونبني منتجات يستخدمها الملايين.",
    valuesTitle: "قيمنا",
    values: [
      {
        icon: "🎯",
        title: "التركيز على النتائج",
        description:
          "التصميم الجميل ليس كافيًا. نحن ملتزمون بنتائج قابلة للقياس — مثل تحسين الكفاءة بنسبة 40% أو تقليل وقت التسليم بنسبة 30%.",
      },
      {
        icon: "🔬",
        title: "مبني على البيانات",
        description:
          "قراراتنا مبنية على أبحاث المستخدم واختبار قابلية الاستخدام والبيانات السلوكية — لا التخمين.",
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
    teamTitle: "فريقنا",
    team: [
      {
        name: "أمير حسام خالوي",
        role: "المؤسس ومدير التصميم",
        bio: "أكثر من 7 سنوات خبرة في تصميم المنتجات الرقمية في التكنولوجيا المالية و SaaS والخدمات اللوجستية والأسواق. متخصص في أنظمة التصميم وتبسيط سير العمل المعقد.",
        initial: "أ",
      },
    ],
    experienceTitle: "الخبرة",
    experience:
      "التعاون مع شركات رائدة في مجالات مختلفة: EBCOM (المنصة الأساسية + نظام تصميم على مستوى الشركة)، Postex (لوحة تحكم العمليات ومنصة اللوجستيات)، Vardast (تسجيل البائعين وواجهة السوق)، PDN (توحيد الويب والجوال)، ITSaaz (أول نظام تصميم على مستوى الشركة)، Standard، ومشاريع مستقلة.",
    awardsTitle: "التقديرات والشهادات",
    awards: [
      "شهادة Google UI/UX Design (2020)",
      "دورة User Research — Coursera (2020)",
      "UI/UX Design Specialist — 7Learn (2017-2018)",
      "دورة Product Manager — جامعة شريف (2022-2023)",
      "بناء وتوسيع نظامي تصميم على مستوى الشركة",
      "أكثر من 40 مشروعًا ناجحًا في 6 مجالات",
    ],
  },
};

export default function AboutPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  return (
    <main>
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-5">
              {t.label}
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed">
              {t.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              {t.storyTitle}
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              {t.story}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-10">
              {t.valuesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.values.map((value, idx) => (
                <Card key={idx}>
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-10">
              {t.teamTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.team.map((member, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-3xl font-black mx-auto mb-5">
                    {member.initial}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-black mb-6">
                {t.experienceTitle}
              </h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {t.experience}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl font-black mb-6">{t.awardsTitle}</h2>
              <ul className="space-y-3">
                {t.awards.map((award, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[var(--color-text-muted)]"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {award}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}