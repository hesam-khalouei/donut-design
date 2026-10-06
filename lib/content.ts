import {
  getWPPosts,
  getWPPostBySlug,
  stripHTML,
  decodeHTMLEntities,
  type WPPost,
} from "./wordpress";
import { posts as localPosts, getPostBySlug as getLocalPost } from "./posts";

export interface UnifiedPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; initial: string };
  date: string;
  readTime: number;
  coverColor: string;
  coverAccent: string;
  source: "wordpress" | "local";
}

function calculateReadTime(text: string): number {
  const words = stripHTML(text).split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function wpPostToUnified(wpPost: WPPost): UnifiedPost {
  const title = decodeHTMLEntities(wpPost.title.rendered);
  const content = wpPost.content.rendered;
  const excerpt = stripHTML(decodeHTMLEntities(wpPost.excerpt.rendered));

  // رنگ‌های پیش‌فرض (بعداً از ACF می‌گیریم)
  const colors = [
    { color: "from-blue-500/20 to-cyan-500/20", accent: "#3B82F6" },
    { color: "from-purple-500/20 to-pink-500/20", accent: "#8B5CF6" },
    { color: "from-emerald-500/20 to-teal-500/20", accent: "#10B981" },
    { color: "from-orange-500/20 to-red-500/20", accent: "#FF6B35" },
    { color: "from-indigo-500/20 to-blue-500/20", accent: "#6366F1" },
  ];
  const colorSet = colors[wpPost.id % colors.length];

  return {
    slug: wpPost.slug,
    title,
    excerpt,
    content,
    category: "wordpress",
    tags: [],
    author: { name: "Donut Design", initial: "D" },
    date: wpPost.date,
    readTime: calculateReadTime(content),
    coverColor: colorSet.color,
    coverAccent: colorSet.accent,
    source: "wordpress",
  };
}

export async function getAllPosts(): Promise<UnifiedPost[]> {
  // اول وردپرس
  const wpPosts = await getWPPosts();

  if (wpPosts && wpPosts.length > 0) {
    console.log(`✅ Loaded ${wpPosts.length} posts from WordPress`);
    return wpPosts.map(wpPostToUnified);
  }

  // Fallback: دیتای محلی
  console.log("⚠️ WordPress unavailable, using local posts");
  return localPosts.map((lp) => ({
    slug: lp.slug,
    title: lp.title.fa,
    excerpt: lp.excerpt.fa,
    content: lp.content.fa,
    category: lp.category,
    tags: lp.tags,
    author: lp.author,
    date: lp.date,
    readTime: lp.readTime,
    coverColor: lp.coverColor,
    coverAccent: lp.coverAccent,
    source: "local" as const,
  }));
}

export async function getPost(slug: string): Promise<UnifiedPost | null> {
  // اول وردپرس
  const wpPost = await getWPPostBySlug(slug);

  if (wpPost) {
    return wpPostToUnified(wpPost);
  }

  // Fallback: دیتای محلی
  const localPost = getLocalPost(slug);
  if (localPost) {
    return {
      slug: localPost.slug,
      title: localPost.title.fa,
      excerpt: localPost.excerpt.fa,
      content: localPost.content.fa,
      category: localPost.category,
      tags: localPost.tags,
      author: localPost.author,
      date: localPost.date,
      readTime: localPost.readTime,
      coverColor: localPost.coverColor,
      coverAccent: localPost.coverAccent,
      source: "local" as const,
    };
  }

  return null;
}

import { getWPSections } from "./wordpress";

// ---------- Sections ----------
export async function getPageSections(slug: string): Promise<any[]> {
  const sections = await getWPSections(slug);
  return sections || [];
}