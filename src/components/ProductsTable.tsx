import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Product, ProductsResponse } from '../types/product';
import Header from './Header';
import BackgroundAnimation from './BackgroundAnimation';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

interface ProductsTableProps {
  onProductClick: (product: Product) => void;
  onProductsLoad?: (products: Product[]) => void;
}

export default function ProductsTable({ onProductClick, onProductsLoad }: ProductsTableProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [minRating, setMinRating] = useState('');
  const [stockStatus, setStockStatus] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data: ProductsResponse) => {
        setProducts(data.products);
        onProductsLoad?.(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [onProductsLoad]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return uniqueCategories.sort();
  }, [products]);

  // Category counts
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat] = products.filter(p => p.category === cat).length;
      return acc;
    }, {} as Record<string, number>);
  }, [products, categories]);

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesMinPrice = product.price >= minPrice;
      const matchesMaxPrice = product.price <= maxPrice;
      const matchesRating = minRating === '' || product.rating >= parseFloat(minRating);
      const matchesStock = 
        stockStatus === 'all' ||
        (stockStatus === 'in-stock' && product.stock > 0) ||
        (stockStatus === 'low-stock' && product.stock > 0 && product.stock < 50) ||
        (stockStatus === 'out-of-stock' && product.stock === 0);

      return matchesSearch && matchesCategory && matchesMinPrice && 
             matchesMaxPrice && matchesRating && matchesStock;
    });

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [products, searchTerm, selectedCategory, minPrice, maxPrice, minRating, stockStatus, sortBy]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setMinPrice(0);
    setMaxPrice(2000);
    setMinRating('');
    setStockStatus('all');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="text-xl font-semibold text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="text-xl font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <BackgroundAnimation />

      {/* Content */}
      <div className="relative z-10">
      {/* Promotional Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 mx-6 mt-6 rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm bg-opacity-90 relative"
      >
        <div className="flex items-center justify-between p-8 md:p-12 relative z-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              20% OFF ONLY TODAY AND<br />GET SPECIAL GIFT!
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Today only, enjoy a stylish 20% off and receive an exclusive gift!<br />
              Elevate your wardrobe now!
            </p>
          </div>
          <div className="hidden md:block w-64 h-48 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
          </div>
        </div>
      </motion.div>

          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex gap-8">
              {/* Sidebar Filters */}
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                minRating={minRating}
                setMinRating={setMinRating}
                categories={categories}
                categoryCounts={categoryCounts}
                totalProducts={products.length}
                clearAllFilters={clearAllFilters}
              />

              {/* Main Content */}
              <div className="flex-1">
                {/* Results Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold">{filteredProducts.length}</span> of{' '}
                    <span className="font-semibold">{products.length}</span>
                  </div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length === 0 ? (
                    <div className="col-span-full text-center py-12 text-gray-500">
                      No products found
                    </div>
                  ) : (
                    filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => onProductClick(product)}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
