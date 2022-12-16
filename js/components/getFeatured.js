import { baseUrl } from "../settings/api";

export function getFeatured(json) {
    const featuredContainer = document.querySelector(".card-group");

    featuredContainer.innerHTML = "";

    json.forEach(function (product) {

        let imageUrl = "";

        if (!product.image_url) {
            imageUrl = baseUrl + product.image.formats.large.url;
        } else {
            imageUrl = product.image_url;
        }

        if (product.featured) {
            featuredContainer.innerHTML +=
            `
            <div class="card-body product">
            <a href="/details.html?id=${product.id}">
            <h5 class="card-title">${product.title}</h5>
            <img src="${product.image_url}" alt="${product.alternativeText}">
            </a>
            <p class="card-text">Price: kr ${product.price},00</p>
            </div>
            `;
        };

    });
}