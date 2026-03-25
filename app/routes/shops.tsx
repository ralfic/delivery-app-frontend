import ShopCard from '~/components/shop/ShopCard';
import ShopsFilter from '~/components/shop/ShopsFilter';
import ShopsSidebar from '~/components/shop/ShopsSidebar';
import { mockProducts, mockShops } from '~/constants/mokData';

export default function ShopsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <ShopsSidebar shops={mockShops} />

            {/* Main Content */}
            <main className="flex-1">
              {/* Top Bar */}
              <ShopsFilter />

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProducts.map((product) => (
                  <ShopCard key={product.id} product={product} />
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
