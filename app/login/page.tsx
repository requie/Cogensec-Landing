import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Decorative 3D Shapes */}
      <div className="absolute left-[5%] top-[40%] w-64 h-64 opacity-80">
        <img src="/digital-lock-security-shield-3d.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-[5%] top-[10%] w-64 h-64 opacity-80">
        <img src="/circuit-board-cybersecurity-network-3d.jpg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Logo at Top */}
      <div className="relative z-10 pt-12 pb-8 flex justify-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-black.svg" alt="Cogensec Logo" width={32} height={32} className="h-8 w-8" priority />
          <span className="text-2xl font-semibold text-gray-900">Cogensec</span>
        </Link>
      </div>

      {/* Login Card */}
      <div className="relative z-10 flex items-center justify-center px-4 pb-20">
        <Card className="w-full max-w-md bg-white shadow-lg border-0 p-12">
          <div className="space-y-6">
            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-semibold text-gray-900">Welcome to Cogensec!</h1>
              <p className="text-gray-600">Create your account or log in</p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full h-12 text-base font-normal border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                variant="outline"
                className="w-full h-12 text-base font-normal border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 23 23">
                  <path fill="#f3f3f3" d="M0 0h23v23H0z" />
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                Continue with Microsoft
              </Button>
            </div>

            {/* Footer Links */}
            <div className="text-center space-y-2 pt-4">
              <p className="text-sm text-gray-600">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>
              </p>
              <p className="text-sm text-gray-600">
                Any questions?{" "}
                <Link href="/help" className="text-blue-600 hover:underline">
                  Help
                </Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
