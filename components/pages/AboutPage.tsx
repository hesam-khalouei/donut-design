"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "درباره ما",
    title: "ما دونات دیزاینیم",
    description:
      "یه آژانس طراحی محصولات دیجیتال که با تمرکز بر تجربه کاربری، محصولاتی می‌سازیم که کار می‌کنن.",
    storyTitle: "داستان ما",
    story:
      "دونات دیزاین از یه ایده ساده شروع شد: طراحی محصول باید ساده، کاربردی و لذت‌بخش باشه. بعد از سال‌ها کار در حوزه‌های مختلف — از فین‌تک تا لجستیک — تصمیم گرفتیم تجربه‌مون رو در قالب یه آژانس مستقل ارائه بدیم. امروز با افتخار با تیم‌های مختلف همکاری می‌کنیم و محصولاتی می‌سازیم که میلیون‌ها کاربر ازشون استفاده می‌کنن.",
    valuesTitle: "ارزش‌های ما",
    values: [
      {
        icon: "🎯",
        title: "تمرکز بر نتیجه",
        description:
          "طراحی زیبا کافی نیست. ما به نتایج قابل اندازه‌گیری متعهدیم.",
      },
      {
        icon: "🤝",
        title: "شفافیت",
        description:
          "ارتباط صادقانه، بازخورد مستقیم، و تصمیم‌های شفاف با شما.",
      },
      {
        icon: "🔬",
        title: "داده‌محور",
        description:
          "تصمیم‌های طراحی ما بر پایه داده، پژوهش و تست هستن، نه حدس.",
      },
      {
        icon: "⚡",
        title: "سرعت و کیفیت",
        description:
          "سریع حرکت می‌کنیم ولی هیچ‌وقت کیفیت رو فدا نمی‌کنیم.",
      },
    ],
    teamTitle: "تیم ما",
    team: [
      {
        name: "امیر حسام خالویی",
        role: "بنیان‌گذار و مدیر طراحی",
        bio: "بیش از ۷ سال تجربه در طراحی محصولات دیجیتال در حوزه‌های فین‌تک، SaaS و لجستیک.",
        initial: "ا",
      },
    ],
    experienceTitle: "سابقه",
    experience:
      "همکاری با شرکت‌های پیشرو در حوزه‌های مختلف از جمله EBCOM، Postex، Vardast، PDN، ITSaaz و Standard.",
    awardsTitle: "افتخارات",
    awards: [
      "گوگل سرتیفیکیت UI/UX Design",
      "دوره User Research از Coursera",
      "دوره Product Manager از دانشگاه شریف",
      "بیش از ۴۰ پروژه موفق",
    ],
  },
  en: {
    label: "About Us",
    title: "We are Donut Design",
    description:
      "A digital product design agency focused on UX, building products that work.",
    storyTitle: "Our story",
    story:
      "Donut Design started with a simple idea: product design should be simple, functional, and delightful. After years of working across domains — from FinTech to logistics — we decided to bring our experience into an independent agency. Today, we proudly work with various teams and build products used by millions.",
    valuesTitle: "Our values",
    values: [
      {
        icon: "🎯",
        title: "Results-focused",
        description:
          "Beautiful design isn't enough. We're committed to measurable results.",
      },
      {
        icon: "🤝",
        title: "Transparency",
        description:
          "Honest communication, direct feedback, and transparent decisions.",
      },
      {
        icon: "🔬",
        title: "Data-informed",
        description:
          "Our design decisions are based on data, research and testing — not guesses.",
      },
      {
        icon: "⚡",
        title: "Speed & Quality",
        description: "We move fast but never compromise on quality.",
      },
    ],
    teamTitle: "Our team",
    team: [
      {
        name: "Amir Hesam Khalouei",
        role: "Founder & Design Director",
        bio: "7+ years of experience in digital product design across FinTech, SaaS and logistics.",
        initial: "A",
      },
    ],
    experienceTitle: "Experience",
    experience:
      "Collaborating with leading companies across domains including EBCOM, Postex, Vardast, PDN, ITSaaz and Standard.",
    awardsTitle: "Recognition",
    awards: [
      "Google UI/UX Design Certification",
      "User Research course from Coursera",
      "Product Manager course from Sharif University",
      "40+ successful projects",
    ],
  },
  ar: {
    label: "من نحن",
    title: "نحن دونات ديزاين",
    description:
      "وكالة تصميم منتجات رقمية تركز على تجربة المستخدم، تبني منتجات تعمل.",
    storyTitle: "قصتنا",
    story:
      "بدأت دونات ديزاين بفكرة بسيطة: يجب أن يكون تصميم المنتج بسيطًا وعمليًا وممتعًا. بعد سنوات من العمل في مجالات مختلفة — من التكنولوجيا المالية إلى الخدمات اللوجستية — قررنا تقديم خبرتنا في وكالة مستقلة. اليوم نعمل بفخر مع فرق مختلفة ونبني منتجات يستخدمها الملايين.",
    valuesTitle: "قيمنا",
    values: [
      {
        icon: "🎯",
        title: "التركيز على النتائج",
        description: "التصميم الجميل ليس كافيًا. نحن ملتزمون بنتائج قابلة للقياس.",
      },
      {
        icon: "🤝",
        title: "الشفافية",
        description: "تواصل صادق، ملاحظات مباشرة، وقرارات شفافة.",
      },
      {
        icon: "🔬",
        title: "مبني على البيانات",
        description: "قراراتنا مبنية على البيانات والبحث والاختبار، لا التخمين.",
      },
      {
        icon: "⚡",
        title: "السرعة والجودة",
        description: "نتحرك بسرعة لكن لا نتنازل عن الجودة.",
      },
    ],
    teamTitle: "فريقنا",
    team: [
      {
        name: "أمير حسام خالوي",
        role: "المؤسس ومدير التصميم",
        bio: "أكثر من 7 سنوات خبرة في تصميم المنتجات الرقمية في التكنولوجيا المالية و SaaS والخدمات اللوجستية.",
        initial: "أ",
      },
    ],
    experienceTitle: "الخبرة",
    experience:
      "التعاون مع شركات رائدة في مجالات مختلفة بما في ذلك EBCOM و Postex و Vardast و PDN و ITSaaz و Standard.",
    awardsTitle: "التقديرات",
    awards: [
      "شهادة Google UI/UX Design",
      "دورة User Research من Coursera",
      "دورة Product Manager من جامعة شريف",
      "أكثر من 40 مشروعًا ناجحًا",
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

          {/* Story */}
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

          {/* Values */}
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
                  <p className="text-[var(--color-text-muted)] text-sm">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Team */}
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

          {/* Experience + Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-black mb-6">{t.experienceTitle}</h2>
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