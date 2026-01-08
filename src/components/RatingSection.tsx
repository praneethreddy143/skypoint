import type { Product } from '../types/product';

interface RatingSectionProps {
  product: Product;
}

export default function RatingSection({ product }: RatingSectionProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-100">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Rating & Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <div>
          <div className="text-6xl font-bold mb-2">
            {product.rating.toFixed(1)}
            <span className="text-3xl text-gray-400">/5</span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            ({product.reviews?.length || 0} New Reviews)
          </p>
          
          {/* Rating Bars */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = product.reviews?.filter(r => Math.floor(r.rating) === star).length || 0;
              const total = product.reviews?.length || 1;
              const percentage = (count / total) * 100;
              
              return (
                <div key={star} className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm">{star}</span>
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reviews */}
        <div className="lg:col-span-2 space-y-6">
          {product.reviews?.slice(0, 2).map((review, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-6 rounded-2xl shadow-sm border border-purple-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold">{review.reviewerName}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString('en-US', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
