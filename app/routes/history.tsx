import OrderCard from '~/components/order/OrderCard';
import OrderSearch from '~/components/order/OrderSearch';
import { mockOrders } from '~/constants/mokData';

export default function HistoryPage() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
        Order History
      </h1>

      {/* Search Section */}
      <OrderSearch />

      {/* Orders List */}
      <div className="space-y-5">
        {mockOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </>
  );
}
