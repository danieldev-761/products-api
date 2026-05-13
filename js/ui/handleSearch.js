import { searchProducts } from '../api/productsApi.js';

import { renderProducts } from './renderProducts.js';

export function initializeSearch({

    formSearch,
    quantity,
    searchResults,
    loadProducts,
    clearSearchBtn

}){

    formSearch.addEventListener('submit', async function(event){

        event.preventDefault();

        const input = this.querySelector('input');

        const searchText = input.value.trim();

        if(searchText.length === 0){

            searchResults.innerHTML = '';

            await loadProducts();

            return;
        }

        const data = await searchProducts(searchText);

        quantity.textContent = data.products.length;

        renderProducts(searchResults, data.products);

        input.value = '';
    });


    clearSearchBtn.addEventListener('click', async () => {

        const input = formSearch.querySelector('input');

        input.value = '';

        searchResults.innerHTML = '';
        quantity.textContent = '0';

        await loadProducts();
    });

}