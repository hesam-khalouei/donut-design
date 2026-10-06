"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const translations = {
  fa: {
    label: "حقوقی",
    title: "سیاست حفظ حریم خصوصی",
    lastUpdated: "آخرین به‌روزرسانی",
    lastUpdatedDate: "آبان ۱۴۰۴",
    sections: [
      {
        title: "۱. مقدمه",
        content:
          "دونات دیزاین به حفظ حریم خصوصی کاربران و مشتریان خود متعهد است. این سند توضیح می‌دهد که چه اطلاعاتی جمع‌آوری می‌کنیم، چگونه از آن‌ها استفاده می‌کنیم، و شما چه حقوقی نسبت به آن‌ها دارید. با استفاده از سایت donutdesign.ir، شما با این سیاست موافقت می‌کنید.",
      },
      {
        title: "۲. اطلاعاتی که جمع‌آوری می‌کنیم",
        content:
          "ما ممکن است اطلاعات زیر را جمع‌آوری کنیم: (الف) اطلاعاتی که خودتان ارائه می‌دهید — مثل نام، ایمیل، شماره تماس، و پیام‌هایی که از طریق فرم تماس ارسال می‌کنید. (ب) اطلاعات فنی خودکار — مثل آدرس IP، نوع مرورگر، سیستم‌عامل، و صفحاتی که بازدید می‌کنید. (ج) کوکی‌ها — برای بهبود تجربه کاربری و تحلیل بازدیدها.",
      },
      {
        title: "۳. چگونه از اطلاعات استفاده می‌کنیم",
        content:
          "اطلاعات جمع‌آوری‌شده برای موارد زیر استفاده می‌شود: (الف) پاسخ به پیام‌ها و درخواست‌های شما. (ب) ارائه خدمات طراحی و مشاوره. (ج) بهبود محتوا و تجربه کاربری سایت. (د) ارسال اطلاع‌رسانی‌های مرتبط با خدمات (تنها در صورتی که شما موافقت کرده باشید). (ه) رعایت الزامات قانونی.",
      },
      {
        title: "۴. اشتراک‌گذاری اطلاعات",
        content:
          "ما اطلاعات شما را به هیچ شخص ثالثی نمی‌فروشیم. اطلاعات تنها در موارد زیر ممکن است به اشتراک گذاشته شود: (الف) با ارائه‌دهندگان خدمات فنی — مثل سرویس ایمیل یا هاست — تنها به میزان لازم برای ارائه خدمات. (ب) در صورت الزام قانونی — مثل حکم قضایی یا درخواست رسمی مراجع قانونی.",
      },
      {
        title: "۵. امنیت اطلاعات",
        content:
          "ما از اقدامات امنیتی مناسب — مثل رمزنگاری SSL، محدودیت دسترسی، و پشتیبان‌گیری منظم — برای محافظت از اطلاعات شما استفاده می‌کنیم. با این حال، هیچ روش انتقال داده از طریق اینترنت ۱۰۰٪ ایمن نیست و ما نمی‌توانیم امنیت مطلق را تضمین کنیم.",
      },
      {
        title: "۶. کوکی‌ها",
        content:
          "سایت ما از کوکی‌ها برای موارد زیر استفاده می‌کند: (الف) کوکی‌های ضروری — برای عملکرد پایه سایت. (ب) کوکی‌های تحلیلی — برای درک نحوه استفاده کاربران از سایت. (ج) کوکی‌های ترجیحات — برای ذخیره تنظیمات شما مثل زبان و تم. شما می‌توانید کوکی‌ها را در تنظیمات مرورگر خود مدیریت کنید.",
      },
      {
        title: "۷. حقوق شما",
        content:
          "شما حق دارید: (الف) به اطلاعات خود دسترسی داشته باشید. (ب) درخواست اصلاح یا حذف اطلاعات کنید. (ج) پردازش اطلاعات خود را محدود کنید. (د) به پردازش اطلاعات اعتراض کنید. (ه) اطلاعات خود را در قالب قابل انتقال دریافت کنید. برای اعمال این حقوق، از طریق info@donutdesign.ir با ما تماس بگیرید.",
      },
      {
        title: "۸. نگهداری اطلاعات",
        content:
          "ما اطلاعات شما را تنها تا زمانی که برای اهداف ذکرشده در این سند ضروری است نگه می‌داریم. اطلاعات تماس معمولاً تا ۳ سال پس از آخرین ارتباط نگهداری می‌شود. اطلاعات تحلیلی ممکن است تا ۲۶ ماه نگهداری شود.",
      },
      {
        title: "۹. تغییرات در این سیاست",
        content:
          "ما ممکن است این سیاست را در زمان‌های مختلف به‌روزرسانی کنیم. تغییرات مهم از طریق ایمیل یا اعلان در سایت اطلاع‌رسانی می‌شود. ادامه استفاده از سایت پس از تغییرات، به معنای پذیرش سیاست جدید است.",
      },
      {
        title: "۱۰. تماس با ما",
        content:
          "اگر سوال یا نگرانی درباره این سیاست دارید، از طریق ایمیل hesam.khalouei8@gmail.com یا تلفن +98 938 262 5211 با ما در تماس باشید.",
      },
    ],
  },
  en: {
    label: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last updated",
    lastUpdatedDate: "November 2025",
    sections: [
      {
        title: "1. Introduction",
        content:
          "Donut Design is committed to protecting the privacy of our users and clients. This document explains what information we collect, how we use it, and what rights you have regarding it. By using donutdesign.ir, you agree to this policy.",
      },
      {
        title: "2. Information we collect",
        content:
          "We may collect the following information: (a) Information you provide — such as name, email, phone number, and messages sent through the contact form. (b) Automatic technical information — such as IP address, browser type, operating system, and pages visited. (c) Cookies — to improve user experience and analyze traffic.",
      },
      {
        title: "3. How we use information",
        content:
          "Collected information is used for: (a) Responding to your messages and requests. (b) Providing design and consulting services. (c) Improving site content and user experience. (d) Sending service-related notifications (only with your consent). (e) Complying with legal requirements.",
      },
      {
        title: "4. Information sharing",
        content:
          "We do not sell your information to any third party. Information may be shared only in the following cases: (a) With technical service providers — such as email or hosting services — only as needed to provide services. (b) When legally required — such as a court order or official legal request.",
      },
      {
        title: "5. Information security",
        content:
          "We use appropriate security measures — such as SSL encryption, access restrictions, and regular backups — to protect your information. However, no method of data transmission over the internet is 100% secure and we cannot guarantee absolute security.",
      },
      {
        title: "6. Cookies",
        content:
          "Our site uses cookies for: (a) Essential cookies — for basic site functionality. (b) Analytical cookies — to understand how users use the site. (c) Preference cookies — to store your settings like language and theme. You can manage cookies in your browser settings.",
      },
      {
        title: "7. Your rights",
        content:
          "You have the right to: (a) Access your information. (b) Request correction or deletion of information. (c) Restrict processing of your information. (d) Object to processing. (e) Receive your information in a transferable format. To exercise these rights, contact us at info@donutdesign.ir.",
      },
      {
        title: "8. Data retention",
        content:
          "We retain your information only as long as necessary for the purposes stated in this document. Contact information is typically retained for 3 years after the last interaction. Analytical data may be retained for up to 26 months.",
      },
      {
        title: "9. Changes to this policy",
        content:
          "We may update this policy from time to time. Significant changes will be communicated via email or site notification. Continued use of the site after changes means acceptance of the new policy.",
      },
      {
        title: "10. Contact us",
        content:
          "If you have questions or concerns about this policy, contact us at hesam.khalouei8@gmail.com or +98 938 262 5211.",
      },
    ],
  },
  ar: {
    label: "قانوني",
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث",
    lastUpdatedDate: "نوفمبر 2025",
    sections: [
      {
        title: "١. مقدمة",
        content:
          "تلتزم دونات ديزاين بحماية خصوصية مستخدمينا وعملائنا. توضح هذه الوثيقة المعلومات التي نجمعها وكيفية استخدامها والحقوق التي لديك بشأنها. باستخدامك donutdesign.ir فإنك توافق على هذه السياسة.",
      },
      {
        title: "٢. المعلومات التي نجمعها",
        content:
          "قد نجمع المعلومات التالية: (أ) المعلومات التي تقدمها — مثل الاسم والبريد الإلكتروني ورقم الهاتف والرسائل المرسلة عبر نموذج الاتصال. (ب) المعلومات التقنية التلقائية — مثل عنوان IP ونوع المتصفح ونظام التشغيل والصفحات التي تمت زيارتها. (ج) ملفات تعريف الارتباط — لتحسين تجربة المستخدم وتحليل الزيارات.",
      },
      {
        title: "٣. كيف نستخدم المعلومات",
        content:
          "تُستخدم المعلومات المجمعة من أجل: (أ) الرد على رسائلك وطلباتك. (ب) تقديم خدمات التصميم والاستشارات. (ج) تحسين محتوى الموقع وتجربة المستخدم. (د) إرسال الإشعارات المتعلقة بالخدمة (فقط بموافقتك). (هـ) الامتثال للمتطلبات القانونية.",
      },
      {
        title: "٤. مشاركة المعلومات",
        content:
          "نحن لا نبيع معلوماتك لأي طرف ثالث. قد تتم مشاركة المعلومات فقط في الحالات التالية: (أ) مع مزودي الخدمات التقنية — مثل خدمات البريد الإلكتروني أو الاستضافة — فقط بالقدر اللازم لتقديم الخدمات. (ب) عند الاقتضاء القانوني — مثل أمر قضائي أو طلب قانوني رسمي.",
      },
      {
        title: "٥. أمن المعلومات",
        content:
          "نستخدم تدابير أمنية مناسبة — مثل تشفير SSL وقيود الوصول والنسخ الاحتياطي المنتظم — لحماية معلوماتك. ومع ذلك، لا توجد طريقة نقل بيانات عبر الإنترنت آمنة بنسبة 100% ولا يمكننا ضمان الأمان المطلق.",
      },
      {
        title: "٦. ملفات تعريف الارتباط",
        content:
          "يستخدم موقعنا ملفات تعريف الارتباط من أجل: (أ) ملفات ضرورية — لوظائف الموقع الأساسية. (ب) ملفات تحليلية — لفهم كيفية استخدام المستخدمين للموقع. (ج) ملفات التفضيلات — لتخزين إعداداتك مثل اللغة والسمة. يمكنك إدارة ملفات تعريف الارتباط في إعدادات المتصفح.",
      },
      {
        title: "٧. حقوقك",
        content:
          "لديك الحق في: (أ) الوصول إلى معلوماتك. (ب) طلب تصحيح أو حذف المعلومات. (ج) تقييد معالجة معلوماتك. (د) الاعتراض على المعالجة. (هـ) تلقي معلوماتك بصيغة قابلة للنقل. لممارسة هذه الحقوق، اتصل بنا على info@donutdesign.ir.",
      },
      {
        title: "٨. الاحتفاظ بالبيانات",
        content:
          "نحتفظ بمعلوماتك فقط طالما كان ذلك ضروريًا للأغراض المذكورة في هذه الوثيقة. عادةً ما يتم الاحتفاظ بمعلومات الاتصال لمدة 3 سنوات بعد آخر تفاعل. قد يتم الاحتفاظ بالبيانات التحليلية لمدة تصل إلى 26 شهرًا.",
      },
      {
        title: "٩. التغييرات في هذه السياسة",
        content:
          "قد نحدّث هذه السياسة من وقت لآخر. سيتم إبلاغ التغييرات المهمة عبر البريد الإلكتروني أو إشعار على الموقع. استمرار استخدام الموقع بعد التغييرات يعني قبول السياسة الجديدة.",
      },
      {
        title: "١٠. اتصل بنا",
        content:
          "إذا كانت لديك أسئلة أو مخاوف بشأن هذه السياسة، اتصل بنا على hesam.khalouei8@gmail.com أو +98 938 262 5211.",
      },
    ],
  },
};

export default function PrivacyPage({ locale }: { locale: string }) {
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