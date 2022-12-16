import displayMessage from "./components/common/displayMessage.js";
import { createMenu } from "./components/common/createMenu.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
// import { search, redirectUser } from "./components/navSearch.js";

createMenu();
// search.addEventListener("click", redirectUser);

const form = document.querySelector("form");
const name = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value;

    // console.log("priceValue", priceValue);

    if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0 || imageValue.length === 0) {
        return displayMessage("warning", "Please supply proper values.", ".message-container");
    }

    addProduct(titleValue, priceValue, descriptionValue, imageValue);
}

async function addProduct(title, price, description, image) {
    const url = baseUrl + "products";

    const data = JSON.stringify({ 
        title: title, 
        price: price, 
        description: description, 
        image_url: image
    });

    const token = getToken();

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if (json.created_at) {
            displayMessage("success", "Product added.", ".message-container");
            form.reset();
        }

        if (json.error) {
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json);
    } catch (error) {
        console.log(error);
        displayMessage("error", "An error occured", ".message-container");
    }
}