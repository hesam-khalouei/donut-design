import { Metadata } from "next";
import CareersPage from "@/components/pages/CareersPage";

export const metadata: Metadata = {
  title: "فرصت‌های شغلی",
  description: "به تیم دونات دیزاین بپیوند",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CareersPage locale={locale} />;
}