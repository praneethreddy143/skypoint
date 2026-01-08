import type { Product } from '../types/product';
import Header from './Header';
import BackgroundAnimation from './BackgroundAnimation';
import ProductImageGallery from './ProductImageGallery';
import ProductDetailInfo from './ProductDetailInfo';
import RatingSection from './RatingSection';
import ProductCard from './ProductCard';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  allProducts: Product[];
}

export default function ProductDetail({ product, onBack, allProducts }: ProductDetailProps) {
  const images = product.images?.length > 0 ? product.images : [product.thumbnail];
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header onNavigate={onBack} showBackButton={true} backButtonText="Back to Products" />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <BackgroundAnimation />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ProductImageGallery images={images} productName={product.title} />
              <ProductDetailInfo product={product} />
            </div>

            <div className="mt-16">
              <RatingSection product={product} />
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                You might also like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} onClick={() => {}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
