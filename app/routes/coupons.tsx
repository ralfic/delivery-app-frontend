import CouponCard from '~/components/coupon/CouponCard';

const mockCoupons = [
  {
    id: 1,
    name: 'Summer Sale',
    code: 'SUMMER20',
    discount: '20% Off',
    description: 'Get 20% off on all orders above $25',
    color: 'from-orange-400 to-pink-500',
  },
  {
    id: 2,
    name: 'First Order',
    code: 'WELCOME10',
    discount: '$10 Off',
    description: 'Get $10 off on your first order',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    name: 'Free Delivery',
    code: 'FREEDEL',
    discount: 'Free Delivery',
    description: 'Free delivery on orders above $15',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 4,
    name: 'Weekend Special',
    code: 'WEEKEND15',
    discount: '15% Off',
    description: 'Valid on weekends only',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 5,
    name: 'Burger Combo',
    code: 'BURGER25',
    discount: '25% Off',
    description: 'Get 25% off on burger combos',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 6,
    name: 'Loyalty Reward',
    code: 'LOYAL30',
    discount: '30% Off',
    description: 'Exclusive for loyal customers',
    color: 'from-red-400 to-rose-500',
  },
];

export default function CouponsPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Available Coupons
        </h1>
        <p className="text-gray-600 text-lg font-medium">
          Save more on your favorite meals with these exclusive offers!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </>
  );
}
