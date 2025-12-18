A fully functional, modern e-commerce web application built with React, Vite, and Tailwind CSS, featuring authentication, cart & checkout flow, category-based product browsing, and dark/light theme support.
This project is designed to reflect real-world e-commerce standards and demonstrate clean architecture, scalable state management, and polished UI/UX.

✨ Features

🛍 Product & Catalog

Product listing with category tabs

Product details page with image, price, and description

Correct product–image–category mapping (single source of truth)

Clean and responsive product cards

🧾 Cart & Checkout

Add to cart / remove from cart

Update product quantity

Cart persistence using localStorage

Checkout flow with order summary

Order confirmation page

👤 Authentication

Login & Signup

Protected routes (orders & account)

Guest users can add items to cart

Login required to place order and view order history

📦 Orders

Order history page for logged-in users

Auth-protected order access

🎨 UI / UX

Clean, modern UI

Dark / Light theme toggle

Fully responsive (mobile-first)

Loading states & empty states

Reusable components & consistent design system

🧠 Tech Stack

Frontend

React

Vite

Tailwind CSS

React Router

State Management

Context API

Persistence

LocalStorage (Auth & Cart)

Version Control

Git & GitHub

src/
│
├── components/
│   ├── Auth/
│   ├── Banner/
│   ├── Category/
│   ├── Navbar/
│   ├── Products/
│   └── Shared/
│
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── ProductContext.jsx
│   └── AppProviders.jsx
│
├── data/
│   └── products.js
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── OrderConfirmation.jsx
│   ├── Account.jsx
│   ├── Login.jsx
│   └── Signup.jsx
│
└── main.jsx

git clone https://github.com/Heetraval07/eshop-ecommerce.git

cd eshop-ecommerce

npm install

npm run dev

http://localhost:5173
