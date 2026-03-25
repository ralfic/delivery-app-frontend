import type { ICartItem } from '~/types/cart';
import CartItem from './CartItem';

export default function OrderSummary({
  subtotal,
  delivery,
  total,
  cartItems,
}: {
  subtotal: number;
  delivery: number;
  total: number;
  cartItems: ICartItem[];
}) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sticky top-24">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Your Order
        </h2>

        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-gray-600 font-medium">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600 font-medium">
            <span>Delivery</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-extrabold text-gray-900 pt-3 border-t border-gray-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="w-full bg-[#FF6347] hover:bg-[#FF4500] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#FF6347]/30 hover:shadow-xl hover:shadow-[#FF6347]/40">
          Place Order
        </button>
      </div>
    </div>
  );
}
