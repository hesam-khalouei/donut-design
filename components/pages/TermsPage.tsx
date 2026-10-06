"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const translations = {
  fa: {
    label: "حقوقی",
    title: "شرایط استفاده",
    lastUpdated: "آخرین به‌روزرسانی",
    lastUpdatedDate: "آبان ۱۴۰۴",
    sections: [
      {
        title: "۱. پذیرش شرایط",
        content:
          "با دسترسی به سایت donutdesign.ir و استفاده از خدمات ما، شما این شرایط را می‌پذیرید. اگر با هر بخشی از این شرایط موافق نیستید، لطفاً از سایت استفاده نکنید.",
      },
      {
        title: "۲. خدمات ما",
        content:
          "دونات دیزاین خدمات طراحی محصول، دیزاین سیستم، پژوهش کاربر، بهینه‌سازی UX، process mining و مشاوره محصول ارائه می‌دهد. جزئیات هر خدمت، زمان‌بندی و هزینه‌ها در قرارداد جداگانه‌ای مشخص می‌شود.",
      },
      {
        title: "۳. مالکیت فکری",
        content:
          "تمام محتوای سایت — شامل متن، تصاویر، لوگو، طراحی و کد — متعلق به دونات دیزاین است و تحت قوانین کپی‌رایت محافظت می‌شود. استفاده تجاری از محتوا بدون اجازه کتبی ممنوع است.",
      },
      {
        title: "۴. مالکیت پروژه‌ها",
        content:
          "پس از پرداخت کامل هزینه پروژه، مالکیت فایل‌های طراحی نهایی به مشتری منتقل می‌شود. دونات دیزاین حق نمایش پروژه در نمونه‌کارها را — مگر با توافق مخالف — حفظ می‌کند.",
      },
      {
        title: "۵. تعهدات مشتری",
        content:
          "مشتری متعهد است: (الف) اطلاعات دقیق و کامل ارائه دهد. (ب) بازخورد به‌موقع بدهد. (ج) هزینه‌های توافق‌شده را پرداخت کند. (د) از محتوای ارائه‌شده به‌صورت قانونی استفاده کند.",
      },
      {
        title: "۶. محدودیت مسئولیت",
        content:
          "دونات دیزاین مسئول خسارات غیرمستقیم، اتفاقی، یا تبعی — شامل از دست رفتن سود، داده، یا فرصت‌های تجاری — نیست. حداکثر مسئولیت ما معادل هزینه پرداختی برای پروژه مربوطه است.",
      },
      {
        title: "۷. فسخ قرارداد",
        content:
          "هر طرف می‌تواند قرارداد را با اطلاع کتبی ۱۴ روزه فسخ کند. در صورت فسخ، مشتری موظف به پرداخت هزینه کارهای انجام‌شده تا آن تاریخ است. فایل‌های طراحی تا زمان تسویه کامل تحویل داده نمی‌شود.",
      },
      {
        title: "۸. محرمانگی",
        content:
          "هر دو طرف متعهد به حفظ محرمانگی اطلاعات حساس — شامل داده‌های تجاری، فنی، و مالی — هستند. این تعهد پس از پایان همکاری نیز ادامه دارد.",
      },
      {
        title: "۹. قانون حاکم",
        content:
          "این شرایط تحت قوانین جمهوری اسلامی ایران تفسیر می‌شود. هر اختلاف از طریق مذاکره حل می‌شود و در صورت نیاز، به مراجع قانونی تهران ارجاع داده می‌شود.",
      },
      {
        title: "۱۰. تماس",
        content:
          "برای هر سوال درباره این شرایط، از طریق ایمیل hesam.khalouei8@gmail.com یا تلفن +98 938 262 5211 با ما در تماس باشید.",
      },
    ],
  },
  en: {
    label: "Legal",
    title: "Terms of Service",
    lastUpdated: "Last updated",
    lastUpdatedDate: "November 2025",
    sections: [
      {
        title: "1. Acceptance of terms",
        content:
          "By accessing donutdesign.ir and using our services, you accept these terms. If you disagree with any part, please do not use the site.",
      },
      {
        title: "2. Our services",
        content:
          "Donut Design provides product design, design systems, user research, UX optimization, process mining, and product advisory. Details of each service, timeline, and costs are specified in a separate agreement.",
      },
      {
        title: "3. Intellectual property",
        content:
          "All site content — including text, images, logo, design, and code — belongs to Donut Design and is protected by copyright laws. Commercial use of content without written permission is prohibited.",
      },
      {
        title: "4. Project ownership",
        content:
          "After full payment of project costs, ownership of final design files transfers to the client. Donut Design retains the right to display projects in portfolios — unless otherwise agreed.",
      },
      {
        title: "5. Client obligations",
        content:
          "The client agrees to: (a) Provide accurate and complete information. (b) Give timely feedback. (c) Pay agreed costs. (d) Use provided content legally.",
      },
      {
        title: "6. Limitation of liability",
        content:
          "Donut Design is not liable for indirect, incidental, or consequential damages — including loss of profit, data, or business opportunities. Our maximum liability equals the amount paid for the relevant project.",
      },
      {
        title: "7. Termination",
        content:
          "Either party may terminate the agreement with 14 days written notice. Upon termination, the client must pay for work completed up to that date. Design files are not delivered until full settlement.",
      },
      {
        title: "8. Confidentiality",
        content:
          "Both parties agree to maintain confidentiality of sensitive information — including business, technical, and financial data. This obligation continues after collaboration ends.",
      },
      {
        title: "9. Governing law",
        content:
          "These terms are interpreted under the laws of the Islamic Republic of Iran. Disputes are resolved through negotiation and, if needed, referred to Tehran legal authorities.",
      },
      {
        title: "10. Contact",
        content:
          "For any questions about these terms, contact us at hesam.khalouei8@gmail.com or +98 938 262 5211.",
      },
    ],
  },
  ar: {
    label: "قانوني",
    title: "شروط الاستخدام",
    lastUpdated: "آخر تحديث",
    lastUpdatedDate: "نوفمبر 2025",
    sections: [
      {
        title: "١. قبول الشروط",
        content:
          "بالوصول إلى donutdesign.ir واستخدام خدماتنا، فإنك تقبل هذه الشروط. إذا كنت لا توافق على أي جزء، فيرجى عدم استخدام الموقع.",
      },
      {
        title: "٢. خدماتنا",
        content:
          "تقدم دونات ديزاين تصميم المنتج وأنظمة التصميم وأبحاث المستخدم وتحسين تجربة المستخدم و process mining واستشارات المنتج. يتم تحديد تفاصيل كل خدمة والجدول الزمني والتكاليف في اتفاقية منفصلة.",
      },
      {
        title: "٣. الملكية الفكرية",
        content:
          "جميع محتويات الموقع — بما في ذلك النصوص والصور والشعار والتصميم والكود — مملوكة لدونات ديزاين ومحمية بموجب قوانين حقوق النشر. يُحظر الاستخدام التجاري للمحتوى دون إذن كتابي.",
      },
      {
        title: "٤. ملكية المشاريع",
        content:
          "بعد الدفع الكامل لتكاليف المشروع، تنتقل ملكية ملفات التصميم النهائية إلى العميل. تحتفظ دونات ديزاين بالحق في عرض المشاريع في الأعمال — ما لم يتم الاتفاق على خلاف ذلك.",
      },
      {
        title: "٥. التزامات العميل",
        content:
          "يلتزم العميل بـ: (أ) تقديم معلومات دقيقة وكاملة. (ب) تقديم ملاحظات في الوقت المناسب. (ج) دفع التكاليف المتفق عليها. (د) استخدام المحتوى المقدم بشكل قانوني.",
      },
      {
        title: "٦. حدود المسؤولية",
        content:
          "دونات ديزاين غير مسؤولة عن الأضرار غير المباشرة أو العرضية أو التبعية — بما في ذلك فقدان الأرباح أو البيانات أو الفرص التجارية. الحد الأقصى لمسؤوليتنا يساوي المبلغ المدفوع للمشروع المعني.",
      },
      {
        title: "٧. الإنهاء",
        content:
          "يمكن لأي من الطرفين إنهاء الاتفاقية بإشعار كتابي مدته 14 يومًا. عند الإنهاء، يجب على العميل دفع العمل المنجز حتى ذلك التاريخ. لا يتم تسليم ملفات التصميم حتى التسوية الكاملة.",
      },
      {
        title: "٨. السرية",
        content:
          "يتفق الطرفان على الحفاظ على سرية المعلومات الحساسة — بما في ذلك البيانات التجارية والتقنية والمالية. يستمر هذا الالتزام بعد انتهاء التعاون.",
      },
      {
        title: "٩. القانون الحاكم",
        content:
          "يتم تفسير هذه الشروط بموجب قوانين جمهورية إيران الإسلامية. يتم حل النزاعات من خلال المفاوضات، وإذا لزم الأمر، يتم إحالتها إلى السلطات القانونية في طهران.",
      },
      {
        title: "١٠. اتصل",
        content:
          "لأي أسئلة حول هذه الشروط، اتصل بنا على hesam.khalouei8@gmail.com أو +98 938 262 5211.",
      },
    ],
  },
};

export default function TermsPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  return (
    <main>
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-5 blur-[150px] rounded-full pointer-events-none" />

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
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              {t.title}
            </h1>
            <p className="text-sm text-[var(--color-text-muted)]">
              {t.lastUpdated}: {t.lastUpdatedDate}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-10">
            {t.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
              >
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}