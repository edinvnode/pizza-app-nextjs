## Paper Cakes Gallery – Next.js App

A simple and modern gallery website built with Next.js 15.5.3 and Tailwind CSS 4.1.
The app displays high-quality images of handcrafted paper cakes in a clean, responsive layout.

## Features

⚡ Built on the latest Next.js 15.5.3

🎨 Styled with Tailwind CSS 4.1

🖼️ Responsive image gallery using next/image

📱 Mobile-friendly layout

🔧 Zero-config local development

## Install dependencies:

npm install

Running the App Locally

## Start the development server:

npm run dev

The app will be available at:

http://localhost:3000

## Technologies Used

Next.js 15.5.3

React

Tailwind CSS 4.1

TypeScript / JavaScript (depending on your project)

next/image for optimized images

## Build for Production

npm run build
npm start

## Customization

Add your own images inside the /public/images/ folder

Update the gallery component to include more items

Tailwind configuration is fully customizable via tailwind.config.js

## Folder structure

'''
| .gitignore
| jest.config.ts
| jest.setup.ts
| next.config.ts
| package-lock.json
| package.json
| postcss.config.mjs
| prisma.config.ts
| README.md
| tailwind.config.ts
| talwind.config.ts
| tsconfig.json
|
+---app
| | layout.tsx
| | page.tsx
| |
| +---about
| | page.tsx
| |
| \---api
| +---admin
| | route.ts
| |
| +---cakes
| | | route.ts
| | |
| | +---utils
| | | cookies.ts
| | | fileupload.ts
| | |
| | \---[id]
| | route.ts
| |
| \---mailer
| route.ts
|
+---components
| +---Card
| | Card.tsx
| |
| +---Footer
| | Footer.tsx
| |
| +---Form
| | Form.tsx
| |
| +---Header
| | Header.tsx
| |
| +---Modal
| | Modal.tsx
| |
| +---Overlay
| | Overlay.tsx
| |
| +---Sort
| | Sort.tsx
| |
| \---Spinner
| Spinner.tsx
|
+---prisma
| dev.db
| prisma.ts
| schema.prisma
|
+---redux
| | ReduxProvider.tsx
| | store.ts
| |
| +---api
| | adminApi.ts
| | cakeApi.ts
| | mailerApi.ts
| |
| \---slices
| authSlice.ts
| cakeDataSlice.ts
| modalSlice.ts
|
+---styles
| globals.css
|
+---utils
| formatDate.ts
| reviews.ts
| sortCakes.ts
| useInfiniteScroll.ts
|
\---**tests**
| mockCakes.ts
|
+---components
| Modal.test.tsx
| Sort.test.tsx
|
+---slices
| cakeDataSlice.test.ts
| modalSlice.test.ts
|
\---utils
formatDateBS.test.ts
sortCakes.test.ts
'''

## License

This project is free to use for personal or educational purposes.
