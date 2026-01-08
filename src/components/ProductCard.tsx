import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group border border-purple-50 relative"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-purple-50/50 to-pink-50/50 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-300"
        />
        {product.discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            -{product.discountPercentage.toFixed(0)}% OFF
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
          {product.title}
        </h3>
        
        {/* Color dots (placeholder) */}
        <div className="flex gap-1 mb-2">
          <div className="w-4 h-4 rounded-full bg-gray-800 border border-gray-300"></div>
          <div className="w-4 h-4 rounded-full bg-blue-600 border border-gray-300"></div>
          <div className="w-4 h-4 rounded-full bg-purple-600 border border-gray-300"></div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating.toFixed(1)})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.discountPercentage > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock status */}
        <div className="mt-2">
          <span className={`text-xs px-2 py-1 rounded-full ${
            product.stock > 50 ? 'bg-green-100 text-green-700' :
            product.stock > 0 ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>
      </div>
    </div>
  );
}
