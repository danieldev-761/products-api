# ShopStyle - Product Catalog

> A modern web application to explore and manage a product catalog with search, pagination, and a responsive interface.

## Description

**ShopStyle** is a dynamic product catalog built with vanilla JavaScript, which allows users to:
- Explore a list of products with details
- Search for products in real time
- Navigate between product pages
- View information in a clear and organized manner

The application is designed with a modular approach and uses JavaScript classes to keep the code clean and reusable.

## Features

- **Product Search**: Real-time filtering
- **Smart Pagination**: Page navigation system
- **Responsive Design**: Interface adaptable to any device (Tailwind CSS)
- **Modern Interface**: Sticky navbar and clean design
- **Modular Architecture**: Code organized into reusable components
- **Dynamic Loading**: Updated data without page refresh

## Project Structure

```
products-api/
├── index.html                 # Main HTML file
├── README.md                  # This file
└── js/
    ├── app.js                 # Main application file
    ├── api/
    │   └── productsApi.js     # Product API connection
    ├── classes/
    │   ├── Pagination.js      # Pagination management class
    │   └── Product.js         # Product model class
    └── ui/
        ├── handleSearch.js    # Search logic
        ├── renderProducts.js  # Product list rendering
        └── renderPagination.js # Pagination controls rendering
```

## Installation

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Tailwind CSS CDN)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd products-api
   ```

2. **Open in browser**
   ```bash
   # Option 1: Open directly
   open index.html
   
   # Option 2: Use a local server (recommended)
   python3 -m http.server 8000
   # Then access: http://localhost:8000
   ```

## Usage

### Browse Products
1. The application loads the first 20 products automatically
2. Use the **Next** and **Previous** buttons to change pages
3. The current page number is displayed in the center

### Search Products
1. Type the product name in the search field
2. Results are filtered automatically
3. Click **Clear Search** to view all products again

## Main Components

### `Pagination` Class
Manages pagination logic:
- Increments/decrements the current page
- Calculates the `skip` value for API queries
- Stores the total number of products

### `renderProducts()`
Renders the product list in the DOM with:
- Product name
- Price
- Description
- Image

### `renderPagination()`
Updates navigation controls:
- Current page number
- State of next/previous buttons

### `getProducts()`
Makes requests to the API:
- Fetches products by page
- Parameters: `limit` and `skip`

## Dependencies

- **Tailwind CSS** v4 (via CDN)
- JavaScript ES6+ (Native modules)

## Usage Flow Example

```javascript
// 1. Load initial products
const data = await getProducts(20, 0);

// 2. Render on the page
renderProducts(container, data.products);

// 3. Update pagination
renderPagination(pageElement, pagination);

// 4. On next page
pagination.nextPage(); // skip: 20
await loadProducts();
```

## Development

### Adding new features

To add new filters or features:

1. **Create new module** in `js/ui/` if it's UI-related
2. **Import** in `app.js`
3. **Integrate** with existing events

### Example: Add price filter

```javascript
// js/ui/filterByPrice.js
export function initializePriceFilter() {
  const priceFilter = document.getElementById('priceFilter');
  priceFilter.addEventListener('change', async (e) => {
    const maxPrice = e.target.value;
    const data = await getProducts(pagination.limit, pagination.skip, maxPrice);
    renderProducts(productsContainer, data.products);
  });
}
```

## License

This project is open source and available under the MIT license.

## Author

Daniel Echeverría - Developed as part of the RIWI program 

## Support

If you find problems or have suggestions:
- Open an issue in the repository
- Contact the development team


