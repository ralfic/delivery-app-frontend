import Logo from './Logo';
import NavBar from './NavBar';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/80 border-b border-gray-200/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <NavBar />
        </div>
      </div>
    </nav>
  );
}
