### 🍰 Next.js e-Commerce Cake Shop

A modern **e-commerce web application** built with **Next.js, TypeScript, Redux Toolkit, Prisma, and Tailwind CSS.**
The app allows users to browse cakes, view detailed product pages, and interact with a fully functional backend powered by **Next.js App Router API routes.** An admin section enables cake management and email handling, making the project a complete full-stack showcase.

The project was built with a strong focus on **clean architecture, scalability,** and **real-world patterns** commonly used in production-grade React and Next.js applications.

## 🌐 Live Demo:
👉 https://torteodpapira.vercel.app/

---

## Demo / Screenshot

![Cake Shop](https://lwmchmwtdietfkcnhyab.supabase.co/storage/v1/object/public/cake-images/torteodpapira.jpg)

---

## Technologies Used

- **Next.js (App Router)** – Full-stack React framework
- **TypeScript** – Type-safe development
- **Redux Toolkit** – Global state management
- **Prisma** – Type-safe ORM
- **SQLite / PostgreSQL** – Database (via Prisma)
- **Tailwind CSS** – Utility-first styling
- **Next.js API Routes** – Backend logic
- **Jest** – Unit testing
- **React Testing Library** – Component testing

---

## Features

### 🛍️ User Features

- Browse a list of cakes with sorting options
- View detailed cake pages
- Responsive layout optimized for mobile and desktop
- Smooth UI interactions with reusable components
- Infinite scroll support for scalable product lists

---

### 🛠️ Admin Features

- Admin API routes for managing cakes
- Create, update, and delete cakes
- Dynamic routes for individual cake management
- File upload handling for cake images
- Cookie-based utilities for server-side logic
- Email handling via a dedicated mailer API route

---

### 🧠 Technical Highlights

- Clean separation of concerns (UI, state, API, utilities)
- Redux slices structured by domain
- Fully typed API responses
- Reusable UI components (Modal, Overlay, Spinner, etc.)
- Custom hooks for shared behavior
- Test coverage for reducers, utilities, and components

---

## Folder Structure

<!-- START_FOLDER_STRUCTURE -->
<!-- END_FOLDER_STRUCTURE -->

---

## Quick Start

### Clone & Install

```bash
git clone https://github.com/agaribovic/cake-shop.git
cd cake-shop
npm install
```

---

## Environment Variables

Create a .env file in the root directory and configure the following:

```bash
- NEXT_PUBLIC_BASE_URL
- DATABASE_URL
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- SUPABASE_BUCKET
- JWT_SECRET
- ADMIN_EMAIL
- ADMIN_PASSWORD_HASH
- EMAIL_TO
- RESEND_API_KEY
```

---

## Prisma Setup

Run Prisma migrations and generate the client:

```bash
npx prisma migrate dev
npx prisma generate
```

---

## Development

Start the development server:

```bash
npm run dev
```

- App runs at: http://localhost:3000
- Uses Next.js App Router
- API routes are available under ```bash/api```

---

## Testing
Run unit and component tests:

```bash
npm run test
```

- Uses Jest
- Includes tests for Redux slices, utilities, and UI components

---

## Build for Production
```bash
npm run build
npm run start
```

- Optimized production build
- Server-side rendering and API routes enabled

---

### Project Goals

This project was built to:
- Demonstrate **full-stack Next.js skills**
- Apply **React and Next.js patterns**
- Showcase **Redux Toolkit best practices**
- Use **Prisma** in a real application context
- Build maintainable, scalable, and testable code

---

## Future Improvements

 – Enhance security and session management with JWT/cookies
 – Implement a full-featured cart and smooth checkout experience
 – Allow users to view and track past orders with detailed information
 – Add advanced management for cakes, orders, users, and analytics
 – Support Stripe/PayPal or other payment gateways
 – Track orders from placement to delivery in real time
 – Visualize sales, popular items, and user activity with charts
 – Provide real-time messaging between customers and admins
 – Optimize media delivery using Next.js Image component
 – Implement critical flow tests with Playwright or Cypress

---