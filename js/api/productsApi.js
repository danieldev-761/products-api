const BASE_URL = 'https://dummyjson.com/products';

export async function getProducts(limit = 24, skip = 0){

    const response = await fetch(
        `${BASE_URL}?limit=${limit}&skip=${skip}`
    );

    return await response.json();
}

export async function searchProducts(query){

    const response = await fetch(
        `${BASE_URL}/search?q=${query}`
    );

    return await response.json();
}