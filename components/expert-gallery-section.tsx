import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ExpertGallerySection() {
  const experts = [
    {
      color: "bg-blue-600",
      query: "professional african american woman security architect headshot blue background",
    },
    { color: "bg-green-500", query: "professional asian male AI governance specialist headshot green background" },
    {
      color: "bg-gray-700",
      query: "professional caucasian woman compliance officer headshot dark gray background",
    },
    { color: "bg-amber-600", query: "professional hispanic male security engineer headshot amber background" },
    { color: "bg-purple-400", query: "professional middle eastern woman policy analyst headshot purple background" },
    { color: "bg-teal-600", query: "professional indian male threat detection expert headshot teal background" },
    {
      color: "bg-orange-600",
      query: "professional black woman AI security researcher headshot orange background",
    },
    { color: "bg-gray-600", query: "professional asian woman data protection officer headshot gray background" },
    { color: "bg-pink-600", query: "professional caucasian male security operations lead headshot pink background" },
  ]

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-black mb-6">
            Security experts
            <br />
            behind every deployment
          </h2>
          <div className="flex items-center gap-4">
            <p className="text-lg text-gray-600 max-w-2xl">
              Our team of AI security specialists, compliance officers, and governance experts ensure your AI agents
              operate safely and within policy boundaries.
            </p>
            <Button
              variant="outline"
              className="rounded-full border-2 border-black text-black hover:bg-black hover:text-white whitespace-nowrap bg-transparent"
            >
              Meet the team
            </Button>
          </div>
        </div>

        {/* Expert Gallery */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {experts.map((expert, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-48 h-64 ${expert.color} rounded-2xl overflow-hidden shadow-lg`}
              >
                <Image
                  src={`/.jpg?key=pydem&height=256&width=192&query=${expert.query}`}
                  alt="Digital Forensic Expert"
                  width={192}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
