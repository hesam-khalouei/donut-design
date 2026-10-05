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
      className={`${bgClasses[bg]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}