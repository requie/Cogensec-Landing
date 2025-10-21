import Image from "next/image"

export function IntegrationsSection() {
  const integrations = [
    {
      name: "Microsoft 365 Copilot",
      description: "Native integration with M365 ecosystem",
      logo: "/microsoft-365-logo.png",
    },
    {
      name: "OpenAI",
      description: "Direct API monitoring and control",
      logo: "/abstract-geometric-logo.png",
    },
    {
      name: "Anthropic Claude",
      description: "Enterprise Claude deployment security",
      logo: "/anthropic-logo.png",
    },
    {
      name: "Google Gemini",
      description: "Gemini API governance and monitoring",
      logo: "/images/gemini.png",
    },
    {
      name: "Azure OpenAI",
      description: "Azure-hosted AI service protection",
      logo: "/azure-logo.jpg",
    },
    {
      name: "Custom APIs",
      description: "Generic REST API connector for any AI service",
      logo: "/api-integration-icon.png",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Integrates With Your AI Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AEGIS works seamlessly with leading AI platforms and custom deployments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-purple-400 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 rounded-xl bg-white shadow-sm flex items-center justify-center">
                <Image
                  src={integration.logo || "/placeholder.svg"}
                  alt={integration.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
              <p className="text-sm text-gray-600">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
