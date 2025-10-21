"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("Discovery")

  const tabs = ["Discovery", "Guardrails", "Policies", "Monitoring", "Compliance"]

  const useCases = [
    {
      title: "Microsoft 365 Copilot Discovery",
      description:
        "Automatically scan and catalog all M365 Copilot instances with ownership, usage patterns, and risk assessment",
      expert: "Discovery Service",
      avatar: "professional cybersecurity analyst",
      color: "bg-blue-100",
    },
    {
      title: "OpenAI API Agent Tracking",
      description: "Monitor OpenAI API usage across your organization, identify shadow AI, and track model deployments",
      expert: "Discovery Service",
      avatar: "professional security engineer",
      color: "bg-purple-100",
    },
    {
      title: "PII Detection & Blocking",
      description: "Real-time detection of sensitive data in prompts with regex-based patterns and >95% accuracy",
      expert: "Guardrails Service",
      avatar: "professional data protection officer",
      color: "bg-green-100",
    },
    {
      title: "Content Safety Filtering",
      description:
        "Leverage OpenAI Moderation API to block harmful content including hate speech, violence, and self-harm",
      expert: "Guardrails Service",
      avatar: "professional content moderator",
      color: "bg-yellow-100",
    },
    {
      title: "Prompt Injection Prevention",
      description: "LLM-powered detection of instruction override attempts, jailbreaks, and system prompt extraction",
      expert: "Guardrails Service",
      avatar: "professional security researcher",
      color: "bg-red-100",
    },
    {
      title: "Custom Policy Enforcement",
      description:
        "Define and enforce organization-specific policies with flexible rules engine and compliance templates",
      expert: "Policy Engine",
      avatar: "professional compliance officer",
      color: "bg-orange-100",
    },
  ]

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
            Comprehensive security and governance across discovery, guardrails, and policy enforcement.
            <br />
            Built for enterprise scale with sub-200ms latency.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 border-b border-gray-300">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-none border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-black text-black font-semibold"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
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
