import ProfileDeliveryDetails from '~/components/pofile/ProfileDeliveryDetails';
import ProfileHeader from '~/components/pofile/ProfileHeader';
import ProfileSidebar from '~/components/pofile/ProfileSidebar';
import { mockUser } from '~/constants/mokData';

export default function ProfilePage() {
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
