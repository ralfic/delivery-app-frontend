export default function ShopsFilter() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border-transparent rounded-full text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition-all duration-300">
          All Categories
        </button>

        <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border-transparent rounded-full text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition-all duration-300">
          Sort by: Popular
        </button>

        <button className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border-transparent rounded-full text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#FF6347] transition-all duration-300">
          Rating: All
        </button>
      </div>
    </div>
  );
}
