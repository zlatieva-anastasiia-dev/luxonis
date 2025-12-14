# OAK 4 D Product Page - Frontend Test Task

This project is a mock e-commerce product page developed for the OAK 4 D camera. It demonstrates a modern, responsive frontend architecture using **Next.js** and **Tailwind CSS**.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Code Quality**: [Biome](https://biomejs.dev/)

## Features

### 1. Product Catalog Simulation (`/products`)

A listing page simulating a store catalog.

- **Note:** For demonstration purposes, **only the first product (OAK 4 D Pro)** is fully interactive.
- The active item is indicated by a `cursor-pointer`.

### 2. Product Details Page

A comprehensive, responsive product page.

- **Image Gallery:** Interactive carousel (built with Embla/Shadcn).
- **Structured Data Rendering:**
  - **Tabs System:** Separation of "Description", "Technical Specifications", and "Package Contents".
  - **Dynamic Tables:** The "Sensor Specification" table handles complex data arrays cleanly on all screen sizes (`overflow-x-auto`).
- **Variant Selector:** Interactive mock state for toggling between camera models (e.g., Auto Focus vs. Wide).

## 📁 Project Structure

```
luxonis/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page (redirects to products)
│   └── products/                # Products section
│       ├── page.tsx             # Product listing page
│       └── [productId]/         # Dynamic product pages
│           └── page.tsx         # Individual product page
├── components/                   # React components
│   ├── layout/                  # Layout components
│   │   └── Header.tsx           # Site header with navigation
│   ├── product/                 # Product-specific components
│   │   ├── ProductItem.tsx      # Product card component
│   │   ├── ProductCarousel.tsx  # Image carousel
│   │   ├── ProductTabs.tsx      # Tabbed product info
│   │   └── ProductCameraVariants.tsx # Camera variant selector
│   ├── ui/                      # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── carousel.tsx
│   │   ├── table.tsx
│   │   └── tabs.tsx
│   ├── BulletList.tsx           # Reusable bullet list
│   └── StatusBadge.tsx          # Product status indicators
├── lib/                         # Utility functions and data
│   ├── api/                     # API functions
│   │   └── products.ts          # Product data fetching
│   ├── mock/                    # Mock data
│   │   └── product.ts           # Product mock data
│   ├── types/                   # TypeScript type definitions
│   │   └── product.ts           # Product-related types
│   └── utils.ts                 # Utility functions (cn helper)
├── public/                      # Static assets
│   ├── logo-white.svg           # Luxonis logo
│   └── *.webp                   # Product images
├── components.json              # shadcn/ui configuration
├── biome.json                   # Biome configuration
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## Running Project

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Lint + Prettier

- `npm run lint` - Run Biome linting
- `npm run format` - Format code with Biome
