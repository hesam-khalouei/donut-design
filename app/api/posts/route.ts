import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/content";

export const revalidate = 60;

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json([], { status: 500 });
  }
}