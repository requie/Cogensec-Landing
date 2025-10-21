import { Building2, Shield, FileCheck, Users } from "lucide-react"

export function UseCasesSection() {
  const useCases = [
    {
      icon: Building2,
      title: "Financial Services",
      challenge: "Protect sensitive customer data in AI-powered banking applications",
      solution:
        "AEGIS detected and blocked 847 PII exposure attempts in the first month, ensuring GLBA compliance while maintaining seamless customer experience",
      metrics: ["99.8% PII detection accuracy", "Zero data breaches", "SOC 2 compliant"],
    },
    {
      icon: Shield,
      title: "Healthcare",
      challenge: "Secure AI clinical assistants while maintaining HIPAA compliance",
      solution:
        "Real-time PHI detection and redaction across all AI interactions, with comprehensive audit trails for regulatory reporting and patient privacy protection",
      metrics: ["100% HIPAA compliant", "Sub-150ms latency", "Complete audit trails"],
    },
    {
      icon: FileCheck,
      title: "Legal Services",
      challenge: "Govern AI document review tools handling privileged information",
      solution:
        "Custom policy engine enforces attorney-client privilege protection, with granular access controls and detailed logging for every AI interaction",
      metrics: ["Zero privilege violations", "Custom policy rules", "Full chain of custody"],
    },
    {
      icon: Users,
      title: "Enterprise SaaS",
      challenge: "Discover and secure shadow AI across 5,000+ employee organization",
      solution:
        "Automated discovery identified 127 unauthorized AI tools, enabling IT to assess risk, implement governance, and reduce security exposure by 85%",
      metrics: ["127 agents discovered", "85% risk reduction", "Centralized governance"],
    },
  ]

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted Across Industries</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations use AEGIS to secure their AI deployments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-sm text-gray-600 italic">{useCase.challenge}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{useCase.solution}</p>

                <div className="flex flex-wrap gap-3">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-sm font-medium text-green-700"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
