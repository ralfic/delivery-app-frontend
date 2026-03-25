import { SettingsIcon, ChevronRight } from 'lucide-react';
import DeliveryDetailsForm from './DeliveryDetailsForm';

export default function ProfileDeliveryDetails() {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Default Delivery Details
        </h3>

        <DeliveryDetailsForm />
      </div>

      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 mt-6">
        <h3 className="text-lg font-extrabold text-gray-900 mb-4 tracking-tight">
          Account Settings
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <SettingsIcon
                className="text-gray-600 group-hover:text-gray-900 transition-colors"
                size={20}
              />
              <span className="font-medium text-gray-900">Change Password</span>
            </div>
            <ChevronRight
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
