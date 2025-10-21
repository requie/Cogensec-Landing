import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-black.svg" alt="Cogensec Logo" width={24} height={24} className="h-6 w-6" priority />
            <span className="text-xl font-semibold text-gray-900">Cogensec</span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="text-sm bg-teal-500 text-white hover:bg-teal-600">Join Waitlist</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
