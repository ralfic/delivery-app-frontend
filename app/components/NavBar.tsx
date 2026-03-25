import { navItems } from '~/constants/navItems';
import { Link, useLocation } from 'react-router';

export default function NavBar() {
  const currentPath = useLocation().pathname;

  return (
    <nav className="flex items-center space-x-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPath === item.to;

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-[#FF6347] text-white shadow-lg shadow-[#FF6347]/30'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <Icon size={20} />
            <span className="hidden sm:inline font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
