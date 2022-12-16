import { baseUrl } from "../settings/api";

const heroContainer = document.querySelector(".hero-container"); 
const url = baseUrl + "/home/";

export default async function fetchBanner() {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log(json); 

        bannerImg.innerHTML += 
        `
        <div class="hero-banner">
        <img src="${json.hero_banner.url}">
        </div>
        `; 
    }

fetchBanner(); 