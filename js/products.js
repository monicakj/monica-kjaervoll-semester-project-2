import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { searchProducts } from "./components/searchProducts.js";
import { renderProducts } from "./components/renderProducts.js";
import { createMenu } from "./components/common/createMenu.js";
import { filterProducts } from "./components/filterProducts.js";
import { search, redirectUser } from "./components/navSearch.js";

createMenu();

const productsUrl = baseUrl + "products";

(async function () {
    const container = document.querySelector(".card-group");

    try {
        const response = await fetch(productsUrl);
        const results = await response.json();

        // console.log(json);

        filterProducts(results);
        renderProducts(results);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".card-group");
    }
})();