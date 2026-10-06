"use client";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PlaygroundPage() {
  return (
    <main>
      {/* ۱. Text Reveal */}
      <Section spacing="lg">
        <Container>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
            <AnimatedText delay={0.2}>
              ما محصولات دیجیتال می‌سازیم که کار می‌کنن
            </AnimatedText>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] max-w-3xl">
            <AnimatedText delay={0.8} duration={1.5}>
              با تمرکز بر تجربه کاربری و تصمیم‌های داده‌محور
            </AnimatedText>
          </p>
        </Container>
      </Section>

      {/* ۲. Magnetic Buttons */}
      <Section spacing="md" bg="alt">
        <Container>
          <h2 className="text-3xl font-black mb-10">Magnetic Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <MagneticButton size="lg">شروع پروژه</MagneticButton>
            <MagneticButton size="lg" variant="outline">
              مشاهده نمونه‌کارها
            </MagneticButton>
            <MagneticButton size="lg" variant="ghost">
              تماس با ما
            </MagneticButton>
          </div>
        </Container>
      </Section>

      {/* ۳. Marquee */}
      <Section spacing="md">
        <Container>
          <h2 className="text-3xl font-black mb-10">Marquee</h2>
        </Container>
        <Marquee speed={25}>
          <div className="text-6xl md:text-8xl font-black text-[var(--color-text)] opacity-20 hover:opacity-100 transition-opacity">
            طراحی محصول
          </div>
          <div className="text-6xl md:text-8xl font-black text-[var(--color-primary)]">
            ✦
          </div>
          <div className="text-6xl md:text-8xl font-black text-[var(--color-text)] opacity-20 hover:opacity-100 transition-opacity">
            دیزاین سیستم
          </div>
          <div className="text-6xl md:text-8xl font-black text-[var(--color-primary)]">
            ✦
          </div>
          <div className="text-6xl md:text-8xl font-black text-[var(--color-text)] opacity-20 hover:opacity-100 transition-opacity">
            پژوهش کاربر
          </div>
          <div className="text-6xl md:text-8xl font-black text-[var(--color-primary)]">
            ✦
          </div>
        </Marquee>
      </Section>

      {/* ۴. Scroll Reveal */}
      <Section spacing="md" bg="alt">
        <Container>
          <h2 className="text-3xl font-black mb-10">Scroll Reveal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card>
                <h3 className="text-xl font-bold mb-2">از پایین</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  این کارت با اسکرول از پایین ظاهر می‌شه
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="left">
              <Card>
                <h3 className="text-xl font-bold mb-2">از چپ</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  این کارت از چپ میاد
                </p>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3} direction="right">
              <Card>
                <h3 className="text-xl font-bold mb-2">از راست</h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  این کارت از راست میاد
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ۵. Smooth Scroll Test */}
      <Section spacing="lg">
        <Container>
          <h2 className="text-3xl font-black mb-10">
            Smooth Scroll (کل صفحه)
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mb-20">
            اسکرول رو با موس یا تاچ امتحان کن — حس نرم و لوکس می‌ده.
          </p>
          <div className="h-[50vh]" />
        </Container>
      </Section>
    </main>
  );
}