"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // استخراج زبان فعلی از URL
  const currentLocale = pathname.split("/")[1] || "fa";
  const currentLang = languages.find((l) => l.code === currentLocale);

  // ساخت مسیر جدید با زبان جدید
  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors text-sm font-medium"
        aria-label="Change language"
      >
        <span>{currentLang?.flag}</span>
        <span className="hidden md:inline">{currentLang?.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <>
          {/* overlay برای بستن با کلیک بیرون */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-full mt-2 left-0 rtl:left-auto rtl:right-0 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-lg overflow-hidden z-20 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left rtl:text-right hover:bg-[var(--color-bg-alt)] transition-colors ${
                  lang.code === currentLocale
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-text)]"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}