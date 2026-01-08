import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import ProductsTable from './components/ProductsTable'
import ProductDetail from './components/ProductDetail'
import type { Product } from './types/product'
import './App.css'

function App() {
  const [showCatalog, setShowCatalog] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [allProducts, setAllProducts] = useState<Product[]>([])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  const handleBackToCatalog = () => {
    setSelectedProduct(null)
  }

  return (
    <AnimatePresence mode="wait">
      {!showCatalog ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage onEnter={() => setShowCatalog(true)} />
        </motion.div>
      ) : selectedProduct ? (
        <motion.div
          key="detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToCatalog}
            allProducts={allProducts}
          />
        </motion.div>
      ) : (
        <motion.div
          key="catalog"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <ProductsTable 
            onProductClick={handleProductClick}
            onProductsLoad={setAllProducts}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
