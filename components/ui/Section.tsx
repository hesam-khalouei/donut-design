import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "default" | "alt" | "dark";
  spacing?: "sm" | "md" | "lg";
}

const bgClasses = {
  default: "bg-[var(--color-bg)]",
  alt: "bg-[var(--color-bg-alt)]",
  dark: "bg-[var(--color-bg-dark)] text-white",
};

// ⚠️ رنگ کارت‌ها بر اساس پس‌زمینه سکشن
const cardBgVars = {
  default: `
    [--section-card-bg:var(--color-card-bg)]
    [--section-card-bg-hover:var(--color-card-bg-hover)]
    [--section-card-border:var(--color-card-border)]
  `,
  alt: `
    [--section-card-bg:var(--color-bg)]
    [--section-card-bg-hover:var(--color-bg)]
    [--section-card-border:var(--color-border)]
  `,
  dark: `
    [--section-card-bg:rgba(255,255,255,0.03)]
    [--section-card-bg-hover:rgba(255,255,255,0.06)]
    [--section-card-border:rgba(255,255,255,0.1)]
  `,
};

const spacingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export default function Section({
  children,
  className = "",
  id,
  bg = "default",
  spacing = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgClasses[bg]} ${spacingClasses[spacing]} ${cardBgVars[bg]} ${className}`}
    >
      {children}
    </section>
  );
}