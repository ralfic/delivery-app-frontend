import OrderForm from '~/components/cart/OrderForm';
import OrderSummary from '~/components/cart/OrderSummary';
import { mockCartItems } from '~/constants/mokData';

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
        <OrderSummary
          subtotal={subtotal}
          delivery={delivery}
          total={total}
          cartItems={mockCartItems}
        />
      </div>
    </>
  );
}
