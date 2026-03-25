export default function OrderForm() {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Delivery Information
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Delivery Address
            </label>
            <textarea
              placeholder="123 Main St, Apt 4B, New York, NY 10001"
              className="w-full px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Promo Code
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-1 px-4 py-3.5 bg-gray-100 border-transparent rounded-xl focus:bg-white focus:border-[#FF6347] focus:ring-2 focus:ring-[#FF6347]/20 transition-all duration-300 outline-none"
              />
              <button
                type="button"
                className="px-6 py-3.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl transition-all duration-300 font-semibold"
              >
                Apply
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
