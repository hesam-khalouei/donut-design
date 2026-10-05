import { Metadata } from "next";
import CaseStudyDetailPage from "@/components/pages/CaseStudyDetailPage";

export const metadata: Metadata = {
  title: "مطالعه موردی",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <CaseStudyDetailPage locale={locale} slug={slug} />;
}