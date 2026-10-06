"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "فرصت‌های شغلی",
    title: "به تیم ما بپیوند",
    description:
      "ما همیشه دنبال آدم‌های بااستعداد، کنجکاو و خلاق هستیم که می‌خوان محصولات دیجیتال واقعی بسازن.",
    whyTitle: "چرا دونات دیزاین؟",
    why: [
      {
        icon: "🎯",
        title: "پروژه‌های واقعی",
        description:
          "روی محصولاتی کار می‌کنی که میلیون‌ها کاربر ازشون استفاده می‌کنن — نه فقط طراحی تئوری.",
      },
      {
        icon: "📈",
        title: "رشد حرفه‌ای",
        description:
          "محیطی که بهت یاد می‌ده، چالش می‌ده و اجازه می‌ده رشد کنی — بدون micro-management.",
      },
      {
        icon: "🌍",
        title: "دورکاری و انعطاف",
        description:
          "ما به نتیجه اهمیت می‌دیم، نه به ساعت کاری. دورکاری و ساعات منعطف داری.",
      },
      {
        icon: "🤝",
        title: "تیم کوچک، تأثیر بزرگ",
        description:
          "توی یه تیم کوچیک، کارت واقعاً دیده می‌شه و تأثیر مستقیم داری.",
      },
    ],
    positionsTitle: "موقعیت‌های باز",
    positions: [
      {
        title: "طراح محصول (Mid-Level)",
        type: "تمام‌وقت",
        location: "تهران / دورکاری",
        description:
          "طراحی جریان‌های کاربری، وایرفریم، پروتوتایپ و رابط کاربری نهایی برای پروژه‌های متنوع.",
        skills: ["Figma", "Design Thinking", "Prototyping", "User Research"],
      },
      {
        title: "طراح ارشد محصول (Senior)",
        type: "تمام‌وقت",
        location: "تهران / دورکاری",
        description:
          "رهبری پروژه‌های پیچیده، طراحی دیزاین سیستم، و منتورینگ طراحان جوان‌تر.",
        skills: ["Figma", "Design System", "Product Strategy", "Mentoring"],
      },
      {
        title: "پژوهشگر کاربر (UX Researcher)",
        type: "پاره‌وقت",
        location: "دورکاری",
        description:
          "انجام مصاحبه‌های کاربر، تست قابلیت استفاده، و تحلیل داده‌های رفتاری برای تصمیم‌های محصول.",
        skills: ["User Research", "Usability Testing", "Data Analysis"],
      },
      {
        title: "فرانت‌اند (Next.js)",
        type: "تمام‌وقت",
        location: "تهران / دورکاری",
        description:
          "پیاده‌سازی طراحی‌ها با Next.js، Tailwind CSS و Framer Motion با تمرکز بر کیفیت.",
        skills: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      },
    ],
    noPositionTitle: "موقعیت مناسب پیدا نکردی؟",
    noPositionDesc:
      "همیشه دنبال استعدادهاییم. رزومه‌ت رو بفرست و بگو چطور می‌تونی به تیم کمک کنی.",
    applyNow: "ارسال درخواست",
    sendResume: "ارسال رزومه",
    positionsEmpty: "فعلاً موقعیت بازی نداریم، ولی رزومه‌ت رو بفرست.",
  },
  en: {
    label: "Careers",
    title: "Join our team",
    description:
      "We're always looking for talented, curious, and creative people who want to build real digital products.",
    whyTitle: "Why Donut Design?",
    why: [
      {
        icon: "🎯",
        title: "Real projects",
        description:
          "You work on products used by millions of users — not just theoretical design.",
      },
      {
        icon: "📈",
        title: "Career growth",
        description:
          "An environment that teaches, challenges, and lets you grow — without micro-management.",
      },
      {
        icon: "🌍",
        title: "Remote & flexible",
        description:
          "We care about results, not hours. Remote work and flexible schedules.",
      },
      {
        icon: "🤝",
        title: "Small team, big impact",
        description:
          "In a small team, your work truly gets seen and you have direct impact.",
      },
    ],
    positionsTitle: "Open positions",
    positions: [
      {
        title: "Product Designer (Mid-Level)",
        type: "Full-time",
        location: "Tehran / Remote",
        description:
          "Designing user flows, wireframes, prototypes, and final UI for diverse projects.",
        skills: ["Figma", "Design Thinking", "Prototyping", "User Research"],
      },
      {
        title: "Senior Product Designer",
        type: "Full-time",
        location: "Tehran / Remote",
        description:
          "Leading complex projects, building design systems, and mentoring junior designers.",
        skills: ["Figma", "Design System", "Product Strategy", "Mentoring"],
      },
      {
        title: "UX Researcher",
        type: "Part-time",
        location: "Remote",
        description:
          "Conducting user interviews, usability testing, and behavioral data analysis for product decisions.",
        skills: ["User Research", "Usability Testing", "Data Analysis"],
      },
      {
        title: "Frontend Engineer (Next.js)",
        type: "Full-time",
        location: "Tehran / Remote",
        description:
          "Implementing designs with Next.js, Tailwind CSS, and Framer Motion with a focus on quality.",
        skills: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      },
    ],
    noPositionTitle: "Didn't find a match?",
    noPositionDesc:
      "We're always looking for talent. Send your resume and tell us how you can help.",
    applyNow: "Apply now",
    sendResume: "Send resume",
    positionsEmpty: "No open positions right now, but send us your resume.",
  },
  ar: {
    label: "الوظائف",
    title: "انضم إلى فريقنا",
    description:
      "نبحث دائمًا عن الموهوبين والفضوليين والمبدعين الذين يريدون بناء منتجات رقمية حقيقية.",
    whyTitle: "لماذا دونات ديزاين؟",
    why: [
      {
        icon: "🎯",
        title: "مشاريع حقيقية",
        description: "تعمل على منتجات يستخدمها الملايين — وليس فقط تصميم نظري.",
      },
      {
        icon: "📈",
        title: "نمو مهني",
        description: "بيئة تعلمك وتتحداك وتسمح لك بالنمو — بدون إدارة دقيقة.",
      },
      {
        icon: "🌍",
        title: "عن بعد ومرونة",
        description: "نهتم بالنتائج، لا بالساعات. عمل عن بعد وجداول مرنة.",
      },
      {
        icon: "🤝",
        title: "فريق صغير، تأثير كبير",
        description: "في فريق صغير، عملك يُرى حقًا ويكون لك تأثير مباشر.",
      },
    ],
    positionsTitle: "الوظائف المتاحة",
    positions: [
      {
        title: "مصمم منتجات (متوسط)",
        type: "دوام كامل",
        location: "طهران / عن بعد",
        description:
          "تصميم تدفقات المستخدم والإطارات والنماذج والواجهة النهائية لمشاريع متنوعة.",
        skills: ["Figma", "Design Thinking", "Prototyping", "User Research"],
      },
      {
        title: "مصمم منتجات أول",
        type: "دوام كامل",
        location: "طهران / عن بعد",
        description:
          "قيادة المشاريع المعقدة وبناء أنظمة التصميم وإرشاد المصممين الأصغر.",
        skills: ["Figma", "Design System", "Product Strategy", "Mentoring"],
      },
      {
        title: "باحث تجربة المستخدم",
        type: "دوام جزئي",
        location: "عن بعد",
        description:
          "إجراء مقابلات المستخدم واختبار قابلية الاستخدام وتحليل البيانات السلوكية.",
        skills: ["User Research", "Usability Testing", "Data Analysis"],
      },
      {
        title: "مهندس واجهات أمامية (Next.js)",
        type: "دوام كامل",
        location: "طهران / عن بعد",
        description:
          "تنفيذ التصاميم باستخدام Next.js و Tailwind CSS و Framer Motion.",
        skills: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      },
    ],
    noPositionTitle: "لم تجد ما يناسبك؟",
    noPositionDesc:
      "نبحث دائمًا عن المواهب. أرسل سيرتك الذاتية وأخبرنا كيف يمكنك المساعدة.",
    applyNow: "قدم الآن",
    sendResume: "إرسال السيرة الذاتية",
    positionsEmpty: "لا توجد وظائف متاحة حاليًا، لكن أرسل لنا سيرتك الذاتية.",
  },
};

export default function CareersPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

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

          {/* Why */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.whyTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {t.why.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)]"
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Positions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl font-black mb-8 md:mb-10">
              {t.positionsTitle}
            </h2>

            {t.positions.length === 0 ? (
              <p className="text-center text-[var(--color-text-muted)] py-16 md:py-20">
                {t.positionsEmpty}
              </p>
            ) : (
              <div className="space-y-4">
                {t.positions.map((position, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group p-5 md:p-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--section-card-bg)] hover:border-[var(--color-primary)] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                          <h3 className="text-lg md:text-2xl font-bold group-hover:text-[var(--color-primary)] transition-colors">
                            {position.title}
                          </h3>
                          <span className="px-2.5 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-[10px] md:text-xs font-bold whitespace-nowrap">
                            {position.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-text-muted)] mb-3 md:mb-4">
                          <svg
                            className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {position.location}
                        </div>

                        <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed mb-4">
                          {position.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                          {position.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded-full bg-[var(--color-bg-alt)] text-[10px] md:text-xs font-medium text-[var(--color-text-muted)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="shrink-0">
                        <Button
                          href={`/${validLocale}/contact?position=${encodeURIComponent(
                            position.title
                          )}`}
                          variant="outline"
                          className="w-full md:w-auto"
                        >
                          {t.applyNow}
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
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* No position CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-12 md:mt-16 p-6 md:p-10 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] text-center"
          >
            <h2 className="text-xl md:text-3xl font-black mb-2 md:mb-3">
              {t.noPositionTitle}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-5 md:mb-6">
              {t.noPositionDesc}
            </p>
            <Button href={`/${validLocale}/contact`}>{t.sendResume}</Button>
          </motion.div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}