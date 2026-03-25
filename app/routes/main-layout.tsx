import { Outlet } from 'react-router';
import Header from '~/components/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
