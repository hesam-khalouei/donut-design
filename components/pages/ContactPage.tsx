"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const translations = {
  fa: {
    label: "تماس",
    title: "بیا حرف بزنیم",
    description:
      "یه ایده داری؟ یه پروژه داری؟ یا فقط می‌خوای سلام کنی؟ خوشحال می‌شیم بشنویم.",
    formTitle: "پیام بفرست",
    name: "نام",
    namePlaceholder: "نام شما",
    email: "ایمیل",
    emailPlaceholder: "you@example.com",
    subject: "موضوع",
    subjectPlaceholder: "درباره چی می‌خوای حرف بزنی؟",
    message: "پیام",
    messagePlaceholder: "پیامت رو بنویس...",
    send: "ارسال پیام",
    sending: "در حال ارسال...",
    success: "پیامت دریافت شد! به زودی باهات تماس می‌گیریم.",
    contactInfo: "راه‌های تماس",
    emailLabel: "ایمیل",
    phoneLabel: "تلفن",
    locationLabel: "موقعیت",
    location: "تهران، ایران",
    social: "شبکه‌های اجتماعی",
  },
  en: {
    label: "Contact",
    title: "Let's talk",
    description:
      "Got an idea? Got a project? Or just want to say hi? We'd love to hear from you.",
    formTitle: "Send a message",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    subject: "Subject",
    subjectPlaceholder: "What do you want to talk about?",
    message: "Message",
    messagePlaceholder: "Write your message...",
    send: "Send message",
    sending: "Sending...",
    success: "Message received! We'll get back to you soon.",
    contactInfo: "Contact info",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    location: "Tehran, Iran",
    social: "Social",
  },
  ar: {
    label: "اتصل بنا",
    title: "لنتحدث",
    description:
      "هل لديك فكرة؟ هل لديك مشروع؟ أو تريد فقط أن تقول مرحبًا؟ يسعدنا أن نسمع منك.",
    formTitle: "أرسل رسالة",
    name: "الاسم",
    namePlaceholder: "اسمك",
    email: "البريد الإلكتروني",
    emailPlaceholder: "you@example.com",
    subject: "الموضوع",
    subjectPlaceholder: "عن ماذا تريد أن تتحدث؟",
    message: "الرسالة",
    messagePlaceholder: "اكتب رسالتك...",
    send: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    success: "تم استلام رسالتك! سنتواصل معك قريبًا.",
    contactInfo: "معلومات الاتصال",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "الهاتف",
    locationLabel: "الموقع",
    location: "طهران، إيران",
    social: "وسائل التواصل",
  },
};

export default function ContactPage({ locale }: { locale: string }) {
  const validLocale = ["fa", "en", "ar"].includes(locale)
    ? (locale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[validLocale];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // ⚠️ فعلاً فقط console.log — بعداً به API وصل می‌شه
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="p-8 md:p-10 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
                <h2 className="text-2xl font-bold mb-8">{t.formTitle}</h2>

                {status === "success" ? (
                  <div className="p-6 rounded-[var(--radius-md)] bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <p className="font-medium">{t.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.name}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder={t.namePlaceholder}
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--section-card-bg)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t.email}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder={t.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--section-card-bg)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.subject}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder={t.subjectPlaceholder}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--section-card-bg)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.message}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder={t.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--section-card-bg)] border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "sending"}
                      className="w-full md:w-auto"
                    >
                      {status === "sending" ? t.sending : t.send}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-5">
                  {t.contactInfo}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-1">
                      {t.emailLabel}
                    </div>
                    <a
                      href="mailto:hesam.khalouei8@gmail.com"
                      className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
                    >
                      hesam.khalouei8@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-1">
                      {t.phoneLabel}
                    </div>
                    <a
                      href="tel:+989382625211"
                      className="text-sm font-medium hover:text-[var(--color-primary)] transition-colors"
                      dir="ltr"
                    >
                      +98 938 262 5211
                    </a>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-muted)] mb-1">
                      {t.locationLabel}
                    </div>
                    <div className="text-sm font-medium">{t.location}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-alt)] border border-[var(--color-border)]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-5">
                  {t.social}
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/hesam_khalouei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://dribbble.com/hesam_khalouei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
                    aria-label="Dribbble"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.757-1.406c1.354 1.748 2.555 3.548 3.592 5.387-2.523.673-5.376.784-8.556.331.586-2.594 2.467-4.75 4.964-5.718zm-5.286 7.331c3.488.564 6.662.422 9.493-.424.211.42.408.84.585 1.26-3.09 1.02-5.499 3.077-7.205 6.14-1.725-1.568-2.787-3.826-2.873-6.976zm4.882 8.325c1.476-2.837 3.562-4.69 6.276-5.548.854 2.22 1.397 4.585 1.646 7.088-1.054.464-2.222.717-3.451.717-1.605 0-3.146-.398-4.471-1.257zm9.678-.099c-.244-2.31-.753-4.492-1.531-6.546 1.938-.31 4.059-.24 6.387.181-.539 2.588-2.146 4.79-4.856 6.365z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/hesam-khalouei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}