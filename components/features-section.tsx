export function FeaturesSection() {
  const features = [
    {
      category: "Discovery Service",
      items: [
        "Microsoft 365 Copilot connector",
        "OpenAI API connector",
        "Generic REST API connector",
        "Agent registry with metadata",
        "Manual agent claiming",
        "Ownership tracking",
      ],
    },
    {
      category: "Guardrails Service",
      items: [
        "PII detection (regex-based)",
        "Content safety (OpenAI Moderation)",
        "Prompt injection detection (LLM)",
        "Custom policy engine",
        "Synchronous evaluation <200ms",
        "Redis caching for performance",
      ],
    },
    {
      category: "Platform Features",
      items: [
        "REST API with authentication",
        "PostgreSQL storage",
        "Basic web UI (React)",
        "Comprehensive audit logs",
        "99% uptime SLA",
        "Enterprise-grade security",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to discover, secure, and govern AI agents across your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.category}</h3>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
