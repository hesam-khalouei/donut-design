import { Metadata } from "next";
import PostDetailPage from "@/components/pages/PostDetailPage";
import { getPostBySlug } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  const validLocale = ["fa", "en", "ar"].includes(locale) ? locale : "fa";

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title[validLocale as "fa" | "en" | "ar"],
    description: post.excerpt[validLocale as "fa" | "en" | "ar"],
    openGraph: {
      title: post.title[validLocale as "fa" | "en" | "ar"],
      description: post.excerpt[validLocale as "fa" | "en" | "ar"],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title[validLocale as "fa" | "en" | "ar"],
      description: post.excerpt[validLocale as "fa" | "en" | "ar"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <PostDetailPage locale={locale} slug={slug} />;
}