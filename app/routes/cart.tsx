import CartItem from '~/components/cart/CartItem';
import OrderForm from '~/components/cart/OrderForm';

const mockCartItems = [
  {
    id: 1,
    name: 'Big Big Burger',
    price: 12.99,
    quantity: 2,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Cheese Burger',
    price: 9.99,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'BBQ Burger',
    price: 11.99,
    quantity: 3,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=100&h=100&fit=crop',
  },
];

export default function CartPage() {
  const subtotal = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = 2.99;
  const total = subtotal + delivery;

  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Form */}
        <OrderForm />
        {/* Cart Items & Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sticky top-24">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Your Order
            </h2>

            <div className="space-y-4 mb-6">
              {mockCartItems.map((item) => (
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
      </div>
    </>
  );
}
