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

### 2. Product Details Page (`/products/productId`)

A comprehensive, responsive product page.

- **Image Gallery:** Interactive carousel (built with Embla/Shadcn).
- **Structured Data Rendering:**
  - **Tabs System:** Separation of "Description", "Technical Specifications", and "Package Contents".
  - **Dynamic Tables:** The "Sensor Specification" table handles complex data arrays cleanly on all screen sizes (`overflow-x-auto`).
- **Variant Selector:** Interactive mock state for toggling between camera models (e.g., Auto Focus vs. Wide).

## Running Project

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Lint + Prettier

- Run Biome linting

```bash
npm run lint
```

- Format code with Biome

```bash
npm run format
```
