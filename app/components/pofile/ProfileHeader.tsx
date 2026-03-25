import type { IUser } from '~/types/user';
import { AvatarImage, AvatarFallback, Avatar } from '../ui/avatar';

export default function ProfileHeader({ user }: { user: IUser }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 mb-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar */}
        <Avatar className="w-24 h-24">
          <AvatarImage src="" alt={user.name} />

          <AvatarFallback className="bg-gradient-to-br from-[#FF6347] to-[#FF4500] text-white text-4xl font-extrabold">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>

        {/* User Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
            {user.name}
          </h2>
          <p className="text-gray-600 font-medium mb-3">john.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}
