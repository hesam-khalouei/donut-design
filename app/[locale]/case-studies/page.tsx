import { Metadata } from "next";
import CaseStudiesPage from "@/components/pages/CaseStudiesPage";

export const metadata: Metadata = {
  title: "مطالعات موردی",
  description: "روایت کامل پروژه‌های آژانس دونات دیزاین",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CaseStudiesPage locale={locale} />;
}