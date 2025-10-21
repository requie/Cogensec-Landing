import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValuePillarsSection } from "@/components/value-pillars-section"
import { ExpertGallerySection } from "@/components/expert-gallery-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePillarsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ExpertGallerySection />
      </main>
      <Footer />
    </div>
  )
}
