import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ThreePillars from "@/components/three-pillars";
import ApiSection from "@/components/api-section";
import ExamplesSection from "@/components/examples-section";
import GenaiSection from "@/components/genai-section";
import DocumentationSection from "@/components/documentation-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Navigation />
      <HeroSection />
      <ThreePillars />
      <ApiSection />
      <ExamplesSection />
      <GenaiSection />
      <DocumentationSection />
      <Footer />
    </div>
  );
}
