import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "صفحه پیدا نشد | Donut Design",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* گرادینت تزئینی */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary)] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* عدد 404 بزرگ */}
          <h1
            className="text-[120px] md:text-[200px] font-black leading-none bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent mb-4"
            style={{ letterSpacing: "-0.05em" }}
          >
            404
          </h1>

          {/* دونات */}
          <div className="relative w-16 h-16 mx-auto mb-8">
            <div className="w-16 h-16 rounded-full border-[8px] border-[var(--color-primary)] animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[var(--color-bg)]" />
            </div>
          </div>

          {/* متن */}
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            صفحه‌ای که دنبالش بودی، پیدا نشد
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed">
            احتمالاً لینک اشتباهه، یا صفحه منتقل شده. ولی نگران نباش — می‌تونیم
            برگردیم به مسیر درست.
          </p>

          {/* دکمه‌ها */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" href="/fa">
              بازگشت به خانه
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button variant="outline" size="lg" href="/fa/works">
              مشاهده نمونه‌کارها
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}