"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { href: "/services", label: { fa: "خدمات", en: "Services", ar: "الخدمات" } },
  { href: "/works", label: { fa: "نمونه‌کارها", en: "Work", ar: "أعمالنا" } },
  {
    href: "/case-studies",
    label: { fa: "مطالعات موردی", en: "Case Studies", ar: "دراسات الحالة" },
  },
  { href: "/about", label: { fa: "درباره ما", en: "About", ar: "من نحن" } },
  { href: "/blog", label: { fa: "بلاگ", en: "Blog", ar: "المدونة" } },
  { href: "/faq", label: { fa: "سوالات", en: "FAQ", ar: "الأسئلة" } },
];

const ctaLabel = {
  fa: "شروع پروژه",
  en: "Start a project",
  ar: "ابدأ مشروعك",
};

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || "fa";
  const locale = ["fa", "en", "ar"].includes(currentLocale)
    ? (currentLocale as "fa" | "en" | "ar")
    : "fa";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-lg border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-xl md:text-2xl font-black tracking-tight shrink-0"
          >
            Donut<span className="text-[var(--color-primary)]">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = pathname.includes(item.href);
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[var(--color-primary)] bg-[var(--color-primary-light)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <div className="hidden md:block">
              <Button href={`/${locale}/contact`} size="sm">
                {ctaLabel[locale]}
              </Button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-[var(--color-bg-alt)] transition-colors"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-5 h-0.5 bg-[var(--color-text)] transition-transform ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-[var(--color-text)] transition-opacity ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-[var(--color-text)] transition-transform ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[var(--color-bg)] border-b border-[var(--color-border)] ${
          mobileOpen ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <Container>
          <nav className="py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="px-4 py-3 rounded-[var(--radius-md)] text-base font-medium hover:bg-[var(--color-bg-alt)] transition-colors"
              >
                {item.label[locale]}
              </Link>
            ))}
            <Link
              href={`/${locale}/careers`}
              className="px-4 py-3 rounded-[var(--radius-md)] text-base font-medium hover:bg-[var(--color-bg-alt)] transition-colors"
            >
              {locale === "fa"
                ? "فرصت‌های شغلی"
                : locale === "ar"
                ? "الوظائف"
                : "Careers"}
            </Link>
            <div className="mt-3">
              <Button href={`/${locale}/contact`} className="w-full">
                {ctaLabel[locale]}
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}