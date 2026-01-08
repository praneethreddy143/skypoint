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

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
