import { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "سیاست حفظ حریم خصوصی",
  description: "سیاست حفظ حریم خصوصی دونات دیزاین",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PrivacyPage locale={locale} />;
}