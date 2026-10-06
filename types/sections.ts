// ---------- Base ----------
export interface BaseSection {
  acf_fc_layout: string;
  _id?: string;
}

// ---------- Hero ----------
export interface HeroSection extends BaseSection {
  acf_fc_layout: "hero";
  badge: string;
  title_line_1: string;
  title_line_2: string;
  description: string;
  cta_primary_text: string;
  cta_primary_link: string;
  cta_secondary_text: string;
  cta_secondary_link: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

// ---------- Services ----------
export interface ServicesSection extends BaseSection {
  acf_fc_layout: "services";
  label: string;
  title: string;
  description: string;
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

// ---------- Featured Works ----------
export interface FeaturedWorksSection extends BaseSection {
  acf_fc_layout: "featured_works";
  label: string;
  title: string;
  description: string;
  view_all_text: string;
  projects: Array<{
    title: string;
    category: string;
    description: string;
    slug: string;
    color: string;
    accent: string;
  }>;
}

// ---------- Process ----------
export interface ProcessSection extends BaseSection {
  acf_fc_layout: "process";
  label: string;
  title: string;
  description: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

// ---------- Testimonials ----------
export interface TestimonialsSection extends BaseSection {
  acf_fc_layout: "testimonials";
  label: string;
  title: string;
  items: Array<{
    quote: string;
    name: string;
    role: string;
    initial: string;
  }>;
}

// ---------- Blog Preview ----------
export interface BlogPreviewSection extends BaseSection {
  acf_fc_layout: "blog_preview";
  label: string;
  title: string;
  description: string;
  view_all_text: string;
  count: number;
}

// ---------- Final CTA ----------
export interface FinalCTASection extends BaseSection {
  acf_fc_layout: "final_cta";
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  email_text: string;
}

// ---------- Union ----------
export type Section =
  | HeroSection
  | ServicesSection
  | FeaturedWorksSection
  | ProcessSection
  | TestimonialsSection
  | BlogPreviewSection
  | FinalCTASection;