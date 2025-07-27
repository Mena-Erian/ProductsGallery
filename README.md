# Products Gallery Web Application

## 🧾 Overview

This is a responsive and modern product gallery web application built with **Angular v20**, integrated with the **Fake Store API**. Users can browse, search, sort, and view product details. The application uses advanced UI components, loading states, and optimized rendering techniques.

---

## 🚀 Key Features

Below are the main capabilities and enhancements implemented in the project to improve the user experience and performance:

- 🔍 **Search** functionality using a custom pipe to filter products by name.
- ↕️ **Sort** products by:
  - Name (A–Z, Z–A)
  - Price (Low → High / High → Low) using standard TypeScript logic.
- 🌙 **Dark Mode** toggle for user theme preference.
- ⭐ **Product Rating Display** visible on both product cards and the details page.
- ❌ **Error Handling** using a global HTTP interceptor with user-friendly PrimeNG toast notifications.
- ⏳ **Loading Indicators & Empty States** handled by ngx-spinner via HTTP interceptors.
- 📡 **RxJS Signals** for efficient reactive state management.
- 📦 **Category-Based Suggestions** shown on the product details page to promote relevant browsing.
- 🚦 **Lazy Loading** for route modules and a custom `defer` directive to delay element loading until in view used it with Suggestions in product Details page.
- 🎞️ **Scroll-Based Card Animations** to improve UI engagement as users scroll.
- 🛒 **Cart Functionality** is fully implemented on the frontend logic level, while backend integration is still in progress and planned for a future update.
- 🔐 **Authentication and Layout Components** scaffolded for upcoming features.

---

## 🎯 Objective

Deliver a high-performance, cleanly structured product gallery application with user-friendly features such as search, filtering, sorting, detailed product views, and smooth visual experience.

---

## 🧰 Tech Stack Used

| Layer      | Tools                  |
| ---------- | ---------------------- |
| Framework  | Angular v20 (SSR, SSG) |
| Styling    | Tailwind CSS, Flowbite |
| UI Library | PrimeNG                |
| Spinner    | ngx-spinner            |
| API        | Fake Store API         |

---

## 📦 Pages & Features

### 📃 Products Page

- Fetch product data from Fake Store API
- Display cards with product image, name, rating
- Enable custom search and sorting options
- Navigate to detailed view
- Scroll-triggered card animation on appearance

### 🔎 Filtering & Sorting

- Case-insensitive search with a custom Angular pipe
- Functional sorting by name and price using methods

### 🧾 Product Details Page

- Dynamic route: `/products/:id`
- Product information includes name, image, description, price, rating, and category
- Displays related product suggestions based on the same category and using here lazy loading

### 💡 Enhancements

- Dark mode UI toggle
- Product rating visualization
- Centralized HTTP error and loading state handling by the interceptors
- Reusable layout and authentication components prepared for future modules
- Cart logic (currently awaiting backend integration)

---

## 🔗 Live Demo

[🔗 View Deployed App](https://products-gallery-five.vercel.app)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/Mena-Erian/ProductsGallery.git

# Install dependencies
npm install

# Run the app
ng serve
```

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.
