import { createMenu } from "./components/common/createMenu.js";
import { search, redirectUser} from "./components/navSearch.js";
import { baseUrl, bannerUrl, productsUrl } from "./settings/api.js";

createMenu();

const heroContainer = document.querySelector(".hero-container"); 

async function fetchBanner() {
        const response = await fetch(bannerUrl);
        const json = await response.json();
        
        console.log(json); 

        heroContainer.innerHTML += `
        <div class="hero">
        <img src="${json.hero_banner.formats.large.url}">
        </div>`; 
    }

fetchBanner(); 

const featuredContainer = document.querySelector(".card-group");

    async function getFeatured() {

        try {
            const response = await fetch(productsUrl);
            const json = await response.json(); 
            console.log(json); 

            for (let i = 0; i < json.length; i++) {
                if(json[i].featured === true) {

                featuredContainer.innerHTML += `
                <div class="card-body product">
                <a class="featured" href="products.html?id">
                <h5>${json[i].title}</h5>
                <img src=${json[i].image.url}>
                </a>
                <p>Price: kr ${json[i].price},00</p>
                </div>`; 
            }
        }

        } catch (error){
            console.log(error); 
        }
    }
    getFeatured();

    document.getElementById("view").onclick = function () {
        location.href = "/products.html";
    };
