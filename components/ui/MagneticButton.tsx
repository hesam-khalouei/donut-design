"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
  outline:
    "bg-transparent text-[var(--color-text)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  ghost: "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-bg-alt)]",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.4,
  onClick,
  variant = "primary",
  size = "md",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}