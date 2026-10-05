import { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره آژانس طراحی محصولات دیجیتال دونات دیزاین",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutPage locale={locale} />;
}