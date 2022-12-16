import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        const searchValue = event.target.value;

        const filterProducts = products.filter(function (product) {
            if (product.title.toLowerCase().includes(searchValue) || 
                product.description.toLowerCase().includes(searchValue)){
                return true;
            }
        });

        renderProducts(filterProducts);
    };
}