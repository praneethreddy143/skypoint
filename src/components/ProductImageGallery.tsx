import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden mb-4 aspect-square shadow-xl border border-purple-100">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-full object-contain p-8"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.slice(0, 4).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden aspect-square border-2 transition-all ${
              selectedImage === idx ? 'border-purple-500 shadow-lg' : 'border-purple-100 hover:border-purple-300'
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-contain p-2" />
          </button>
        ))}
      </div>
    </div>
  );
}
