import { Link } from 'react-router';
import Logo from '~/components/Logo';
import { APP_ROUTES } from '~/constants/routes';
import LoginForm from '~/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Logo />
          <p className="text-gray-600 font-medium mt-2">
            Delicious food, delivered fast
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Welcome Back
            </h2>
            <p className="text-gray-600 font-medium">
              Sign in to continue ordering
            </p>
          </div>

          <LoginForm />

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 mt-8 font-medium">
            Don't have an account?{' '}
            <Link
              to={APP_ROUTES.SIGNUP}
              className="text-[#FF6347] hover:text-[#FF4500] font-bold transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
