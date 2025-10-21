import Image from "next/image"

export function HybridWorkflowSection() {
  const steps = [
    {
      title: "Share your task",
      description: "Describe what you need and add any context",
    },
    {
      title: "AI breaks it down",
      description: "Tendem turns your task into automated steps with expert checks",
    },
    {
      title: "Human expert co-pilots",
      description: "An expert watches, catches gaps, and validates the work",
    },
    {
      title: "Verified results delivered",
      description: "Every output is reviewed by AI and expert before you see it",
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#f5f5f5] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Hybrid AI × Human Workflow</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI works fast, and a human co-pilot guides, catches gaps, and validates the result. It gets stuck, our
            expert takes over and gets it done.
          </p>
        </div>

        {/* Workflow Steps Card */}
        <div className="relative">
          {/* Decorative Purple Blob */}
          <div className="absolute -right-12 -top-8 w-48 h-48 opacity-80 z-0">
            <Image
              src="/small-purple-organic-3d-blob.jpg"
              alt=""
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-12 border-4 border-amber-200 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Purple Blob Bottom Left */}
          <div className="absolute -left-12 -bottom-8 w-40 h-40 opacity-80 z-0">
            <Image
              src="/small-purple-organic-3d-blob-flowing.jpg"
              alt=""
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
