# Assets Images Folder

Place images here that you want to import in your React components. Vite will process and optimize these images.

## Usage Example:

```jsx
import React from 'react'
import logoImage from './assets/images/logo.png'
import productImage from './assets/images/product.jpg'

function MyComponent() {
  return (
    <div>
      <img src={logoImage} alt="Logo" />
      <img src={productImage} alt="Product" />
    </div>
  )
}
```

## Notes:
- Images imported this way are processed by Vite
- Vite can optimize and bundle these images
- Use relative paths from your component file
- Good for images used in React components

