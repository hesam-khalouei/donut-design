"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";

const translations = {
  fa: {
    tagline: "تجربه‌های دیجیتال، با طعم متفاوت",
    quickLinks: "دسترسی سریع",
    services: "خدمات",
    contact: "تماس",
    rights: "همه حقوق محفوظ است",
    links: {
      home: "خانه",
      about: "درباره ما",
      works: "نمونه‌کارها",
      blog: "بلاگ",
      contact: "تماس با ما",
    },
    servicesList: {
      product: "طراحی محصول",
      system: "دیزاین سیستم",
      research: "پژوهش کاربر",
      consulting: "مشاوره طراحی",
    },
    contactInfo: {
      email: "hesam.khalouei8@gmail.com",
      phone: "+98 938 262 5211",
      location: "تهران، ایران",
    },
  },
  en: {
    tagline: "Digital experiences, with a different taste",
    quickLinks: "Quick Links",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved",
    links: {
      home: "Home",
      about: "About",
      works: "Work",
      blog: "Blog",
      contact: "Contact",
    },
    servicesList: {
      product: "Product Design",
      system: "Design Systems",
      research: "User Research",
      consulting: "Design Consulting",
    },
    contactInfo: {
      email: "hesam.khalouei8@gmail.com",
      phone: "+98 938 262 5211",
      location: "Tehran, Iran",
    },
  },
  ar: {
    tagline: "تجارب رقمية، بمذاق مختلف",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    contact: "اتصل بنا",
    rights: "جميع الحقوق محفوظة",
    links: {
      home: "الرئيسية",
      about: "من نحن",
      works: "أعمالنا",
      blog: "المدونة",
      contact: "اتصل بنا",
    },
    servicesList: {
      product: "تصميم المنتج",
      system: "أنظمة التصميم",
      research: "أبحاث المستخدم",
      consulting: "استشارات التصميم",
    },
    contactInfo: {
      email: "hesam.khalouei8@gmail.com",
      phone: "+98 938 262 5211",
      location: "طهران، إيران",
    },
  },
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hesam_khalouei",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/hesam_khalouei",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.757-1.406c1.354 1.748 2.555 3.548 3.592 5.387-2.523.673-5.376.784-8.556.331.586-2.594 2.467-4.75 4.964-5.718zm-5.286 7.331c3.488.564 6.662.422 9.493-.424.211.42.408.84.585 1.26-3.09 1.02-5.499 3.077-7.205 6.14-1.725-1.568-2.787-3.826-2.873-6.976zm4.882 8.325c1.476-2.837 3.562-4.69 6.276-5.548.854 2.22 1.397 4.585 1.646 7.088-1.054.464-2.222.717-3.451.717-1.605 0-3.146-.398-4.471-1.257zm9.678-.099c-.244-2.31-.753-4.492-1.531-6.546 1.938-.31 4.059-.24 6.387.181-.539 2.588-2.146 4.79-4.856 6.365z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/hesam-khalouei",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";
  const t = translations[locale];

  const quickLinks = [
    { href: `/${locale}`, label: t.links.home },
    { href: `/${locale}/about`, label: t.links.about },
    { href: `/${locale}/works`, label: t.links.works },
    { href: `/${locale}/blog`, label: t.links.blog },
    { href: `/${locale}/contact`, label: t.links.contact },
  ];

  const servicesList = [
    { href: `/${locale}/services`, label: t.servicesList.product },
    { href: `/${locale}/services`, label: t.servicesList.system },
    { href: `/${locale}/services`, label: t.servicesList.research },
    { href: `/${locale}/services`, label: t.servicesList.consulting },
  ];

  return (
    <footer className="bg-[var(--color-bg-dark)] text-white relative overflow-hidden">
      {/* گرادینت تزئینی */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="relative py-16 md:py-20">
          {/* بخش بالا */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* برند */}
            <div className="lg:col-span-1">
              <Link
                href={`/${locale}`}
                className="text-2xl font-black inline-block mb-4"
              >
                Donut<span className="text-[var(--color-primary)]">.</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {t.tagline}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* لینک‌های سریع */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">
                {t.quickLinks}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[var(--color-primary)] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* خدمات */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">
                {t.services}
              </h3>
              <ul className="space-y-3">
                {servicesList.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      href={service.href}
                      className="text-white/70 hover:text-[var(--color-primary)] transition-colors text-sm"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* تماس */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-5">
                {t.contact}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${t.contactInfo.email}`}
                    className="text-white/70 hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t.contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${t.contactInfo.phone}`}
                    className="text-white/70 hover:text-[var(--color-primary)] transition-colors"
                    dir="ltr"
                  >
                    {t.contactInfo.phone}
                  </a>
                </li>
                <li className="text-white/70">{t.contactInfo.location}</li>
              </ul>
            </div>
          </div>

          {/* خط جداکننده */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Donut Design. {t.rights}
            </p>
            <p className="text-white/40 text-xs">
              Designed & built with <span className="text-[var(--color-primary)]">♥</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}