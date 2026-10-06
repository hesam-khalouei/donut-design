"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";
import AnimatedText from "@/components/ui/AnimatedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ScrambleText from "@/components/ui/ScrambleText";
import Timeline from "@/components/ui/Timeline";

// ---------- Section Wrapper ----------
function DSSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 border-t border-[var(--color-border)]">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-black mb-2">{title}</h2>
        {description && (
          <p className="text-[var(--color-text-muted)]">{description}</p>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default function DesignSystemPage({ locale }: { locale: string }) {
  const [loadingBtn, setLoadingBtn] = useState(false);

  return (
    <main className="pt-24">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-xs font-bold uppercase tracking-wider mb-5">
            Design System
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Donut Design System
          </h1>
          <p className="text-lg text-[var(--color-text-muted)]">
            کتابخانه کامپوننت‌ها، توکن‌ها و الگوهای طراحی دونات دیزاین.
          </p>
        </motion.div>

        {/* ============ COLORS ============ */}
        <DSSection
          title="Colors"
          description="پالت رنگ برند — همه از CSS Variables استفاده می‌کنن."
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Primary", var: "--color-primary" },
              { name: "Primary Hover", var: "--color-primary-hover" },
              { name: "Primary Light", var: "--color-primary-light" },
              { name: "Primary Dark", var: "--color-primary-dark" },
              { name: "Background", var: "--color-bg" },
              { name: "BG Alt", var: "--color-bg-alt" },
              { name: "BG Dark", var: "--color-bg-dark" },
              { name: "Text", var: "--color-text" },
              { name: "Text Muted", var: "--color-text-muted" },
              { name: "Border", var: "--color-border" },
              { name: "Success", var: "--color-success" },
              { name: "Error", var: "--color-error" },
            ].map((color) => (
              <div
                key={color.name}
                className="rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]"
              >
                <div
                  className="h-20"
                  style={{ backgroundColor: `var(${color.var})` }}
                />
                <div className="p-3 bg-[var(--color-card-bg)]">
                  <div className="text-xs font-bold truncate">{color.name}</div>
                  <div className="text-[10px] text-[var(--color-text-muted)] font-mono truncate">
                    {color.var}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DSSection>

        {/* ============ TYPOGRAPHY ============ */}
        <DSSection
          title="Typography"
          description="اندازه‌ها، وزن‌ها و فونت‌های سایت."
        >
          <div className="space-y-6">
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 font-mono">
                h1 / text-7xl / font-black
              </div>
              <h1 className="text-4xl md:text-7xl font-black">
                طراحی محصول
              </h1>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 font-mono">
                h2 / text-5xl / font-black
              </div>
              <h2 className="text-3xl md:text-5xl font-black">دیزاین سیستم</h2>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 font-mono">
                h3 / text-3xl / font-bold
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">پژوهش کاربر</h3>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 font-mono">
                body / text-lg
              </div>
              <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
                این یک نمونه متن بدنه است. ما محصولات دیجیتال می‌سازیم که
                کار می‌کنن — با تمرکز بر تجربه کاربری و تصمیم‌های داده‌محور.
              </p>
            </div>
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-2 font-mono">
                small / text-sm
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                این یک متن کوچیک برای توضیحات جانبی است.
              </p>
            </div>
          </div>
        </DSSection>

        {/* ============ BUTTONS ============ */}
        <DSSection
          title="Buttons"
          description="دکمه‌ها در ۳ حالت و ۳ اندازه."
        >
          <div className="space-y-8">
            {/* Variants */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                Variants
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                Sizes
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                States
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  disabled={loadingBtn}
                  onClick={() => {
                    setLoadingBtn(true);
                    setTimeout(() => setLoadingBtn(false), 2000);
                  }}
                >
                  {loadingBtn ? "Loading..." : "Click to load"}
                </Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Magnetic */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                Magnetic Button
              </div>
              <MagneticButton size="lg">Magnetic CTA</MagneticButton>
            </div>
          </div>
        </DSSection>

        {/* ============ CARDS ============ */}
        <DSSection title="Cards" description="کارت‌ها در ۳ اندازه.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card padding="sm">
              <h3 className="font-bold mb-2">Small Padding</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                کارت با padding کم.
              </p>
            </Card>
            <Card padding="md">
              <h3 className="font-bold mb-2">Medium Padding</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                کارت با padding متوسط.
              </p>
            </Card>
            <Card padding="lg">
              <h3 className="font-bold mb-2">Large Padding</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                کارت با padding زیاد.
              </p>
            </Card>
          </div>
        </DSSection>

        {/* ============ ANIMATIONS ============ */}
        <DSSection
          title="Animations"
          description="انیمیشن‌های موجود در دیزاین سیستم."
        >
          <div className="space-y-10">
            {/* AnimatedText */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                AnimatedText (کلمه‌به‌کلمه)
              </div>
              <p className="text-2xl font-bold">
                <AnimatedText>
                  این متن کلمه به کلمه ظاهر می‌شود
                </AnimatedText>
              </p>
            </div>

            {/* ScrambleText */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                ScrambleText (حروف تصادفی)
              </div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">
                <ScrambleText text="Donut Design" duration={2} />
              </p>
            </div>

            {/* ScrollReveal */}
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                ScrollReveal (با اسکرول)
              </div>
              <ScrollReveal>
                <div className="p-6 rounded-[var(--radius-md)] bg-[var(--color-bg-alt)]">
                  این المان با اسکرول ظاهر می‌شود
                </div>
              </ScrollReveal>
            </div>
          </div>
        </DSSection>

        {/* ============ MARQUEE ============ */}
        <DSSection
          title="Marquee"
          description="نوار متحرک افقی."
        >
          <Marquee speed={20}>
            <div className="text-3xl font-black text-[var(--color-text-muted)]">
              طراحی محصول
            </div>
            <div className="text-3xl font-black text-[var(--color-primary)]">
              ✦
            </div>
            <div className="text-3xl font-black text-[var(--color-text-muted)]">
              دیزاین سیستم
            </div>
            <div className="text-3xl font-black text-[var(--color-primary)]">
              ✦
            </div>
            <div className="text-3xl font-black text-[var(--color-text-muted)]">
              پژوهش کاربر
            </div>
            <div className="text-3xl font-black text-[var(--color-primary)]">
              ✦
            </div>
          </Marquee>
        </DSSection>

        {/* ============ TIMELINE ============ */}
        <DSSection
          title="Timeline"
          description="خط زمانی برای نمایش مسیر."
        >
          <Timeline
            items={[
              {
                year: "1404",
                title: "طراح ارشد محصول",
                company: "EBCOM",
                description: "بازطراحی پلتفرم اصلی",
                achievement: "۳۰٪ کاهش handoff",
                current: true,
              },
              {
                year: "1403",
                title: "طراح ارشد محصول",
                company: "Postex",
                description: "بازطراحی dashboard عملیات",
                achievement: "۲۰٪ کاهش زمان تسک",
              },
            ]}
          />
        </DSSection>

        {/* ============ SPACING & RADIUS ============ */}
        <DSSection
          title="Spacing & Radius"
          description="توکن‌های فاصله و گردی گوشه‌ها."
        >
          <div className="space-y-8">
            <div>
              <div className="text-xs text-[var(--color-text-muted)] mb-4 font-mono">
                Border Radius
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: "sm", var: "--radius-sm" },
                  { name: "md", var: "--radius-md" },
                  { name: "lg", var: "--radius-lg" },
                  { name: "xl", var: "--radius-xl" },
                  { name: "full", var: "--radius-full" },
                ].map((r) => (
                  <div key={r.name} className="text-center">
                    <div
                      className="w-20 h-20 bg-[var(--color-primary)]"
                      style={{ borderRadius: `var(${r.var})` }}
                    />
                    <div className="text-xs text-[var(--color-text-muted)] mt-2 font-mono">
                      {r.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DSSection>

        {/* Footer */}
        <div className="py-16 text-center text-sm text-[var(--color-text-muted)]">
          Donut Design System · v1.0
        </div>
      </Container>
    </main>
  );
}