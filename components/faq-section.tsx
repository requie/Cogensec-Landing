"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does AEGIS discover AI agents in my organization?",
      answer:
        "AEGIS uses multiple discovery methods including native integrations with platforms like Microsoft 365 Copilot and OpenAI, API monitoring, and network traffic analysis. Our discovery engine continuously scans for new agents and updates the inventory in real-time, providing complete visibility into your AI ecosystem.",
    },
    {
      question: "What is the performance impact of AEGIS guardrails?",
      answer:
        "AEGIS is designed for enterprise scale with minimal performance impact. Our guardrails operate with an average latency of under 180ms (P95), ensuring real-time protection without degrading user experience. We use advanced caching and optimization techniques to maintain high throughput even at scale.",
    },
    {
      question: "Can AEGIS integrate with our existing security tools?",
      answer:
        "Yes, AEGIS provides comprehensive API access and supports integration with popular SIEM platforms, security orchestration tools, and compliance systems. We offer webhooks for real-time alerts and can export audit logs in multiple formats for your existing security workflows.",
    },
    {
      question: "How does AEGIS handle compliance requirements like GDPR and HIPAA?",
      answer:
        "AEGIS includes pre-built policy templates for major regulatory frameworks including GDPR, HIPAA, SOC 2, and CCPA. Our platform provides comprehensive audit trails, automated compliance reporting, and data residency controls to help you meet your regulatory obligations. We also support custom policies for industry-specific requirements.",
    },
    {
      question: "What happens if AEGIS detects a policy violation?",
      answer:
        "When a policy violation is detected, AEGIS can take multiple actions based on your configuration: block the request entirely, sanitize sensitive data before forwarding, log the incident for review, or trigger alerts to your security team. All actions are logged with full context for audit and forensic analysis.",
    },
    {
      question: "Can we customize the guardrails and policies?",
      answer:
        "Absolutely. AEGIS provides a flexible policy engine that allows you to create custom rules using regex patterns, keyword lists, and custom logic. You can define organization-specific policies, adjust sensitivity thresholds, and create exceptions for specific use cases while maintaining security.",
    },
    {
      question: "How quickly can we deploy AEGIS?",
      answer:
        "Most organizations can deploy AEGIS in under a week. Our cloud-based platform requires minimal infrastructure changes, and we provide comprehensive onboarding support including integration setup, policy configuration, and team training. Enterprise customers with on-premise requirements may need additional deployment time.",
    },
    {
      question: "What kind of support does AEGIS provide?",
      answer:
        "We offer tiered support based on your plan: email support for Starter, priority support for Professional, and 24/7 premium support with a dedicated success manager for Enterprise customers. All plans include access to our documentation, API references, and community forums.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about AEGIS</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
