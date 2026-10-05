import { NextRequest, NextResponse } from "next/server";

const locales = ["fa", "en", "ar"];
const defaultLocale = "fa";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // اگه مسیر با یکی از زبان‌ها شروع می‌شه، بذار رد شه
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // در غیر این صورت، ریدایرکت کن به زبان پیش‌فرض
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // همه مسیرها به جز:
    // - api
    // - _next (فایل‌های داخلی Next.js)
    // - فایل‌های استاتیک (عکس، فونت و...)
    "/((?!api|_next/static|_next/image|favicon.ico|fonts|images|.*\\.).*)",
  ],
};