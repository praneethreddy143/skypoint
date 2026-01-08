import { useState } from 'react';
import type { Product } from '../types/product';

interface ProductDetailInfoProps {
  product: Product;
}

export default function ProductDetailInfo({ product }: ProductDetailInfoProps) {
  const [selectedSize, setSelectedSize] = useState('S');
  const [showDescription, setShowDescription] = useState(true);
  const [showShipping, setShowShipping] = useState(true);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">{product.category}</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
      <p className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

      {/* Delivery Info */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Order in 02:30:26 to get next day delivery</span>
      </div>

      {/* Size Selection */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-3">Select Size</p>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedSize === size
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex gap-4 mb-8">
        <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg">
          Add to Cart
        </button>
        <button className="p-4 border-2 border-purple-200 rounded-full hover:bg-purple-50 transition-colors">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Description */}
      <div className="border-t border-purple-100 pt-6 mb-4">
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="flex items-center justify-between w-full mb-4 hover:text-purple-600 transition-colors"
        >
          <span className="font-semibold text-lg">Description & Fit</span>
          <svg className={`w-5 h-5 transition-transform ${showDescription ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showDescription && <div className="text-gray-600 text-sm leading-relaxed">{product.description}</div>}
      </div>

      {/* Shipping */}
      <div className="border-t border-purple-100 pt-6">
        <button
          onClick={() => setShowShipping(!showShipping)}
          className="flex items-center justify-between w-full mb-4 hover:text-purple-600 transition-colors"
        >
          <span className="font-semibold text-lg">Shipping</span>
          <svg className={`w-5 h-5 transition-transform ${showShipping ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showShipping && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Delivery Discount</p>
                <p className="text-sm text-gray-600">Disc 50%</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-sm">Estimated Delivery</p>
                <p className="text-sm text-gray-600">3-4 Working Days</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
