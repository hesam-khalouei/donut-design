import { Metadata } from "next";
import BlogPage from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "بلاگ",
  description: "مقالات درباره طراحی محصول، تجربه کاربری و دیزاین سیستم",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BlogPage locale={locale} />;
}