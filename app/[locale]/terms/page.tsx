import { Metadata } from "next";
import TermsPage from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: "شرایط استفاده از خدمات دونات دیزاین",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TermsPage locale={locale} />;
}