import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <Clients />
      <Services />
      <FeaturedWorks />
      <Process />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}