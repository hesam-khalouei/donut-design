import {
  getWPPosts,
  getWPPostBySlug,
  getWPCaseStudies,
  getWPCaseStudyBySlug,
  stripHTML,
  decodeHTMLEntities,
} from "./wordpress";
import { posts as localPosts, Post as LocalPost, getPostBySlug as getLocalPostBySlug } from "./posts";

// ---------- Unified Post Type ----------
export interface UnifiedPost {
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  category: string;
  tags: string[];
  author: { name: string; initial: string };
  date: string;
  readTime: number;
  coverColor: string;
  coverAccent: string;
}

// ---------- Convert WP Post → Unified ----------
function wpPostToUnified(wpPost: any, locale: string): UnifiedPost {
  return {
    slug: wpPost.slug,
    title: { [locale]: decodeHTMLEntities(wpPost.title.rendered) },
    excerpt: { [locale]: stripHTML(wpPost.excerpt.rendered) },
    content: { [locale]: wpPost.content.rendered },
    category: "design-system",
    tags: [],
    author: { name: "Donut Design", initial: "D" },
    date: wpPost.date,
    readTime: Math.ceil(stripHTML(wpPost.content.rendered).split(" ").length / 200),
    coverColor: "from-blue-500/20 to-cyan-500/20",
    coverAccent: "#3B82F6",
  };
}

// ---------- Get Posts (WP first, then local) ----------
export async function getAllPosts(): Promise<UnifiedPost[]> {
  const wpPosts = await getWPPosts();

  if (wpPosts && wpPosts.length > 0) {
    // اگه وردپرس دیتا داشت، از اون استفاده کن
    return wpPosts.map((p) => wpPostToUnified(p, "fa"));
  }

  // در غیر این صورت، از دیتای محلی استفاده کن
  return localPosts.map((lp) => ({
    ...lp,
    title: lp.title,
    excerpt: lp.excerpt,
    content: lp.content,
  }));
}

export async function getPost(slug: string, locale: string): Promise<UnifiedPost | null> {
  const wpPost = await getWPPostBySlug(slug);

  if (wpPost) {
    return wpPostToUnified(wpPost, locale);
  }

  // Fallback به دیتای محلی
  const localPost = getLocalPostBySlug(slug);
  if (localPost) {
    return {
      ...localPost,
      title: localPost.title,
      excerpt: localPost.excerpt,
      content: localPost.content,
    };
  }

  return null;
}

// ---------- Case Studies ----------
export async function getAllCaseStudies() {
  const wpItems = await getWPCaseStudies();
  if (wpItems && wpItems.length > 0) {
    return wpItems;
  }
  return null;
}

export async function getCaseStudy(slug: string) {
  const wpItem = await getWPCaseStudyBySlug(slug);
  if (wpItem) {
    return wpItem;
  }
  return null;
}