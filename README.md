# Product Catalog - React TypeScript Application

A modern, animated e-commerce product catalog built with React, TypeScript, Vite, and Tailwind CSS v4. Features a beautiful landing page, filterable product grid, and detailed product views with smooth animations.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff)

## ✨ Features

- 🎨 **Modern UI/UX**: Glassmorphism design with animated gradient backgrounds
- 🎭 **Smooth Animations**: Powered by Framer Motion for fluid page transitions
- 🔍 **Advanced Filtering**: Multi-criteria product filtering (category, price, rating, stock)
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎯 **Type-Safe**: Full TypeScript implementation
- 🧩 **Component Architecture**: Reusable components (all under 150 lines)
- 🚀 **Fast Performance**: Optimized rendering with React 19 and Vite
- 🎪 **Product Detail Views**: Comprehensive product pages with image galleries and reviews

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx                  # Navigation header (62 lines)
│   ├── BackgroundAnimation.tsx     # Animated gradient orbs (82 lines)
│   ├── LandingPage.tsx            # Animated landing page (179 lines → needs optimization)
│   ├── ProductsTable.tsx          # Main catalog view (210 lines → needs optimization)
│   ├── ProductCard.tsx            # Individual product card (76 lines)
│   ├── FilterSidebar.tsx          # Filter controls (157 lines → needs optimization)
│   ├── ProductDetail.tsx          # Product detail page (56 lines)
│   ├── ProductDetailInfo.tsx      # Product info section (120 lines)
│   ├── ProductImageGallery.tsx    # Image gallery component (37 lines)
│   └── RatingSection.tsx          # Reviews and ratings (79 lines)
├── types/
│   └── product.ts                 # TypeScript interfaces
├── App.tsx                        # Main app with routing
└── main.tsx                       # Entry point

## 🎨 Design Features

- **Purple/Pink Gradient Theme**: Consistent color scheme across all pages
- **Glassmorphism**: Semi-transparent panels with backdrop blur
- **Animated Backgrounds**: Floating gradient orbs and particles
- **Smooth Transitions**: Page transitions and hover effects
- **Card-based Layout**: Modern product cards with hover animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd test-test

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **React 19.2.0** - UI library with latest features
- **TypeScript 5.9.3** - Type safety and better DX
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **DummyJSON API** - Product data source

## 📦 Key Components

### Header
Reusable navigation header with logo, search, wishlist, and cart icons. Supports back navigation for detail pages.

### BackgroundAnimation
Animated gradient orbs and floating particles for visual appeal across all pages.

### ProductsTable (Main Catalog)
- Sidebar with category filters, price sliders, and rating filters
- Product grid with search and sort functionality
- Promotional banner
- Real-time filtering without page reload

### ProductCard
Reusable card component displaying:
- Product image with discount badge
- Title, rating, and price
- Stock status indicator
- Hover animations

### ProductDetail
Comprehensive product view with:
- Image gallery with thumbnails
- Size selection
- Add to cart functionality
- Expandable description and shipping info
- Reviews and ratings section
- Related products carousel

## 🎯 Features in Detail

### Filtering System
- **Category**: Radio button selection
- **Price Range**: Dual sliders (min/max)
- **Rating**: Minimum rating filter
- **Stock Status**: In stock / Low stock / Out of stock
- **Search**: Real-time text search
- **Sort**: By popularity, price, or rating

### Performance Optimizations
- Removed heavy animations from product grid for instant rendering
- Used CSS transitions instead of Framer Motion for hover effects
- Memoized filtered products with React.useMemo
- Optimized component re-renders

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

