export class Product {

    constructor(product){

        this.title = product.title;
        this.description = product.description;
        this.price = product.price;
        this.thumbnail = product.thumbnail;
    }

    renderCard(){

        return `
            <div class="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">

                <div class="h-56 bg-gray-200 flex items-center justify-center relative">

                    <img src="${this.thumbnail}" 
                        alt="${this.title}" 
                        class="w-full h-full object-cover">

                    <span class="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                        STOCK
                    </span>
                </div>

                <div class="p-5">

                    <h3 class="text-gray-900 font-bold text-xl mb-2">
                        ${this.title}
                    </h3>

                    <p class="text-gray-600 text-sm mb-4">
                        ${this.description}
                    </p>

                    <div class="flex items-center justify-between">

                        <span class="text-2xl font-bold text-emerald-600">
                            $${this.price}
                        </span>

                        <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 cursor-pointer">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}