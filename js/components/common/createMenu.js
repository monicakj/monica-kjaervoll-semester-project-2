import { getUsername } from "../../utils/storage.js";
import logoutButton from "../logoutButton.js";

export function createMenu() {
    const { pathname } = document.location;

    const globalContainer = document.querySelector(".global-container");

    const username = getUsername();

    let authLink = `
    <a id="login" href="login.html" class="${pathname === "/login.html" ? "active" : ""}">Sign In</a>
    `;

    if (username) {
        authLink = `
        <a href="add.html" class="${pathname === "/add.html" ? "active" : ""}">Add Product</a>
        <a id="logout">Sign out: ${username}</a>`;
    }

    globalContainer.innerHTML = `
                                <ul class="nav justify-content-end">
                                <li class="nav-item">
                                <a class"nav-link top">${authLink}</a>
                                </li>
                                </ul>
                                `;

    logoutButton();
}