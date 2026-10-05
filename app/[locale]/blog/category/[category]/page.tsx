import CategoryPage from "@/components/pages/CategoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  return <CategoryPage locale={locale} category={category} />;
}