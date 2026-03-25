import { Minus, Plus } from 'lucide-react';
import type { ICartItem } from '~/types/cart';

export default function CartItem({ item }: { item: ICartItem }) {
  return (
    <div className="flex items-center gap-3 pb-4 border-b border-gray-100 last:border-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-xl object-cover shadow-sm"
      />

      <div className="flex-1">
        <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
        <p className="text-[#FF6347] font-extrabold text-sm">${item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
          <Minus size={14} />
        </button>
        <span className="w-8 text-center font-bold text-sm">
          {item.quantity}
        </span>
        <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
}
