"use client";

import Hero from "./Hero";
import Services from "./Services";
import FeaturedWorks from "./FeaturedWorks";
import Process from "./Process";
import Testimonials from "./Testimonials";
import BlogPreview from "./BlogPreview";
import FinalCTA from "./FinalCTA";
import type { Section } from "@/types/sections";

interface FlexibleContentProps {
  sections: Section[];
  locale: string;
}

export default function FlexibleContent({
  sections,
  locale,
}: FlexibleContentProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.acf_fc_layout}-${index}`;
        const layout = section.acf_fc_layout as string;

        switch (layout) {
          case "hero":
            return <Hero key={key} data={section as any} locale={locale} />;

          case "services":
            return <Services key={key} data={section as any} locale={locale} />;

          case "featured_works":
            return (
              <FeaturedWorks key={key} data={section as any} locale={locale} />
            );

          case "process":
            return <Process key={key} data={section as any} locale={locale} />;

          case "testimonials":
            return (
              <Testimonials key={key} data={section as any} locale={locale} />
            );

          case "blog_preview":
            return (
              <BlogPreview key={key} data={section as any} locale={locale} />
            );

          case "final_cta":
            return <FinalCTA key={key} data={section as any} locale={locale} />;

          default:
            console.warn(`Unknown section layout: ${layout}`);
            return null;
        }
      })}
    </>
  );
}