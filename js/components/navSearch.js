export const search = document.querySelector(".nav-search");

export function redirectUser(){
    location.href = "./products.html";
}

search.addEventListener("click", redirectUser);