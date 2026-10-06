const WP_API_URL =
  process.env.NEXT_PUBLIC_WP_API_URL || "https://donutdesign.ir/wp-json/wp/v2";

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
}

export async function getWPPosts(): Promise<WPPost[] | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=20`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.warn(`WordPress API error: ${res.status}`);
      return null;
    }

    return (await res.json()) as WPPost[];
  } catch (error) {
    console.warn("WordPress fetch failed:", error);
    return null;
  }
}

export async function getWPPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API_URL}/posts?slug=${slug}&_embed&per_page=1`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return null;

    const posts = (await res.json()) as WPPost[];
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.warn("WordPress fetch failed:", error);
    return null;
  }
}

export function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–");
}