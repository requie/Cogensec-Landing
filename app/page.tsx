import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValuePillarsSection } from "@/components/value-pillars-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { IntegrationsSection } from "@/components/integrations-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { ExpertGallerySection } from "@/components/expert-gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePillarsSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <UseCasesSection />
        <ExpertGallerySection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
