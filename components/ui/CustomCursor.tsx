"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "hover" | "text" | "view";

export default function CustomCursor() {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [label, setLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(mobile);
    };
    checkMobile();

    if (isMobile) return;

    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) {
        setVariant("default");
        setLabel("");
        return;
      }

      // ۱. data-cursor (اولویت اول)
      const cursorAttr = target.closest("[data-cursor]") as HTMLElement;
      if (cursorAttr) {
        const type = cursorAttr.dataset.cursor as CursorVariant;
        const labelText = cursorAttr.dataset.cursorLabel || "";
        setVariant(type);
        setLabel(labelText);
        return;
      }

      // ۲. لینک و دکمه و input
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select"
      ) as HTMLElement;
      if (interactive) {
        setVariant("hover");
        setLabel("");
        return;
      }

      // ۳. متن
      const isText = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "LI", "A"].includes(
        target.tagName
      );
      if (isText && target.textContent && target.textContent.trim().length > 0) {
        setVariant("text");
        setLabel("");
        return;
      }

      // ۴. پیش‌فرض
      setVariant("default");
      setLabel("");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  // ⚠️ همه state ها کامل تعریف شدن (نه فقط تفاوت‌ها)
  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(255, 107, 53, 0)",
      borderColor: "var(--color-primary)",
      borderWidth: 1.5,
      borderRadius: 9999,
    },
    hover: {
      width: 56,
      height: 56,
      backgroundColor: "var(--color-primary)",
      borderColor: "var(--color-primary)",
      borderWidth: 0,
      borderRadius: 9999,
    },
    text: {
      width: 3,
      height: 32,
      backgroundColor: "var(--color-text)",
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      borderRadius: 2,
    },
    view: {
      width: 100,
      height: 100,
      backgroundColor: "var(--color-primary)",
      borderColor: "var(--color-primary)",
      borderWidth: 0,
      borderRadius: 9999,
    },
  };

  return (
    <>
      {/* دایره اصلی */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={variants[variant]}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {variant === "view" && label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-xs font-bold"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* نقطه کوچیک وسط */}
      {variant !== "view" && variant !== "text" && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </>
  );
}