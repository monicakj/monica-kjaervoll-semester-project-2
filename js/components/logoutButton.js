import { clearStorage } from "../utils/storage.js";

export default function logoutButton() {
    const button = document.querySelector("#logout");

    if (button) {
        button.onclick = function () {
            const doLogout = confirm("Are you sure you want to sign out?");

            if (doLogout) {
                clearStorage();
                location.href = "/login.html";
            }
        };
    }
}