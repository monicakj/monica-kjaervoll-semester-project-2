export function getProductsCart () {
    const favs = localStorage.getItem("favourites");

    if (favs === null) {
        return [];
    } else {
        return JSON.parse(favs);
    }
}