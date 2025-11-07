import React from 'react'

// Example component showing how to use images

const ImageExample = () => {
  // Method 1: Import from src/assets (Recommended for component images)
  // Uncomment and use when you have images in src/assets/images/
  // import logoImage from './assets/images/logo.png'
  // import productImage from './assets/images/product.jpg'

  return (
    <div>
      {/* Method 1: Imported images from src/assets */}
      {/* 
      <img src={logoImage} alt="Logo" />
      <img src={productImage} alt="Product" />
      */}

      {/* Method 2: Static images from public folder */}
      {/* 
      <img src="/images/logo.png" alt="Logo" />
      <img src="/images/product.jpg" alt="Product" />
      <img src="/images/hero-bg.png" alt="Background" />
      */}

      {/* Method 3: Background image in CSS */}
      {/* 
      <div className="hero-bg" style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      </div>
      */}
    </div>
  )
}

export default ImageExample

