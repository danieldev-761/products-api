// const formSearch = document.getElementById('prd-search');

// formSearch.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const searchText = this.querySelector('input').value;

//     if(searchText.trim().length === 0){
//         return;
//     }

//     searchProducts(searchText);

//     this.querySelector('input').value = '';
// });

// async function searchProducts(text){

//     const searchResults = document.getElementById('search-results');
//     const quantity = document.getElementById('quantity');

//     const response = await fetch(`https://dummyjson.com/products/search?q=${text}`);
//     const products = await response.json();

//     quantity.textContent = products.products.length;

//     searchResults.innerHTML = '';

//     for(let product of products.products){

//         const {title, thumbnail, price, description} = product;

//         searchResults.innerHTML += ` 
//             <div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                
//                 <!-- Imagen -->
//                 <div class="h-56 bg-gray-200 flex items-center justify-center relative">
//                     <img src="${thumbnail}" 
//                         alt="Producto" 
//                         class="w-full h-full object-cover">
//                     <span class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
//                         STOCK
//                     </span>
//                 </div>

//                 <div class="p-5">
//                     <h3 class="text-gray-900 font-bold text-xl mb-2">${title}</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         ${description}
//                     </p>

//                     <div class="flex items-center justify-between">
//                         <div>
//                             <span class="text-2xl font-bold text-emerald-600">$${price}</span>
//                         </div>
                       
//                         <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             </div>`;
//     }
// }




// async function getProducts(){

//     const productsContainer= document.getElementById("productsContainer");


//     const response= await fetch('https://dummyjson.com/products')

//     const products = await response.json();

//     console.log(products);

//     for(let product of products.products){
//         const {title, thumbnail, price, description} = product;

//         productsContainer.innerHTML += ` 
//             <div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                
//                 <!-- Imagen -->
//                 <div class="h-56 bg-gray-200 flex items-center justify-center relative">
//                     <img src="${thumbnail}" 
//                         alt="Producto" 
//                         class="w-full h-full object-cover">
//                     <span class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
//                         STOCK
//                     </span>
//                 </div>

//                 <div class="p-5">
//                     <h3 class="text-gray-900 font-bold text-xl mb-2">${title}</h3>
//                     <p class="text-gray-600 text-sm mb-4">
//                         ${description}
//                     </p>

//                     <div class="flex items-center justify-between">
//                         <div>
//                             <span class="text-2xl font-bold text-emerald-600">$${price}</span>
//                         </div>
                       
//                         <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
//                             Comprar
//                         </button>
//                     </div>
//                 </div>
//             </div>`;
//     }

// }


// getProducts();

import { getProducts } from './api/productsApi.js';
import { Product } from './classes/Product.js';

const productsContainer = document.getElementById('productsContainer');

async function loadProducts(){

    const data = await getProducts(24, 0);

    for(let product of data.products){

        const productCard = new Product(product);

        productsContainer.innerHTML += productCard.renderCard();
    }
}

loadProducts();