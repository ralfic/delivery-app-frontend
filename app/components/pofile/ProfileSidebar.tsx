import { Wallet, CreditCard, Package } from 'lucide-react';
import type { IUser } from '~/types/user';

export default function ProfileSidebar({ user }: { user: IUser }) {
  return (
    <div className="space-y-6">
      {/* Wallet Card */}
      <div className="bg-gradient-to-br from-[#FF6347] to-[#FF4500] rounded-3xl shadow-[0_8px_30px_rgb(255,99,71,0.2)] p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-extrabold tracking-tight">My Wallet</h3>
          <Wallet size={24} />
        </div>
        <p className="text-sm opacity-90 font-medium mb-2">Current Balance</p>
        <p className="text-4xl font-extrabold mb-6 tracking-tight">
          ${user.balance}
        </p>
        <button className="w-full bg-white text-[#FF6347] font-bold py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
          <CreditCard size={18} />
          <span>Top Up Balance</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6">
        <h3 className="text-lg font-extrabold text-gray-900 mb-4 tracking-tight">
          Quick Stats
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Package className="text-blue-600" size={20} />
              </div>
              <span className="text-gray-700 font-medium">Total Orders</span>
            </div>
            <span className="text-xl font-extrabold text-gray-900">
              {user.ordersCount}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Wallet className="text-green-600" size={20} />
              </div>
              <span className="text-gray-700 font-medium">Total Spent</span>
            </div>
            <span className="text-xl font-extrabold text-gray-900">$2,450</span>
          </div>
        </div>
      </div>
    </div>
  );
}
