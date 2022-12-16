import { renderProducts } from "./renderProducts.js";

export function filterProducts(product) {
    const search = document.querySelector(".search-product");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim().toLowerCase();

        const filterProducts = product.filter(function (product) {
            if (product.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderProducts(filterProducts);
    };
}