import { RotateCcw } from 'lucide-react';
import type { IOrder } from '~/types/order';
import { Button } from '../ui/button';

export default function OrderCard({ order }: { order: IOrder }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-300 p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Order Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900">
                {order.id}
              </h3>
              <p className="text-sm text-gray-500 font-medium">{order.date}</p>
            </div>
            <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
              {order.status}
            </span>
          </div>

          {/* Items */}
          <div className="flex items-center gap-2 mb-3">
            {order.items.map((item, idx) => (
              <img
                key={idx}
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-xl object-cover shadow-sm"
                title={item.name}
              />
            ))}
            {order.items.length > 3 && (
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 text-sm font-bold">
                +{order.items.length - 3}
              </div>
            )}
          </div>
        </div>

        {/* Total & Action */}
        <div className="flex items-center justify-between lg:flex-col lg:items-end gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 font-semibold">Total</p>
            <p className="text-3xl font-extrabold text-gray-900">
              ${order.total.toFixed(2)}
            </p>
          </div>
          <Button variant={'brand'} size={'massive'}>
            <RotateCcw size={18} />
            <span>Reorder</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
