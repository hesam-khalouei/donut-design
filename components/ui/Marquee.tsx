"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const content = (
    <div className="flex gap-8 w-max">
      {children}
      {children}
    </div>
  );

  return (
    <div
      className={`overflow-hidden ${pauseOnHover ? "group" : ""} ${className}`}
    >
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className={pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}
      >
        {content}
      </motion.div>
    </div>
  );
}