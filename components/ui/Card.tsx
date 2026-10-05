import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-lg)] ${paddingClasses[padding]} ${
        hover
          ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--color-primary)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}