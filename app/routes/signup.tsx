import { User, Mail, Phone, Lock, ArrowRight } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Food<span className="text-[#FF6347]">App</span>
          </h1>
          <p className="text-gray-600 font-medium">
            Join thousands of happy customers
          </p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Create Account
          </h2>
          <p className="text-gray-600 font-medium mb-8">
            Sign up to get started
          </p>

          <form className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            {/* Phone Number Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-5 h-5 rounded border-gray-300 text-[#FF6347] focus:ring-[#FF6347] focus:ring-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a
                  href="#"
                  className="text-[#FF6347] hover:text-[#FF4500] font-semibold transition-colors"
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="text-[#FF6347] hover:text-[#FF4500] font-semibold transition-colors"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#FF6347] hover:bg-[#FF4500] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#FF6347]/30 hover:shadow-xl hover:shadow-[#FF6347]/40 flex items-center justify-center space-x-2"
            >
              <span>Create Account</span>
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-8 font-medium">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-[#FF6347] hover:text-[#FF4500] font-bold transition-colors"
            >
              Sign In
            </a>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a
            href="/shops"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
