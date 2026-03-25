import ProfileDeliveryDetails from '~/components/pofile/ProfileDeliveryDetails';
import ProfileHeader from '~/components/pofile/ProfileHeader';
import ProfileSidebar from '~/components/pofile/ProfileSidebar';

export default function ProfilePage() {
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    ordersCount: 5,
    id: 1,
    role: 'customer',
    balance: 1000,
  };
  return (
    <>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
        My Profile
      </h1>

      {/* Profile Header Card */}
      <ProfileHeader user={mockUser} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Wallet & Quick Actions */}
        <ProfileSidebar user={mockUser} />

        {/* Right Column - Delivery Details */}
        <ProfileDeliveryDetails />
      </div>
    </>
  );
}
