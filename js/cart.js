import { createMenu } from "./components/common/createMenu.js";
import {search, redirectUser} from "./components/navSearch.js";
import { getProductsCart } from "./utils/cartFunction.js";

createMenu();

const products = getProductsCart();

const cartContainer = document.querySelector(".cart-container");

if (products.length === 0) {
    cartContainer.innerHTML = "Your cart is empty.";
}

products.forEach((product) => {
    cartContainer.innerHTML += `<div class="cart">
                                <h4>${product.title}</h4>
                                <img src="${product.image_url}" alt="${product.alternativeText}">
                                <p>Price: ${product.price}</p>
                                </div>`;
});