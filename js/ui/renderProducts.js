import { Product } from '../classes/Product.js';

export function renderProducts(container, products){

    container.innerHTML = '';

    for(let product of products){

        const productCard = new Product(product);

        container.innerHTML += productCard.renderCard();
    }
}