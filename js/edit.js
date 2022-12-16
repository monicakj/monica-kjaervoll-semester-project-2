import { createMenu } from "./components/common/createMenu.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getToken } from "./utils/storage.js";
import deleteButton from "./components/deleteButton.js";
// import {search, redirectUser} from "./components/navSearch.js";

createMenu();
// search.addEventListener("click", redirectUser);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");

(async function () {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        idInput.value = details.id;
        title.value = details.title;
        price.value = details.price;
        description.value = details.description;

        deleteButton(details.id);

        console.log(details);
    } catch (error) {
        console.log(error);
    } finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const idValue = idInput.value;
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
        return displayMessage("warning", "Please supply proper values.", ".message-container");
    }

    updateProduct(titleValue, priceValue, descriptionValue, idValue);
}

async function updateProduct(title, price, description, id) {
    const url = baseUrl + "products/" + id;
    const data = JSON.stringify({ title: title, price: price, description: description });

    const token = getToken();

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);

        if (json.updated_at) {
            displayMessage("success", "Product updated.", ".message-container");
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }
    } catch (error) {
        console.log(error);
    }
}