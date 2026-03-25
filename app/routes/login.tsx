import { Mail, Lock, ArrowRight } from 'lucide-react';
import Logo from '~/components/Logo';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo />
          <p className="text-gray-600 font-medium">
            Delicious food, delivered fast
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-600 font-medium mb-8">
            Sign in to continue ordering
          </p>

          <form className="space-y-5">
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

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-semibold text-[#FF6347] hover:text-[#FF4500] transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#FF6347] hover:bg-[#FF4500] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#FF6347]/30 hover:shadow-xl hover:shadow-[#FF6347]/40 flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">
                or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 font-medium text-gray-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all duration-300 font-medium text-gray-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-8 font-medium">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-[#FF6347] hover:text-[#FF4500] font-bold transition-colors"
            >
              Sign Up
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
