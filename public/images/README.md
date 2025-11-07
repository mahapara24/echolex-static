# Public Images Folder

Place your static images here. These images can be accessed directly via URL paths.

## Usage Examples:

### In React Components:
```jsx
<img src="/images/logo.png" alt="Logo" />
<img src="/images/product.jpg" alt="Product" />
```

### In CSS:
```css
.hero {
  background-image: url('/images/hero-bg.jpg');
}
```

### In HTML:
```html
<img src="/images/logo.png" alt="Logo" />
```

## Notes:
- Images in this folder are served as-is (not processed by Vite)
- Use paths starting with `/images/` (the leading `/` is important)
- Good for large images, backgrounds, or images referenced in CSS

