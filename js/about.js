import { createMenu } from "./components/common/createMenu.js";
import {search, redirectUser} from "./components/navSearch.js";

createMenu();
search.addEventListener("click", redirectUser);