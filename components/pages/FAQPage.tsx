"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    label: "سوالات متداول",
    title: "چی می‌خوای بدونی؟",
    description:
      "جواب سوالات رایج درباره خدمات، فرآیند کار، و همکاری با دونات دیزاین.",
    cantFind: "سوالت رو پیدا نکردی؟",
    cantFindDesc: "با ما تماس بگیر — معمولاً توی ۲۴ ساعت جواب می‌دیم.",
    contactCta: "تماس با ما",
    faqs: [
      {
        question: "خدمات دونات دیزاین چیه؟",
        answer:
          "ما خدمات طراحی محصول، دیزاین سیستم، پژوهش کاربر، بهینه‌سازی UX، process mining و مشاوره محصول ارائه می‌دیم. تمرکز ما روی محصولات پیچیده B2B و B2C در حوزه‌های فین‌تک، SaaS، لجستیک و مارکت‌پلیس هست.",
      },
      {
        question: "فرآیند کارتون چطوریه؟",
        answer:
          "ما با یه جلسه کشف شروع می‌کنیم تا نیازها و اهدافت رو بشناسیم. بعد از تعریف مسئله، وارد فاز طراحی می‌شیم — از وایرفریم تا High-Fidelity. توی همه مراحل با تست کاربر و بازخورد iterate می‌کنیم. تحویل نهایی شامل دیزاین سیستم، هندآف به توسعه‌دهنده و پشتیبانی هست.",
      },
      {
        question: "یه پروژه معمولاً چقدر طول می‌کشه؟",
        answer:
          "بستگی به دامنه پروژه داره. یه redesign کامل معمولاً ۳ تا ۶ ماه طول می‌کشه. پروژه‌های کوچیک‌تر (مثل طراحی یه فیچر خاص) می‌تونه ۲ تا ۴ هفته باشه. توی جلسه اول، timeline دقیق رو با هم مشخص می‌کنیم.",
      },
      {
        question: "هزینه پروژه چقدره؟",
        answer:
          "هزینه بستگی به دامنه، پیچیدگی و مدت پروژه داره. ما پکیج‌های مختلفی برای استارتاپ‌ها، شرکت‌های متوسط و سازمان‌های بزرگ داریم. برای دریافت قیمت دقیق، با ما تماس بگیر و توضیح بده پروژه‌ت چیه.",
      },
      {
        question: "با چه ابزارهایی کار می‌کنید؟",
        answer:
          "ابزار اصلی ما Figma هست، ولی از Maze برای تست، Miro برای کارگاه، Notion برای مستندسازی و Jira یا ClickUp برای مدیریت پروژه هم استفاده می‌کنیم. اگه تیم شما ابزار خاصی داره، خودمون رو وفق می‌دیم.",
      },
      {
        question: "آیا بعد از تحویل پشتیبانی می‌دید؟",
        answer:
          "بله. بعد از تحویل طراحی، ما توی فاز پیاده‌سازی هم کنارتون هستیم — از رفع سوالات توسعه‌دهنده تا بازبینی محصول نهایی. همچنین اگه بعد از مدتی نیاز به iterate داشتید، پشتیبانی ادامه‌دار داریم.",
      },
      {
        question: "چطور می‌تونم پروژه بدم؟",
        answer:
          "کافیه از طریق صفحه تماس با ما پیام بفرستی. توی پیام، توضیح بده پروژه‌ت چیه، دامنه‌ش چقدره و timeline مورد نظرت چیه. ما توی ۲۴ ساعت باهات تماس می‌گیریم و یه جلسه کشف رایگان می‌ذاریم.",
      },
      {
        question: "توی چه حوزه‌هایی تجربه دارید؟",
        answer:
          "ما توی ۶ حوزه تخصصی تجربه داریم: فین‌تک (Ewano)، لجستیک (Postex)، مارکت‌پلیس (Vardast)، SaaS (EBCOM، Ronaq)، سفر (Kayak، HudHudTrip) و خدمات دولتی (IT Pishkhan). بیش از ۴۰ پروژه موفق در این حوزه‌ها تحویل دادیم.",
      },
      {
        question: "آیا با استارتاپ‌های کوچک هم کار می‌کنید؟",
        answer:
          "بله. ما با استارتاپ‌های کوچیک هم همکاری می‌کنیم، ولی دامنه همکاری رو با توجه به مرحله رشد استارتاپ تنظیم می‌کنیم. برای استارتاپ‌های زودمرحله، پکیج‌های سبک‌تری داریم که روی مهم‌ترین نیازهاشون تمرکز می‌کنه.",
      },
      {
        question: "دیزاین سیستم دقیقاً چیه و چرا مهمه؟",
        answer:
          "دیزاین سیستم یه کتابخانه از کامپوننت‌ها، توکن‌ها و قواعد طراحی هست که تیم رو یکپارچه می‌کنه. ما توی EBCOM و ITSaaz دیزاین سیستم‌های شرکتی ساختیم که زمان هندآف به توسعه‌دهنده رو ۳۰٪ کاهش داد و بهره‌وری طراحی رو ۴۰٪ افزایش داد.",
      },
    ],
  },
  en: {
    label: "FAQ",
    title: "What do you want to know?",
    description:
      "Answers to common questions about our services, process, and working with Donut Design.",
    cantFind: "Can't find your answer?",
    cantFindDesc: "Get in touch — we usually reply within 24 hours.",
    contactCta: "Contact us",
    faqs: [
      {
        question: "What services does Donut Design offer?",
        answer:
          "We offer product design, design systems, user research, UX optimization, process mining, and product advisory. We focus on complex B2B and B2C products in FinTech, SaaS, Logistics, and Marketplace.",
      },
      {
        question: "What's your work process?",
        answer:
          "We start with a discovery session to understand your needs and goals. After defining the problem, we enter the design phase — from wireframes to high-fidelity. We iterate through all stages with user testing and feedback. Final delivery includes the design system, developer handoff, and support.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "It depends on the project scope. A full redesign usually takes 3-6 months. Smaller projects (like designing a specific feature) can take 2-4 weeks. We'll define the exact timeline together in the first session.",
      },
      {
        question: "How much does a project cost?",
        answer:
          "Cost depends on scope, complexity, and duration. We have different packages for startups, mid-size companies, and large organizations. For an exact quote, contact us and describe your project.",
      },
      {
        question: "What tools do you use?",
        answer:
          "Our main tool is Figma, but we also use Maze for testing, Miro for workshops, Notion for documentation, and Jira or ClickUp for project management. If your team uses specific tools, we adapt.",
      },
      {
        question: "Do you provide support after delivery?",
        answer:
          "Yes. After design delivery, we stay with you during implementation — from answering developer questions to reviewing the final product. We also provide ongoing support if you need to iterate later.",
      },
      {
        question: "How can I start a project?",
        answer:
          "Just send us a message through the contact page. Describe your project, its scope, and your desired timeline. We'll get back to you within 24 hours and schedule a free discovery session.",
      },
      {
        question: "What domains do you have experience in?",
        answer:
          "We have expertise in 6 domains: FinTech (Ewano), Logistics (Postex), Marketplace (Vardast), SaaS (EBCOM, Ronaq), Travel (Kayak, HudHudTrip), and Government Services (IT Pishkhan). We've delivered 40+ successful projects across these domains.",
      },
      {
        question: "Do you work with small startups?",
        answer:
          "Yes. We work with small startups too, but we tailor the scope to the startup's growth stage. For early-stage startups, we have lighter packages focused on their most critical needs.",
      },
      {
        question: "What exactly is a design system and why does it matter?",
        answer:
          "A design system is a library of components, tokens, and design rules that unifies a team. At EBCOM and ITSaaz, we built company-wide design systems that reduced handoff time by 30% and increased design efficiency by 40%.",
      },
    ],
  },
  ar: {
    label: "الأسئلة الشائعة",
    title: "ماذا تريد أن تعرف؟",
    description:
      "إجابات على الأسئلة الشائعة حول خدماتنا وعملية العمل مع دونات ديزاين.",
    cantFind: "لم تجد إجابتك؟",
    cantFindDesc: "تواصل معنا — عادةً نرد خلال 24 ساعة.",
    contactCta: "اتصل بنا",
    faqs: [
      {
        question: "ما هي خدمات دونات ديزاين؟",
        answer:
          "نقدم تصميم المنتج، أنظمة التصميم، أبحاث المستخدم، تحسين تجربة المستخدم، process mining، واستشارات المنتج.",
      },
      {
        question: "ما هي عملية عملكم؟",
        answer:
          "نبدأ بجلسة اكتشاف لفهم احتياجاتك وأهدافك. بعد تحديد المشكلة، ندخل مرحلة التصميم — من الإطارات السلكية إلى الدقة العالية.",
      },
      {
        question: "كم يستغرق المشروع النموذجي؟",
        answer:
          "يعتمد على نطاق المشروع. إعادة التصميم الكاملة عادةً تستغرق 3-6 أشهر. المشاريع الأصغر يمكن أن تستغرق 2-4 أسابيع.",
      },
      {
        question: "كم تكلفة المشروع؟",
        answer:
          "تعتمد التكلفة على النطاق والتعقيد والمدة. لدينا حزم مختلفة للشركات الناشئة والشركات المتوسطة والمؤسسات الكبيرة.",
      },
      {
        question: "ما هي الأدوات التي تستخدمونها؟",
        answer:
          "أداتنا الرئيسية هي Figma، لكننا نستخدم أيضًا Maze للاختبار و Miro لورش العمل و Notion للتوثيق و Jira أو ClickUp لإدارة المشاريع.",
      },
      {
        question: "هل تقدمون الدعم بعد التسليم؟",
        answer:
          "نعم. بعد تسليم التصميم، نبقى معك خلال التنفيذ — من الإجابة على أسئلة المطورين إلى مراجعة المنتج النهائي.",
      },
      {
        question: "كيف أبدأ مشروعًا؟",
        answer:
          "فقط أرسل لنا رسالة عبر صفحة الاتصال. صف مشروعك ونطاقه والجدول الزمني المطلوب.",
      },
      {
        question: "ما هي المجالات التي لديكم خبرة فيها؟",
        answer:
          "لدينا خبرة في 6 مجالات: التكنولوجيا المالية (Ewano)، الخدمات اللوجستية (Postex)، الأسواق (Vardast)، SaaS (EBCOM، Ronaq)، السفر (Kayak، HudHudTrip)، والخدمات الحكومية (IT Pishkhan).",
      },
      {
        question: "هل تعملون مع الشركات الناشئة الصغيرة؟",
        answer:
          "نعم. نعمل مع الشركات الناشئة الصغيرة أيضًا، لكننا نكيّف النطاق مع مرحلة النمو.",
      },
      {
        question: "ما هو نظام التصميم بالضبط ولماذا يهم؟",
        answer:
          "نظام التصميم هو مكتبة من المكونات والرموز وقواعد التصميم التي توحد الفريق.",
      },
    ],
  },
};

export default function FAQPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-10 md:mb-16"
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

          <div className="max-w-3xl mx-auto space-y-3">
            {t.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div
                    className={`rounded-[var(--radius-lg)] border transition-colors duration-300 ${
                      isOpen
                        ? "border-[var(--color-primary)] bg-[var(--section-card-bg)]"
                        : "border-[var(--color-border)] bg-[var(--section-card-bg)] hover:border-[var(--color-primary)]/50"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 md:gap-6 p-5 md:p-8 text-left rtl:text-right"
                    >
                      <span className="text-base md:text-xl font-bold leading-snug">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] flex items-center justify-center"
                      >
                        <svg
                          className="w-3.5 h-3.5 md:w-4 md:h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-8 pb-5 md:pb-8 pt-0">
                            <div className="pt-4 border-t border-[var(--color-border)]">
                              <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-12 md:mt-16 p-6 md:p-10 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] text-center"
          >
            <h2 className="text-xl md:text-3xl font-black mb-2 md:mb-3">
              {t.cantFind}
            </h2>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] mb-5 md:mb-6">
              {t.cantFindDesc}
            </p>
            <Button href={`/${validLocale}/contact`}>{t.contactCta}</Button>
          </motion.div>
        </Container>
      </section>

      <FinalCTA />
    </main>
  );
}