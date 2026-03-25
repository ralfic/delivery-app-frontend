import { Plus, Star } from 'lucide-react';
import type { IProduct } from '~/types/shop';
import { Button } from '../ui/button';

export default function ShopCard({ product }: { product: IProduct }) {
  return (
    <div
      key={product.id}
      className="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <div className="flex items-center space-x-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ${product.price}
          </span>
          <Button variant={'brand'} size={'xl'} className="h-10">
            <Plus size={18} />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
