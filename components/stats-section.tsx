export function StatsSection() {
  const stats = [
    {
      value: "10M+",
      label: "AI Interactions Secured Daily",
      description: "Protecting enterprise AI at scale",
    },
    {
      value: "<180ms",
      label: "Average Guardrail Latency",
      description: "Real-time protection without slowdown",
    },
    {
      value: "99.9%",
      label: "Platform Uptime SLA",
      description: "Enterprise-grade reliability",
    },
    {
      value: "500+",
      label: "AI Agents Discovered",
      description: "Across customer deployments",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-white/90 mb-1">{stat.label}</div>
              <div className="text-sm text-white/70">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
