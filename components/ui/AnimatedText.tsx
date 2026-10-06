"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.duration / 10,
      delayChildren: custom.delay,
    },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 1,
  once = true,
  as: Tag = "span",
}: AnimatedTextProps) {
  const words = children.split(" ");

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      custom={{ delay, duration }}
      className={`inline-block ${className}`}
      style={{ display: "inline" }}
    >
      {words.map((w, idx) => (
        <span
          key={idx}
          style={{ display: "inline-block", overflow: "hidden" }}
        >
          <motion.span
            variants={word}
            style={{ display: "inline-block" }}
          >
            {w}
            {idx < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}