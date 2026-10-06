import type { Metadata } from "next";
import { Poppins, DM_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// ---------- فونت فارسی: IRANYekanX ----------
const iranYekanX = localFont({
  src: [
    { path: "../public/fonts/IRANYekanXFaNum-Thin.woff2", weight: "100", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-UltraLight.woff2", weight: "200", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-DemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-Black.woff2", weight: "900", style: "normal" },
    { path: "../public/fonts/IRANYekanXFaNum-ExtraBlack.woff2", weight: "950", style: "normal" },
  ],
  variable: "--font-iranyekanx",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Donut Design | طراحی محصولات دیجیتال",
    template: "%s | Donut Design",
  },
  description:
    "آژانس طراحی محصولات دیجیتال — تجربه‌های دیجیتال، با طعم متفاوت",
  metadataBase: new URL("https://donutdesign.ir"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${iranYekanX.variable} ${poppins.variable} ${dmSans.variable} ${ibmPlexArabic.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}