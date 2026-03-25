import type { IShop } from '~/types/shop';

export default function ShopsSidebar({
  shops,
}: {
  shops: Omit<IShop, 'products'>[];
}) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
        <h2 className="text-xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Shops
        </h2>
        <div className="space-y-2">
          {shops.map((shop) => (
            <button
              key={shop.id}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                shop.active
                  ? 'bg-[#FF6347]/10 text-[#FF6347] font-bold border-l-4 border-[#FF6347]'
                  : 'text-gray-700 hover:bg-gray-50 font-medium'
              }`}
            >
              {shop.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
