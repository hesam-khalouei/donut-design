import { Metadata } from "next";
import FAQPage from "@/components/pages/FAQPage";

export const metadata: Metadata = {
  title: "سوالات متداول",
  description: "پاسخ به سوالات رایج درباره خدمات دونات دیزاین",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FAQPage locale={locale} />;
}