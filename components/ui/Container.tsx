import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-full",
};

export default function Container({
  children,
  className = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto px-5 md:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}