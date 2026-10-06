import { NextResponse } from "next/server";
import { getPost } from "@/lib/content";

export const revalidate = 60;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to load post" },
      { status: 500 }
    );
  }
}