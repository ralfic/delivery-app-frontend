import CouponCard from '~/components/coupon/CouponCard';
import { mockCoupons } from '~/constants/mokData';

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
