import ShopCard from '~/components/shop/ShopCard';
import ShopsFilter from '~/components/shop/ShopsFilter';
import ShopsSidebar from '~/components/shop/ShopsSidebar';

const mockShops = [
  { id: 1, name: 'Mc Donny', active: true },
  { id: 2, name: 'CFK', active: false },
  { id: 3, name: 'Pizza Palace', active: false },
  { id: 4, name: 'Sushi Bar', active: false },
  { id: 5, name: 'Burger King', active: false },
];

const mockProducts = [
  {
    id: 1,
    name: 'Big Big Burger',
    price: 12.99,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.5,
    description: 'Delicious Big Big Burger',
  },
  {
    id: 2,
    name: 'Cheese Burger',
    price: 9.99,
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
    rating: 4.8,
    description: 'Tasty Cheese Burger',
  },
  {
    id: 3,
    name: 'Chicken Burger',
    price: 10.99,
    image:
      'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop',
    rating: 4.3,
    description: 'Juicy Chicken Burger',
  },
  {
    id: 4,
    name: 'Veggie Burger',
    price: 8.99,
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop',
    rating: 4.6,
    description: 'Healthy Veggie Burger',
  },
  {
    id: 5,
    name: 'Double Burger',
    price: 14.99,
    image:
      'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop',
    rating: 4.7,
    description: 'Double Delight Burger',
  },
  {
    id: 6,
    name: 'BBQ Burger',
    price: 11.99,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
    rating: 4.4,
    description: 'BBQ Delight Burger',
  },
];

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
