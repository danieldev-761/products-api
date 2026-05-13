import { getProducts } from './api/productsApi.js';
import { renderProducts } from './ui/renderProducts.js';

import { Pagination } from './classes/Pagination.js';
import { renderPagination } from './ui/renderPagination.js';

import { initializeSearch } from './ui/handleSearch.js';
const searchResults = document.getElementById('searchResults');
const formSearch = document.getElementById('prd-search');
const quantity = document.getElementById('quantity');
const clearSearchBtn = document.getElementById('clearSearch');

const productsContainer = document.getElementById('productsContainer');

const nextBtns = document.querySelectorAll('.nextPage');
const prevBtns = document.querySelectorAll('.prevPage');
const currentPages = document.querySelectorAll('.currentPage');

const pagination = new Pagination(20);

async function loadProducts(){

    const data = await getProducts(
        pagination.limit,
        pagination.skip);

    pagination.setTotal(data.total);

    renderProducts(productsContainer, data.products);

    renderPagination(currentPages, pagination);

}

nextBtns.forEach(btn => {

    btn.addEventListener('click', async () => {
        pagination.nextPage();
        await loadProducts();
    });
});

prevBtns.forEach(btn => {

    btn.addEventListener('click', async () => {
        pagination.prevPage();
        await loadProducts();
    });
});

initializeSearch({
    formSearch,
    quantity,
    searchResults,
    loadProducts,
    clearSearchBtn
});



loadProducts();