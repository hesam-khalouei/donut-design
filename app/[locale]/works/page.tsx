import { Metadata } from "next";
import WorksPage from "@/components/pages/WorksPage";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "پروژه‌های طراحی محصولات دیجیتال آژانس دونات دیزاین",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <WorksPage locale={locale} />;
}