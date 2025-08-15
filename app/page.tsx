import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Left Column - Illustration */}
        <div className="flex-1 flex flex-col justify-center items-center p-8 relative">
          <div className="absolute top-8 left-8">
            <img src="/cmlabs-logo-new.svg" alt="cmlabs" className="h-12" />
          </div>

          <div className="max-w-lg w-full flex justify-center">
            <img src="/cmlabs-login-icon.svg" alt="Login Icon" className="w-80 h-auto" />
          </div>

          {/* Tagline */}
          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-800">Masuk Dengan Aman</h2>
            <h2 className="text-2xl font-bold text-blue-800">Kelola Dengan Percaya Diri</h2>
          </div>
        </div>

        <div className="flex items-center justify-center px-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
            <img src="/cmlabs-separator-logo.svg" alt="cmlabs separator" className="h-16 w-16" />
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl w-full max-w-md border border-white/20">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl w-full max-w-sm border border-white/20">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
