import { Camera } from 'lucide-react';
import type { IUser } from '~/types/user';

export default function ProfileHeader({ user }: { user: IUser }) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 mb-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6347] to-[#FF4500] flex items-center justify-center text-white text-4xl font-extrabold shadow-lg">
            JD
          </div>
          <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors border-2 border-white">
            <Camera size={18} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">
            {user.name}
          </h2>
          <p className="text-gray-600 font-medium mb-3">john.doe@example.com</p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {/* <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold">
              Premium Member
            </span> */}
            {/* <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
              {user.ordersCount} Orders
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
