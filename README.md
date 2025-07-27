# Products Gallery Web Application

## Project Overview

This web application provides a modern, fully responsive product gallery integrated with the Fake Store API.

Users can browse, filter, sort, and view detailed information on products powered by Angular’s latest features and optimized for performance.

---

## Key Features

- Standalone Angular v20 components with optimized Server-Side Rendering (SSR) and Static-Site Generation (SSG).
- Utility-first styling with Tailwind CSS and accessible UI components from Flowbite.
- PrimeNG modules for advanced search bars, buttons, form controls, toasts, and more.
- ngx-spinner loading screens during API calls and route transitions via a loading interceptor.
- API error handling with fallback UI using PrimeNG toast notifications in an error interceptor.
- Search functionality:
  -Search by input user and use Custom pipe to filter product based on search
- Sorting functionality:
  - Sort products by name (A–Z, Z–A)
  - Sort by price (Low to High, High to Low)
- Lazy-loaded route modules and a custom defer directive to emit display events on demand.
- Category-based suggestions on each Product Details page to boost engagement.

---

## Objective

Provide users with seamless product browsing, filtering, sorting, and cart management features in a responsive, high-performance web application.

---

## Tech Stack Used

### Framework

- Angular v20 (standalone components, SSR, SSG)

### Styling

- Tailwind CSS
- Flowbite

### UI Components

- PrimeNG

### Loading Indicator

- ngx-spinner

### Data Source

- Fake Store API

---

## Features Breakdown

### Products Page

#### Data Fetching

- Fetch product list from Fake Store API
- Handle API errors with a fallback UI

#### Display

- Render product cards with name and image
- Click a card to navigate to the Product Details page

#### Filtering & Sorting

- Case-insensitive search by product name
- Sort options for price (Low→High / High→Low)
- Sort options for name (A→Z / Z→A)

### Product Details Page

#### Dynamic Routing

- Route: `/products/:id`

#### Display Details

- Show product name, image, full description, price, category, and rating

#### Dynamic Suggestions

- Fetch and display related items from the same category

---

## Enhancements

- Dark mode toggle
- Product rating display
- Lazy Loading for faster initial load
- Enhanced product listing interactions
- Loading screen via ngx-spinner during API calls and routing

---

## Demo

Live Demo: [Replace with your live demo link]()

---

## Screenshots

---

## Installation

Clone the repository

```bash
git clone https://github.com/yourusername/products-gallery.git
```
