"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  characters?: string;
  once?: boolean;
}

const DEFAULT_CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  duration = 1.5,
  characters = DEFAULT_CHARS,
  once = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    if (once && hasAnimated.current) return;

    let frame = 0;
    const totalFrames = Math.round(duration * 60);
    const textLength = text.length;

    const startTimeout = setTimeout(() => {
      const animate = () => {
        frame++;
        const progress = frame / totalFrames;

        const revealedLength = Math.floor(progress * textLength);

        let output = "";
        for (let i = 0; i < textLength; i++) {
          if (i < revealedLength) {
            output += text[i];
          } else if (text[i] === " ") {
            output += " ";
          } else {
            output +=
              characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setDisplayText(output);

        if (frame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          setDisplayText(text);
          hasAnimated.current = true;
        }
      };

      animate();
    }, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
    };
  }, [isInView, text, delay, duration, characters, once]);

  return (
    <span ref={ref} className={className}>
      {displayText || text.replace(/[^\s]/g, " ")}
    </span>
  );
}