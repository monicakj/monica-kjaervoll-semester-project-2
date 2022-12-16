import displayMessage from "./common/displayMessage.js";

export function renderProducts (products) {
    const productsContainer = document.querySelector(".card-group");
    productsContainer.innerHTML = "";

    if (products.length === 0) {
        displayMessage("error", error, ".card-group");
    }

    products.forEach(function (product) {
        productsContainer.innerHTML += 
        `
        <div class="card-body product">
        <a href="/details.html?id=${product.id}">
        <h5 class="card-title">${product.title}</h5>
        <img src="${product.image_url}" alt="${product.alternativeText}">
        </a>
        <p class="card-text">Price: kr ${product.price},00</p>

        <div class="row">
        <div class="col">
        <a href="/cart.html">
        <button class="btn-cart">Add to cart</button>
        </a>
        </div>
        </div>
        
        <div class="row">
        <div class="col">
        <a href="/edit.html?id=${product.id}">
        <button class="btn-edit">Edit product</button>
        </a>
        </div>
        </div>

        </div>
        `;
   
    });
}
