import CategoryPage from "@/components/pages/CategoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; tag: string }>;
}) {
  const { locale, tag } = await params;
  return <CategoryPage locale={locale} tag={tag} />;
}