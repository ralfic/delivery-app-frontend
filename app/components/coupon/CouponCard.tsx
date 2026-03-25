import { Copy } from 'lucide-react';
import type { ICoupon } from '~/types/cupoun';
import { Button } from '../ui/button';

export default function CouponCard({ coupon }: { coupon: ICoupon }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Gradient Header */}
      <div
        className={`h-36 bg-gradient-to-br ${coupon.color} p-6 flex flex-col justify-center relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <h3 className="text-white text-3xl font-extrabold mb-1 relative z-10 tracking-tight">
          {coupon.discount}
        </h3>
        <p className="text-white text-sm font-semibold opacity-95 relative z-10">
          {coupon.name}
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm font-medium mb-5">
          {coupon.description}
        </p>

        {/* Coupon Code */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-4 mb-5">
          <p className="text-center font-mono text-xl font-extrabold text-gray-900 tracking-wide">
            {coupon.code}
          </p>
        </div>

        {/* Copy Button */}
        <Button variant="brand" size="massive">
          <Copy size={18} />
          <span>Copy Code</span>
        </Button>
      </div>
    </div>
  );
}
