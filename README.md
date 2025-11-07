# Echolex Product Website

A modern, responsive React product website for Echolex - Premium Audio Experience.

## Features

- 🎨 Modern UI/UX design with smooth animations
- 📱 Fully responsive layout
- 🎵 Simple, elegant logo design
- 🎯 Multiple sections: Hero, Features, About, CTA, Footer
- 🌈 Color palette: Orange (#ff8c00), Dark Blue (#2b3f57), White, Dark Gray

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
ecolex/
├── public/
│   └── images/          # Static images (accessed via /images/filename.png)
├── src/
│   ├── assets/
│   │   └── images/      # Images imported in components
│   ├── App.jsx          # Main application component
│   ├── Logo.jsx         # Simple logo component
│   ├── main.jsx         # React entry point
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Image Placement Guide

### Option 1: `public/images/` folder (Recommended for static assets)

Place images here if you want to reference them directly by path. These images are served as-is and not processed by Vite.

**Usage:**
```jsx
// In your component
<img src="/images/logo.png" alt="Logo" />

// Or in CSS
background-image: url('/images/hero-bg.jpg');
```

**Best for:**
- Large images
- Images referenced in HTML/CSS
- Favicons, robots.txt, etc.

### Option 2: `src/assets/images/` folder (Recommended for component images)

Place images here if you want to import them in your React components. Vite will process and optimize these images.

**Usage:**
```jsx
// Import at the top of your component
import logoImage from './assets/images/logo.png'
import productImage from './assets/images/product.jpg'

// Then use in JSX
<img src={logoImage} alt="Logo" />
<img src={productImage} alt="Product" />
```

**Best for:**
- Images used in React components
- Images that need optimization
- Images referenced in JavaScript

## Color Palette

- **Orange**: `#ff8c00`
- **Dark Blue**: `#2b3f57`
- **White**: `#ffffff`
- **Dark Gray**: `#231f20`
- **Darker Gray**: `#151c22`

## Technologies

- React 18
- Vite
- CSS3

