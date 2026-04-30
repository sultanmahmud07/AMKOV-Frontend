# AMKOV Official Website - Frontend 📸

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

The official B2B/B2C e-commerce and corporate platform for **AMKOV Digital Cameras**. This project is a modern, high-performance web application built with Next.js (App Router), React, and Tailwind CSS, designed to provide a premium browsing and purchasing experience for consumers and distributors worldwide.

## ✨ Key Features

* **Modern E-Commerce Experience:** Full product catalog with categories, advanced filtering, and dynamic product detail pages featuring image galleries and tabbed specifications.
* **Premium UI/UX:** Built with Tailwind CSS and enhanced with `framer-motion` for smooth, professional animations.
* **Optimized Performance:** Utilizes Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG) alongside custom `react-loading-skeleton` loaders to eliminate layout shift and provide a snappy experience.
* **Complete User Flow:** Includes authentication (Login/Register/Reset Password), User Dashboard, Cart, Checkout, and Wishlist functionalities.
* **Content Management:** Dynamic News & Blog section, comprehensive Download/Resources center, and static legal pages (Privacy Policy, Terms of Service).
* **Global Compliance:** Integrated Cookie Consent management system.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Library:** [React](https://reactjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
* **UI Utilities:** `react-loading-skeleton`, `react-confetti`

## 📂 Project Structure

The application follows the Next.js App Router architecture:

```text
src/
├── app/                  # Next.js App Router pages (Home, Products, News, Dashboard, etc.)
│   ├── (commonLayout)/   # Routes sharing the main header/footer
│   ├── (dashboardLayout)/# Routes sharing the user dashboard sidebar
│   └── layout.tsx        # Root layout including global components (e.g., Cookie Consent)
├── components/           # Reusable UI components
│   ├── loaders/          # Custom skeleton loaders
│   ├── pages/            # Page-specific components (e.g., ProductDetails, NewsList)
│   └── shared/           # Buttons, Inputs, Modals, Navbar, Footer
├── lib/                  # Utility functions, helpers, and constants
├── services/             # API calls (e.g., product.service.ts, blog.service.ts)
├── types/                # TypeScript interfaces and types
└── styles/               # Global CSS and Tailwind configurations

```

## 🔗 Live Website  
* **Production:** [https://amkov.com](https://amkov.com)
* **Backend API:** [https://api.amkov.com](https://api.amkov.com) 

---