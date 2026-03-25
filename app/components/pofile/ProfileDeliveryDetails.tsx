import { MapPin, Phone, Home, Save, SettingsIcon } from 'lucide-react';

export default function ProfileDeliveryDetails({}) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Default Delivery Details
        </h3>

        <form className="space-y-5">
          {/* Address */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Default Delivery Address
            </label>
            <div className="relative">
              <MapPin
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />
              <textarea
                placeholder="123 Main St, New York, NY 10001"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none resize-none"
                defaultValue="123 Main Street, Apartment 4B, New York, NY 10001"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Phone Number
            </label>
            <div className="relative">
              <Phone
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                defaultValue="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Floor/Apartment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Floor / Apartment
            </label>
            <div className="relative">
              <Home
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="e.g., 4th Floor, Apt 4B"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
                defaultValue="4th Floor, Apartment 4B"
              />
            </div>
          </div>

          {/* Additional Preferences */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Delivery Instructions (Optional)
            </label>
            <textarea
              placeholder="e.g., Leave at the door, Ring the bell twice..."
              className="w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none resize-none"
              defaultValue="Please ring the bell twice and wait. Leave package with doorman if no one answers."
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6347] hover:bg-[#FF4500] text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-[#FF6347]/30 hover:shadow-xl hover:shadow-[#FF6347]/40 flex items-center justify-center space-x-2"
          >
            <Save size={20} />
            <span>Save Changes</span>
          </button>
        </form>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 mt-6">
        <h3 className="text-lg font-extrabold text-gray-900 mb-4 tracking-tight">
          Account Settings
        </h3>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <div className="flex items-center space-x-3">
              <SettingsIcon className="text-gray-600" size={20} />
              <span className="font-medium text-gray-900">Change Password</span>
            </div>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          {/* <a
                href="#"
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="text-gray-600" size={20} />
                  <span className="font-medium text-gray-900">
                    Payment Methods
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a> */}
        </div>
      </div>
    </div>
  );
}
