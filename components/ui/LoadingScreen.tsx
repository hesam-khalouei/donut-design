"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // جلوگیری از اسکرول موقع لود
    document.body.style.overflow = "hidden";

    // شمارنده درصد
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // سرعت متغیر برای حس طبیعی‌تر
        const increment = prev < 30 ? 8 : prev < 70 ? 5 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    // بعد از تکمیل، صفحه رو مخفی کن
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--color-bg)]"
        >
          {/* گرادینت تزئینی */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-10 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col items-center gap-10">
            {/* دونات چرخان */}
            <div className="relative w-32 h-32">
              {/* دایره پس‌زمینه */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >
                {/* حلقه خاکستری */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth="2"
                />

                {/* حلقه رنگی (پر می‌شه) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={264}
                  animate={{
                    strokeDashoffset: 264 - (264 * progress) / 100,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </svg>

              {/* دونات مرکزی */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  {/* حلقه دونات */}
                  <div className="w-12 h-12 rounded-full border-[6px] border-[var(--color-primary)]" />
                  {/* سوراخ وسط */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-bg)]" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* لوگو */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-black tracking-tight"
            >
              Donut<span className="text-[var(--color-primary)]">.</span>
            </motion.div>

            {/* شمارنده درصد */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]"
            >
              <span className="tabular-nums font-mono">
                {String(progress).padStart(3, "0")}
              </span>
              <span className="w-16 h-px bg-[var(--color-border)]" />
              <span className="uppercase tracking-wider text-xs">Loading</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}