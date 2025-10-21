import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hexagonal data pattern - top right */}
        <div className="absolute top-20 right-10 opacity-20">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              {[0, 1, 2, 3, 4].map((row) =>
                [0, 1, 2, 3].map((col) => (
                  <polygon
                    key={`${row}-${col}`}
                    points="30,15 45,7.5 60,15 60,30 45,37.5 30,30"
                    transform={`translate(${col * 40}, ${row * 35})`}
                    stroke="#6366f1"
                    strokeWidth="1"
                    fill="none"
                  />
                )),
              )}
            </g>
          </svg>
        </div>

        {/* Binary code pattern - left side */}
        <div className="absolute top-40 left-10 opacity-15 font-mono text-xs text-gray-600 leading-relaxed">
          <div>01001000 01100101 01111000</div>
          <div>01000100 01100001 01110100</div>
          <div>01000110 01101111 01110010</div>
          <div>01000101 01101110 01110011</div>
        </div>

        {/* Network nodes visualization - bottom left */}
        <div className="absolute bottom-20 left-20 opacity-20">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="4" fill="#8b5cf6" />
            <circle cx="80" cy="20" r="4" fill="#8b5cf6" />
            <circle cx="120" cy="50" r="4" fill="#8b5cf6" />
            <circle cx="100" cy="100" r="4" fill="#8b5cf6" />
            <circle cx="40" cy="90" r="4" fill="#8b5cf6" />
            <line x1="30" y1="30" x2="80" y2="20" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="80" y1="20" x2="120" y2="50" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="120" y1="50" x2="100" y2="100" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="100" y1="100" x2="40" y2="90" stroke="#8b5cf6" strokeWidth="1" />
            <line x1="40" y1="90" x2="30" y2="30" stroke="#8b5cf6" strokeWidth="1" />
          </svg>
        </div>

        {/* Data stream visualization - right side */}
        <div className="absolute top-1/2 right-20 opacity-15 font-mono text-xs text-blue-600 space-y-1">
          <div>0x4A7F 0x8B3C 0x9E21</div>
          <div>0x2D5A 0x6F89 0x1C4E</div>
          <div>0x7B92 0x3A6D 0x5E18</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm text-green-600 font-medium">AEGIS Platform - Now in Beta</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="inline-block">AI Agent Security &</span>
            <br />
            <span className="inline-block">Governance </span>
            <span className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, secure, and govern AI agents across your organization. Real-time guardrails, policy enforcement,
            and comprehensive visibility for enterprise AI deployments.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button className="bg-teal-500 text-white hover:bg-teal-600 px-8 py-6 text-base rounded-lg">
              Request Demo
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-base rounded-lg bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-8">
              <div className="grid grid-cols-3 gap-4 h-full">
                {/* Left panel - Agent Discovery */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-xs font-semibold text-gray-700">Agent Discovery</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">M365 Copilot</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">OpenAI API</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Custom Agents</span>
                      <span className="text-yellow-600 font-semibold">Scanning</span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded mt-3" style={{ width: "85%" }} />
                  </div>
                </div>

                {/* Center panel - Guardrails */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-xs font-semibold text-gray-700">Guardrails</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">PII Detection</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Content Safety</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Prompt Injection</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-3">Avg: 180ms</div>
                  </div>
                </div>

                {/* Right panel - Policy Enforcement */}
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-xs font-semibold text-gray-700">Policy Status</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Blocked</span>
                      <span className="text-red-600 font-bold">23</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Allowed</span>
                      <span className="text-green-600 font-bold">1,847</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Sanitized</span>
                      <span className="text-yellow-600 font-bold">12</span>
                    </div>
                    <div className="h-2 bg-green-100 rounded mt-3" style={{ width: "98%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating forensic data cards */}
          <div className="absolute -left-8 top-1/4 bg-white rounded-lg shadow-lg p-3 border border-gray-200 opacity-90">
            <div className="text-xs font-mono text-gray-600">
              <div className="text-[10px] text-gray-400 mb-1">AGENTS DISCOVERED</div>
              <div className="text-blue-600 font-bold">127 Active</div>
            </div>
          </div>

          <div className="absolute -right-8 top-1/3 bg-white rounded-lg shadow-lg p-3 border border-gray-200 opacity-90">
            <div className="text-xs font-mono text-gray-600">
              <div className="text-[10px] text-gray-400 mb-1">GUARDRAIL LATENCY</div>
              <div className="text-green-600 font-bold">P95: 180ms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
