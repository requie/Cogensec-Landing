import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Contact Sales",
      description: "For small teams getting started with AI security",
      features: [
        "Up to 10 AI agents",
        "Basic discovery and monitoring",
        "PII detection guardrails",
        "Email support",
        "99% uptime SLA",
        "30-day audit logs",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "Contact Sales",
      description: "For growing organizations with multiple AI deployments",
      features: [
        "Up to 100 AI agents",
        "Advanced discovery and monitoring",
        "All guardrails (PII, content safety, prompt injection)",
        "Custom policy engine",
        "Priority support",
        "99.9% uptime SLA",
        "1-year audit logs",
        "API access",
      ],
      cta: "Request Demo",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large enterprises with complex AI governance needs",
      features: [
        "Unlimited AI agents",
        "Full platform capabilities",
        "Custom integrations",
        "Dedicated success manager",
        "24/7 premium support",
        "99.99% uptime SLA",
        "Unlimited audit logs",
        "On-premise deployment option",
        "Custom SLA terms",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your organization's AI security needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 ${
                plan.highlighted ? "border-purple-600 bg-purple-50 shadow-xl scale-105" : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <Button
                className={`w-full mb-6 ${
                  plan.highlighted
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include core security features and regular updates.{" "}
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
              Compare plans in detail →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
