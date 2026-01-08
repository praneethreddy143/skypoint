import { motion } from 'framer-motion';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  minPrice: number;
  setMinPrice: (value: number) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
  minRating: string;
  setMinRating: (value: string) => void;
  categories: string[];
  categoryCounts: Record<string, number>;
  totalProducts: number;
  clearAllFilters: () => void;
}

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  categories,
  categoryCounts,
  totalProducts,
  clearAllFilters,
}: FilterSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-64 flex-shrink-0"
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl sticky top-24 border border-purple-100">
        <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Filter Products
        </h3>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900">Category</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-2">
            <label className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === 'all'}
                  onChange={() => setSelectedCategory('all')}
                  className="w-4 h-4 text-purple-600"
                />
                <span className="text-sm">All Products</span>
              </div>
              <span className="text-xs text-gray-500">{totalProducts}</span>
            </label>
            {categories.map(category => (
              <label key={category} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="w-4 h-4 text-purple-600"
                  />
                  <span className="text-sm capitalize">{category}</span>
                </div>
                <span className="text-xs text-gray-500">{categoryCounts[category]}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900">Price</h4>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-600 mb-2">Min: ${minPrice}</label>
              <input
                type="range"
                min="0"
                max="2000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-2">Max: ${maxPrice}</label>
              <input
                type="range"
                min="0"
                max="2000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Min Rating</h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg">
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === String(rating)}
                  onChange={() => setMinRating(String(rating))}
                  className="w-4 h-4 text-purple-600"
                />
                <div className="flex items-center gap-1">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="text-sm text-gray-600">& up</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearAllFilters}
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
        >
          Clear All Filters
        </button>
      </div>
    </motion.aside>
  );
}
