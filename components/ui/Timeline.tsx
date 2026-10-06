"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description?: string;
  achievement?: string;
  color?: string;
  icon?: ReactNode;
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  locale?: "rtl" | "ltr";
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* خط عمودی وسط — فقط دسکتاپ */}
      <div className="hidden md:block absolute left-1/2 rtl:left-1/2 rtl:right-auto top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent -translate-x-1/2 rtl:translate-x-1/2" />

      {/* خط عمودی کنار — فقط موبایل */}
      <div className="md:hidden absolute left-4 rtl:left-auto rtl:right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

      <div className="space-y-12 md:space-y-16">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex items-start gap-6 md:gap-0 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* نقطه روی خط */}
            <div className="absolute left-4 rtl:left-auto rtl:right-4 md:left-1/2 md:right-auto rtl:md:right-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2 top-6 z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className={`w-4 h-4 rounded-full border-4 border-[var(--color-bg)] relative ${
                  item.current
                    ? "bg-[var(--color-primary)] ring-4 ring-[var(--color-primary)]/20"
                    : "bg-[var(--color-text-muted)]"
                }`}
              >
                {item.current && (
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[var(--color-primary)]"
                  />
                )}
              </motion.div>
            </div>

            {/* محتوا — نیمه چپ (دسکتاپ) */}
            <div
              className={`hidden md:block w-1/2 ${
                idx % 2 === 0 ? "pr-12 rtl:pr-0 rtl:pl-12 text-right rtl:text-left" : "pl-12 rtl:pl-0 rtl:pr-12 text-left rtl:text-right"
              }`}
            >
              {idx % 2 === 0 && <TimelineCard item={item} />}
            </div>

            {/* محتوا — نیمه راست (دسکتاپ) */}
            <div
              className={`hidden md:block w-1/2 ${
                idx % 2 === 0 ? "pl-12 rtl:pl-0 rtl:pr-12" : "pr-12 rtl:pr-0 rtl:pl-12"
              }`}
            >
              {idx % 2 !== 0 && <TimelineCard item={item} />}
            </div>

            {/* محتوا — موبایل */}
            <div className="md:hidden pl-12 rtl:pl-0 rtl:pr-12 w-full">
              <TimelineCard item={item} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div
      className={`group p-6 md:p-7 rounded-[var(--radius-lg)] border transition-all duration-300 hover:shadow-lg bg-[var(--section-card-bg)] ${
        item.current
          ? "border-[var(--color-primary)]/50 bg-[var(--color-primary-light)]/30"
          : "border-[var(--section-card-border)] hover:border-[var(--color-primary)]"
      }`}
    >
      {/* سال */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
          {item.year}
        </span>
        {item.current && (
          <span className="px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase">
            Now
          </span>
        )}
      </div>

      {/* عنوان */}
      <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>

      {/* شرکت */}
      <p className="text-sm text-[var(--color-primary)] font-medium mb-3">
        {item.company}
      </p>

      {/* توضیحات */}
      {item.description && (
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">
          {item.description}
        </p>
      )}

      {/* دستاورد */}
      {item.achievement && (
        <div className="flex items-start gap-2 pt-3 border-t border-[var(--color-border)]">
          <svg
            className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-xs font-medium text-[var(--color-text)]">
            {item.achievement}
          </span>
        </div>
      )}
    </div>
  );
}