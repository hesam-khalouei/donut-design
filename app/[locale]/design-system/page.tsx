import { Metadata } from "next";
import DesignSystemPage from "@/components/pages/DesignSystemPage";

export const metadata: Metadata = {
  title: "Design System",
  description: "Donut Design System — Components Library",
  robots: { index: false, follow: false },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <DesignSystemPage locale={locale} />;
}