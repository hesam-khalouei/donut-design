import { ReactNode } from "react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const locales = ["fa", "en", "ar"] as const;
type Locale = (typeof locales)[number];

const dirMap: Record<Locale, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
  ar: "rtl",
};

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "fa";

  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <div
        lang={validLocale}
        dir={dirMap[validLocale]}
        data-locale={validLocale}
        className="min-h-screen flex flex-col"
      >
        <SmoothScroll>
          <Header />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </div>
    </ThemeProvider>
  );
}