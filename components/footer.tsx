import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and tagline */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Image src="/logo-black.svg" alt="Cogensec Logo" width={28} height={28} className="h-7 w-7" />
            <span className="text-2xl font-semibold text-gray-900">Cogensec</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            AI-powered task platform
            <br />
            with human experts on top.
          </p>
        </div>

        {/* Bottom bar with copyright and links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500">© Cogensec All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-black transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
