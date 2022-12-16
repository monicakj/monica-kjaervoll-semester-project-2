import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { createMenu } from "./components/common/createMenu.js";
import {search, redirectUser} from "./components/navSearch.js";

createMenu();
search.addEventListener("click", redirectUser);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

console.log(productUrl);

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        document.title = details.title;

        const container = document.querySelector(".details-container");

        container.innerHTML = `
                            <div class="row">
                            <div class="col col-img">
                            <img src="${details.image.url}" alt="${details.alternativeText}">
                            </div>
                            
                            <div class="col col-details">
                            <h1>${details.title}</h1>
                            <p>${details.description}</p>
                        
                            <div class="row row-cols-2">
                            <div class="col col-button">
                            <a href="/cart.html">
                            <button class="btn btn-cart">Add to cart</button>
                            </a>
                            </div>

                            <div class="col col-button">
                            <a href="#">
                            <button class="btn btn-heart"><i class="fa-solid fa-heart"></i></button>
                            </a>
                            </div>
                            </div>

                            </div>
                            </div>
                            `;

        console.log(details);
    } catch (error) {
        displayMessage("error", error, ".details-container");
    }
})();