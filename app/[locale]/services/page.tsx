import { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "خدمات",
  description:
    "خدمات آژانس دونات دیزاین — طراحی محصول، دیزاین سیستم، پژوهش کاربر، مشاوره طراحی",
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServicesPage locale={locale} />;
}