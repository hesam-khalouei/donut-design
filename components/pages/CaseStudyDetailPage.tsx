"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

const translations = {
  fa: {
    back: "بازگشت به مطالعات موردی",
    challenge: "چالش",
    solution: "راه‌حل",
    result: "نتیجه",
    client: "مشتری",
    year: "سال",
    role: "نقش ما",
    duration: "مدت پروژه",
    services: "خدمات ارائه‌شده",
    testimonial: "نظر مشتری",
    results: "نتایج کلیدی",
    nextCase: "مطالعه موردی بعدی",
    backToAll: "مشاهده همه",
    viewCase: "مشاهده",
  },
  en: {
    back: "Back to case studies",
    challenge: "The Challenge",
    solution: "The Solution",
    result: "The Result",
    client: "Client",
    year: "Year",
    role: "Our Role",
    duration: "Duration",
    services: "Services",
    testimonial: "Testimonial",
    results: "Key Results",
    nextCase: "Next case study",
    backToAll: "View all",
    viewCase: "View",
  },
  ar: {
    back: "العودة إلى دراسات الحالة",
    challenge: "التحدي",
    solution: "الحل",
    result: "النتيجة",
    client: "العميل",
    year: "السنة",
    role: "دورنا",
    duration: "المدة",
    services: "الخدمات",
    testimonial: "شهادة",
    results: "النتائج الرئيسية",
    nextCase: "دراسة الحالة التالية",
    backToAll: "عرض الكل",
     viewCase: "عرض",
  },
};

interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: Record<string, string>;
  category: string;
  year: string;
  client: string;
  role: Record<string, string>;
  duration: Record<string, string>;
  services: string[];
  challenge: Record<string, string>;
  solution: Record<string, string>;
  result: Record<string, string>;
  results: { value: string; label: Record<string, string> }[];
  testimonial?: {
    quote: Record<string, string>;
    name: string;
    role: Record<string, string>;
  };
  color: string;
  accent: string;
}

const caseData: Record<string, CaseStudyData> = {
  ewano: {
    slug: "ewano",
    title: "Ewano",
    subtitle: {
      fa: "بازطراحی پلتفرم بانکداری دیجیتال",
      en: "Redesigning a digital banking platform",
      ar: "إعادة تصميم منصة مصرفية رقمية",
    },
    category: "FinTech",
    year: "1403",
    client: "Ewano Financial",
    role: {
      fa: "طراحی محصول، دیزاین سیستم، پژوهش کاربر",
      en: "Product Design, Design System, User Research",
      ar: "تصميم المنتج، نظام التصميم، أبحاث المستخدم",
    },
    duration: {
      fa: "۶ ماه",
      en: "6 months",
      ar: "6 أشهر",
    },
    services: ["Product Design", "Design System", "User Research"],
    challenge: {
      fa: "پلتفرم بانکداری Ewano با چالش‌های متعددی روبرو بود: نرخ بالای ریزش کاربر در فرآیند ثبت‌نام، پیچیدگی جریان‌های انتقال وجه، و عدم یکپارچگی در تجربه بین وب و موبایل. کاربران از پیچیدگی بیش از حد و نبود راهنمایی مناسب شکایت داشتند.",
      en: "Ewano's banking platform faced multiple challenges: high user drop-off during signup, complex money transfer flows, and inconsistent experience between web and mobile. Users complained about excessive complexity and lack of proper guidance.",
      ar: "واجهت منصة Ewano المصرفية تحديات متعددة: معدل تسرب مرتفع للمستخدمين أثناء التسجيل، وتدفقات تحويل أموال معقدة، وعدم الاتساق في التجربة بين الويب والجوال. اشتكى المستخدمون من التعقيد المفرط وعدم وجود إرشادات مناسبة.",
    },
    solution: {
      fa: "با انجام پژوهش کاربری عمیق و تحلیل داده‌های رفتاری، جریان‌های کلیدی رو بازطراحی کردیم. یه دیزاین سیستم جامع ساختیم که تجربه یکپارچه‌ای بین پلتفرم‌های مختلف فراهم می‌کرد. فرآیند ثبت‌نام رو ساده‌تر کردیم و راهنمایی‌های گام‌به‌گام اضافه کردیم.",
      en: "Through deep user research and behavioral data analysis, we redesigned key flows. We built a comprehensive design system providing a unified experience across platforms. We simplified the signup process and added step-by-step guidance.",
      ar: "من خلال أبحاث المستخدم العميقة وتحليل البيانات السلوكية، أعدنا تصميم التدفقات الرئيسية. بنينا نظام تصميم شامل يوفر تجربة موحدة عبر المنصات. بسطنا عملية التسجيل وأضفنا إرشادات خطوة بخطوة.",
    },
    result: {
      fa: "بعد از ۶ ماه، نرخ تبدیل پلتفرم ۲۵٪ افزایش پیدا کرد و رضایت کاربران به طور قابل توجهی بهبود یافت. دیزاین سیستم جدید، سرعت توسعه تیم رو دو برابر کرد.",
      en: "After 6 months, platform conversion increased by 25% and user satisfaction improved significantly. The new design system doubled the team's development speed.",
      ar: "بعد 6 أشهر، زاد تحويل المنصة بنسبة 25% وتحسنت رضا المستخدمين بشكل كبير. ضاعف نظام التصميم الجديد سرعة تطوير الفريق.",
    },
    results: [
      { value: "+۲۵٪", label: { fa: "نرخ تبدیل", en: "Conversion", ar: "التحويل" } },
      { value: "-۳۰٪", label: { fa: "زمان handoff", en: "Handoff time", ar: "وقت التسليم" } },
      { value: "+۴۰٪", label: { fa: "رضایت کاربر", en: "User satisfaction", ar: "رضا المستخدم" } },
      { value: "۲x", label: { fa: "سرعت توسعه", en: "Dev speed", ar: "سرعة التطوير" } },
    ],
    testimonial: {
      quote: {
        fa: "همکاری با دونات دیزاین فراتر از انتظارات ما بود. نتایج قابل اندازه‌گیری و تیم فوق‌العاده حرفه‌ای.",
        en: "Working with Donut Design exceeded our expectations. Measurable results and a highly professional team.",
        ar: "تجاوز العمل مع دونات ديزاين توقعاتنا. نتائج قابلة للقياس وفريق محترف للغاية.",
      },
      name: "Sara Mohammadi",
      role: {
        fa: "مدیر محصول، Ewano",
        en: "Product Manager, Ewano",
        ar: "مديرة المنتج، Ewano",
      },
    },
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
  },
  postex: {
    slug: "postex",
    title: "Postex",
    subtitle: {
      fa: "بازطراحی dashboard عملیات لجستیک",
      en: "Redesigning logistics operations dashboard",
      ar: "إعادة تصميم لوحة تحكم العمليات اللوجستية",
    },
    category: "Logistics",
    year: "1403",
    client: "Postex Logistics",
    role: {
      fa: "طراحی محصول، بهینه‌سازی UX، Process Mining",
      en: "Product Design, UX Optimization, Process Mining",
      ar: "تصميم المنتج، تحسين UX، Process Mining",
    },
    duration: {
      fa: "۴ ماه",
      en: "4 months",
      ar: "4 أشهر",
    },
    services: ["Product Design", "UX Optimization", "Process Mining"],
    challenge: {
      fa: "dashboard عملیات Postex با حجم بالای داده و پیچیدگی زیاد، کارایی اپراتورها رو کاهش می‌داد. زمان انجام تسک‌های روزانه بالا بود و خطاهای انسانی زیاد اتفاق می‌افتاد.",
      en: "Postex's operations dashboard with high data volume and complexity was reducing operator efficiency. Daily task completion time was high and human errors were frequent.",
      ar: "كانت لوحة تحكم عمليات Postex مع حجم البيانات المرتفع والتعقيد تقلل من كفاءة المشغلين. كان وقت إكمال المهام اليومية مرتفعًا وكانت الأخطاء البشرية متكررة.",
    },
    solution: {
      fa: "با استفاده از تکنیک‌های process mining، جریان‌های کاری اپراتورها رو تحلیل کردیم. dashboard رو با اولویت‌بندی اطلاعات و ساده‌سازی جریان‌ها بازطراحی کردیم. قابلیت‌های batch operation و keyboard shortcut اضافه کردیم.",
      en: "Using process mining techniques, we analyzed operator workflows. We redesigned the dashboard with information prioritization and flow simplification. We added batch operations and keyboard shortcuts.",
      ar: "باستخدام تقنيات process mining، حللنا سير عمل المشغلين. أعدنا تصميم اللوحة مع ترتيب المعلومات وتبسيط التدفقات. أضفنا عمليات الدفعات واختصارات لوحة المفاتيح.",
    },
    result: {
      fa: "زمان انجام تسک‌های روزانه ۲۰٪ کاهش پیدا کرد و خطاهای انسانی به طور قابل توجهی کم شد. رضایت اپراتورها از سیستم جدید بالا بود.",
      en: "Daily task completion time decreased by 20% and human errors dropped significantly. Operator satisfaction with the new system was high.",
      ar: "انخفض وقت إكمال المهام اليومية بنسبة 20% وانخفضت الأخطاء البشرية بشكل كبير. كان رضا المشغلين عن النظام الجديد مرتفعًا.",
    },
    results: [
      { value: "-۲۰٪", label: { fa: "زمان تسک", en: "Task time", ar: "وقت المهمة" } },
      { value: "-۵۰٪", label: { fa: "خطای انسانی", en: "Human error", ar: "الخطأ البشري" } },
      { value: "+۳۵٪", label: { fa: "بهره‌وری", en: "Efficiency", ar: "الكفاءة" } },
      { value: "+۲۵٪", label: { fa: "رضایت اپراتور", en: "Operator satisfaction", ar: "رضا المشغل" } },
    ],
    testimonial: {
      quote: {
        fa: "درک عمیق تیم از فرآیندهای لجستیکی و توانایی تبدیلشون به راه‌حل‌های ساده، فوق‌العاده بود.",
        en: "The team's deep understanding of logistics workflows and ability to turn them into simple solutions was remarkable.",
        ar: "كان الفهم العميق للفريق لسير العمل اللوجستي والقدرة على تحويله إلى حلول بسيطة رائعًا.",
      },
      name: "Ali Rezaei",
      role: {
        fa: "مدیر عملیات، Postex",
        en: "Operations Manager, Postex",
        ar: "مدير العمليات، Postex",
      },
    },
    color: "from-orange-500/20 to-red-500/20",
    accent: "#FF6B35",
  },
  vardast: {
    slug: "vardast",
    title: "Vardast",
    subtitle: {
      fa: "بازطراحی onboarding فروشندگان",
      en: "Redesigning seller onboarding",
      ar: "إعادة تصميم تسجيل البائعين",
    },
    category: "Marketplace",
    year: "1402",
    client: "Vardast Marketplace",
    role: {
      fa: "طراحی محصول، پژوهش کاربر، Onboarding Design",
      en: "Product Design, User Research, Onboarding Design",
      ar: "تصميم المنتج، أبحاث المستخدم، تصميم التسجيل",
    },
    duration: {
      fa: "۵ ماه",
      en: "5 months",
      ar: "5 أشهر",
    },
    services: ["Product Design", "User Research", "Onboarding Design"],
    challenge: {
      fa: "فرآیند ثبت‌نام فروشندگان در Vardast بسیار پیچیده بود و نرخ ریزش بالایی داشت. فروشندگان جدید در مراحل میانی رها می‌کردن و نیاز به پشتیبانی انسانی زیادی داشتند.",
      en: "The seller registration process at Vardast was very complex with high drop-off. New sellers abandoned at intermediate steps and required significant human support.",
      ar: "كانت عملية تسجيل البائعين في Vardast معقدة للغاية مع تسرب مرتفع. تخلى البائعون الجدد في الخطوات الوسيطة وتطلبوا دعمًا بشريًا كبيرًا.",
    },
    solution: {
      fa: "با مصاحبه با فروشندگان فعلی و جدید، نقاط اصطکاک رو شناسایی کردیم. فرآیند رو به مراحل کوچک‌تر شکستیم و پیشرفت رو قابل مشاهده کردیم. راهنمایی‌های تصویری و چک‌لیست اضافه کردیم.",
      en: "Through interviews with current and new sellers, we identified friction points. We broke the process into smaller steps with visible progress. We added visual guidance and checklists.",
      ar: "من خلال مقابلات مع البائعين الحاليين والجدد، حددنا نقاط الاحتكاك. قسمنا العملية إلى خطوات أصغر مع تقدم مرئي. أضفنا إرشادات بصرية وقوائم مراجعة.",
    },
    result: {
      fa: "نرخ ریزش در onboarding حدود ۱۵٪ کاهش پیدا کرد و زمان تکمیل ثبت‌نام به نصف رسید. نیاز به پشتیبانی انسانی نیز کم شد.",
      en: "Onboarding drop-off decreased by about 15% and signup completion time was halved. Human support needs also decreased.",
      ar: "انخفض التسرب في التسجيل بنحو 15% وتم تقليص وقت إكمال التسجيل إلى النصف. كما انخفضت احتياجات الدعم البشري.",
    },
    results: [
      { value: "-۱۵٪", label: { fa: "نرخ ریزش", en: "Drop-off", ar: "التسرب" } },
      { value: "-۵۰٪", label: { fa: "زمان ثبت‌نام", en: "Signup time", ar: "وقت التسجيل" } },
      { value: "+۳۰٪", label: { fa: "تکمیل پروفایل", en: "Profile completion", ar: "إكمال الملف" } },
      { value: "-۴۰٪", label: { fa: "نیاز به پشتیبانی", en: "Support needs", ar: "احتياجات الدعم" } },
    ],
    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
  },
  ebcom: {
    slug: "ebcom",
    title: "EBCOM",
    subtitle: {
      fa: "ساخت دیزاین سیستم شرکتی",
      en: "Building a company-wide design system",
      ar: "بناء نظام تصميم على مستوى الشركة",
    },
    category: "SaaS",
    year: "1403",
    client: "EBCOM",
    role: {
      fa: "دیزاین سیستم، طراحی محصول، Process Mining",
      en: "Design System, Product Design, Process Mining",
      ar: "نظام التصميم، تصميم المنتج، Process Mining",
    },
    duration: {
      fa: "در جریان",
      en: "Ongoing",
      ar: "مستمر",
    },
    services: ["Design System", "Product Design", "Process Mining"],
    challenge: {
      fa: "EBCOM با ۵+ محصول مستقل، با مشکل عدم یکپارچگی UI و زمان طولانی handoff روبرو بود. هر تیم طراحی خودش رو داشت و کامپوننت‌ها دوباره ساخته می‌شد.",
      en: "With 5+ independent products, EBCOM faced UI inconsistency and long handoff times. Each team had its own design and components were rebuilt repeatedly.",
      ar: "مع أكثر من 5 منتجات مستقلة، واجهت EBCOM عدم اتساق واجهة المستخدم وأوقات تسليم طويلة. كان لكل فريق تصميمه الخاص وتم إعادة بناء المكونات بشكل متكرر.",
    },
    solution: {
      fa: "با تحلیل فرایندهای عملیاتی و کارگاه‌های مشترک با تیم‌های مختلف، یه دیزاین سیستم جامع ساختیم. توکن‌های طراحی، کتابخانه کامپوننت، مستندات و آموزش تیم رو در بر گرفت.",
      en: "Through operational process analysis and joint workshops with different teams, we built a comprehensive design system. It included design tokens, component library, documentation, and team training.",
      ar: "من خلال تحليل العمليات التشغيلية وورش العمل المشتركة مع الفرق المختلفة، بنينا نظام تصميم شامل. تضمن رموز التصميم ومكتبة المكونات والتوثيق وتدريب الفريق.",
    },
    result: {
      fa: "زمان handoff حدود ۳۰٪ کاهش پیدا کرد و یکپارچگی UI در ۵+ محصول بهبود یافت. بهره‌وری طراحی حدود ۲۵٪ افزایش داشت.",
      en: "Handoff time decreased by about 30% and UI consistency improved across 5+ products. Design efficiency increased by around 25%.",
      ar: "انخفض وقت التسليم بنحو 30% وتحسن اتساق واجهة المستخدم عبر أكثر من 5 منتجات. زادت كفاءة التصميم بنحو 25%.",
    },
    results: [
      { value: "-۳۰٪", label: { fa: "زمان handoff", en: "Handoff time", ar: "وقت التسليم" } },
      { value: "+۲۵٪", label: { fa: "بهره‌وری", en: "Efficiency", ar: "الكفاءة" } },
      { value: "۵+", label: { fa: "محصول یکپارچه", en: "Unified products", ar: "منتجات موحدة" } },
      { value: "۱", label: { fa: "زبان طراحی مشترک", en: "Shared design language", ar: "لغة تصميم مشتركة" } },
    ],
    color: "from-indigo-500/20 to-blue-500/20",
    accent: "#6366F1",
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
  const cs = caseData[slug];

  // اگه case study پیدا نشد
  if (!cs) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-black mb-6">
              {validLocale === "fa"
                ? "مطالعه موردی یافت نشد"
                : validLocale === "ar"
                ? "دراسة الحالة غير موجودة"
                : "Case study not found"}
            </h1>
            <Button href={`/${validLocale}/case-studies`}>
              {t.backToAll}
            </Button>
          </div>
        </Container>
      </main>
    );
  }

  // case study بعدی
  const slugs = Object.keys(caseData);
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextCase = caseData[nextSlug];

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
              {cs.subtitle[validLocale]}
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
              <div className="font-bold text-sm">{cs.role[validLocale]}</div>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                {t.duration}
              </div>
              <div className="font-bold">{cs.duration[validLocale]}</div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Cover */}
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
      <section className="py-20 bg-[var(--color-bg-alt)] [--section-card-bg:var(--color-bg)] [--section-card-bg-hover:var(--color-bg)] [--section-card-border:var(--color-border)]">
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
                {cs.challenge[validLocale]}
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
                {cs.solution[validLocale]}
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
                {cs.result[validLocale]}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Results Grid */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
            {t.results}
          </h2>
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
                  {r.label[validLocale]}
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
                "{cs.testimonial.quote[validLocale]}"
              </p>
              <div>
                <div className="font-bold">{cs.testimonial.name}</div>
                <div className="text-sm text-white/50">
                  {cs.testimonial.role[validLocale]}
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Next Case */}
      {nextCase && (
        <section className="py-20 bg-[var(--color-bg-alt)]">
          <Container>
            <Link
              href={`/${validLocale}/case-studies/${nextSlug}`}
              className="group block max-w-4xl mx-auto"
              data-cursor="view"
              data-cursor-label={t.viewCase}
            >
              <div className="text-sm text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
                {t.nextCase}
              </div>
              <div className="flex items-center justify-between gap-6">
                <h3 className="text-3xl md:text-5xl font-black group-hover:text-[var(--color-primary)] transition-colors">
                  {nextCase.title}
                </h3>
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-[var(--color-primary)] group-hover:translate-x-2 transition-transform shrink-0"
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
              </div>
            </Link>
          </Container>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}