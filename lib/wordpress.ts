// ---------- WordPress API Client ----------

const WP_API_URL =
  process.env.NEXT_PUBLIC_WP_API_URL || "https://donutdesign.ir/wp-json/wp/v2";

const REVALIDATE_TIME = 3600; // 1 ساعت

// ---------- Types ----------
export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export interface WPCaseStudy {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  acf?: {
    subtitle?: string;
    client?: string;
    year?: string;
    role?: string;
    duration?: string;
    challenge?: string;
    solution?: string;
    result?: string;
    results?: Array<{ value: string; label: string }>;
    testimonial_quote?: string;
    testimonial_name?: string;
    testimonial_role?: string;
    cover_color?: string;
    cover_accent?: string;
  };
}

// ---------- Fetch Helper ----------
async function wpFetch<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${WP_API_URL}${endpoint}`, {
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!res.ok) {
      console.warn(`WordPress API error: ${res.status} for ${endpoint}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.warn(`WordPress fetch failed for ${endpoint}:`, error);
    return null;
  }
}

// ---------- Posts ----------
export async function getWPPosts(lang?: string): Promise<WPPost[] | null> {
  // اگه Polylang داری، می‌تونی پارامتر lang رو اضافه کنی
  const endpoint = "/posts?_embed&per_page=20";
  return wpFetch<WPPost[]>(endpoint);
}

export async function getWPPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>(
    `/posts?slug=${slug}&_embed&per_page=1`
  );
  return posts && posts.length > 0 ? posts[0] : null;
}

// ---------- Case Studies ----------
export async function getWPCaseStudies(): Promise<WPCaseStudy[] | null> {
  return wpFetch<WPCaseStudy[]>("/case_study?per_page=50");
}

export async function getWPCaseStudyBySlug(
  slug: string
): Promise<WPCaseStudy | null> {
  const items = await wpFetch<WPCaseStudy[]>(
    `/case_study?slug=${slug}&per_page=1`
  );
  return items && items.length > 0 ? items[0] : null;
}

// ---------- Utilities ----------
export function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function decodeHTMLEntities(text: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#039;": "'",
    "&#8217;": "'",
    "&#8211;": "–",
  };
  return text.replace(/&[^;]+;/g, (match) => entities[match] || match);
}