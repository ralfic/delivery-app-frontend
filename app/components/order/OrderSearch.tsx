import { Search } from 'lucide-react';
import { Button } from '../ui/button';

export default function OrderSearch() {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 mb-8">
      <h2 className="text-xl font-extrabold text-gray-900 mb-5 tracking-tight">
        Find Your Orders
      </h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="email"
            className="w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
          />
        </div>
        <Button variant="brand" size="xl" className="rounded-full">
          <Search size={20} />
          <span>Search</span>
        </Button>
      </div>
    </div>
  );
}
