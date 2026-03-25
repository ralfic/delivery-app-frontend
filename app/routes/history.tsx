import { Search, RotateCcw } from 'lucide-react';
import OrderCard from '~/components/order/OrderCard';
import OrderSearch from '~/components/order/OrderSearch';

const mockOrders = [
  {
    id: 'ORD-001',
    date: '2026-03-20',
    items: [
      {
        name: 'Big Big Burger',
        image:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop',
      },
      {
        name: 'Cheese Burger',
        image:
          'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=80&h=80&fit=crop',
      },
    ],
    total: 35.97,
    status: 'Delivered',
  },
  {
    id: 'ORD-002',
    date: '2026-03-18',
    items: [
      {
        name: 'BBQ Burger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?w=80&h=80&fit=crop',
      },
      {
        name: 'Veggie Burger',
        image:
          'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=80&h=80&fit=crop',
      },
      {
        name: 'Chicken Burger',
        image:
          'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=80&h=80&fit=crop',
      },
    ],
    total: 42.96,
    status: 'Delivered',
  },
  {
    id: 'ORD-003',
    date: '2026-03-15',
    items: [
      {
        name: 'Double Burger',
        image:
          'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=80&h=80&fit=crop',
      },
    ],
    total: 17.98,
    status: 'Delivered',
  },
];

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
