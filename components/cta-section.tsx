import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Secure Your AI Agents?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join leading enterprises using AEGIS to discover, secure, and govern their AI deployments. Start your free
          trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-lg flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg rounded-lg bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>

        <p className="text-gray-400 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>
    </section>
  )
}
