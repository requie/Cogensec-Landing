"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Search, Shield, FileText, Activity, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("Discovery")

  const tabs = [
    { name: "Discovery", icon: Search },
    { name: "Guardrails", icon: Shield },
    { name: "Policies", icon: FileText },
    { name: "Monitoring", icon: Activity },
    { name: "Compliance", icon: CheckCircle },
  ]

  const useCasesByTab: Record<
    string,
    Array<{
      title: string
      description: string
      expert: string
      avatar: string
      color: string
    }>
  > = {
    Discovery: [
      {
        title: "Automated Agent Inventory",
        description:
          "Continuously scan and catalog all AI agents across your organization, including M365 Copilot, OpenAI API, and custom deployments with real-time ownership tracking",
        expert: "Discovery Engine",
        avatar: "professional cybersecurity analyst",
        color: "bg-blue-100",
      },
      {
        title: "Shadow AI Detection",
        description:
          "Identify unauthorized AI tools and agents being used across departments, assess risk levels, and gain visibility into unmanaged AI deployments",
        expert: "Discovery Engine",
        avatar: "professional security engineer",
        color: "bg-indigo-100",
      },
      {
        title: "Usage Pattern Analysis",
        description:
          "Track agent interaction patterns, identify high-risk usage behaviors, and understand how AI is being leveraged across your organization",
        expert: "Discovery Engine",
        avatar: "professional data analyst",
        color: "bg-cyan-100",
      },
    ],
    Guardrails: [
      {
        title: "Real-Time PII Protection",
        description:
          "Detect and block sensitive data including SSNs, credit cards, and personal information in prompts with >95% accuracy and sub-200ms latency",
        expert: "Guardrails Engine",
        avatar: "professional data protection officer",
        color: "bg-green-100",
      },
      {
        title: "Content Safety Filtering",
        description:
          "Leverage advanced AI models to block harmful content including hate speech, violence, and inappropriate material before it reaches your agents",
        expert: "Guardrails Engine",
        avatar: "professional content moderator",
        color: "bg-emerald-100",
      },
      {
        title: "Prompt Injection Defense",
        description:
          "AI-powered detection of instruction override attempts, jailbreaks, and system prompt extraction to protect your agent integrity",
        expert: "Guardrails Engine",
        avatar: "professional security researcher",
        color: "bg-teal-100",
      },
    ],
    Policies: [
      {
        title: "Custom Policy Rules",
        description:
          "Define organization-specific policies with flexible rules engine supporting regex patterns, keyword lists, and custom logic for your unique requirements",
        expert: "Policy Engine",
        avatar: "professional compliance officer",
        color: "bg-orange-100",
      },
      {
        title: "Industry Compliance Templates",
        description:
          "Pre-built policy templates for GDPR, HIPAA, SOC 2, and other regulatory frameworks to accelerate your compliance journey",
        expert: "Policy Engine",
        avatar: "professional regulatory specialist",
        color: "bg-amber-100",
      },
      {
        title: "Dynamic Policy Updates",
        description:
          "Update and deploy policy changes in real-time across all agents without downtime, with version control and rollback capabilities",
        expert: "Policy Engine",
        avatar: "professional governance lead",
        color: "bg-yellow-100",
      },
    ],
    Monitoring: [
      {
        title: "Real-Time Threat Detection",
        description:
          "Continuous monitoring of agent interactions with instant alerts for policy violations, anomalous behavior, and security incidents",
        expert: "Monitoring Service",
        avatar: "professional security operations analyst",
        color: "bg-purple-100",
      },
      {
        title: "Performance Analytics",
        description:
          "Track guardrail latency, throughput, and effectiveness with detailed metrics and dashboards for operational excellence",
        expert: "Monitoring Service",
        avatar: "professional performance engineer",
        color: "bg-violet-100",
      },
      {
        title: "Incident Response",
        description:
          "Automated incident detection and response workflows with integration to your existing SIEM and security tools for rapid remediation",
        expert: "Monitoring Service",
        avatar: "professional incident responder",
        color: "bg-fuchsia-100",
      },
    ],
    Compliance: [
      {
        title: "Comprehensive Audit Trails",
        description:
          "Immutable logs of all agent interactions, policy decisions, and administrative actions for complete audit readiness and forensic analysis",
        expert: "Compliance Service",
        avatar: "professional audit specialist",
        color: "bg-red-100",
      },
      {
        title: "Regulatory Reporting",
        description:
          "Automated compliance reports for GDPR, CCPA, HIPAA, and other regulations with customizable templates and scheduled delivery",
        expert: "Compliance Service",
        avatar: "professional compliance manager",
        color: "bg-rose-100",
      },
      {
        title: "Risk Assessment",
        description:
          "Continuous risk scoring of AI agents based on usage patterns, data exposure, and policy violations with actionable remediation guidance",
        expert: "Compliance Service",
        avatar: "professional risk analyst",
        color: "bg-pink-100",
      },
    ],
  }

  const currentUseCases = useCasesByTab[activeTab] || []

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black mb-4">
            How AEGIS
            <br />
            Secures Your AI Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end AI security and governance from discovery to compliance.
            <br />
            Built for enterprise scale with sub-200ms latency.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 border-b border-gray-300">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.name}
                variant="ghost"
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 rounded-none border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.name
                    ? "border-black text-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </Button>
            )
          })}
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUseCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-black mb-3">{useCase.title}</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 ${useCase.color} rounded-full flex items-center justify-center overflow-hidden`}
                >
                  <Image
                    src={`/.jpg?height=32&width=32&query=${useCase.avatar}`}
                    alt={useCase.expert}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm text-gray-700">{useCase.expert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
