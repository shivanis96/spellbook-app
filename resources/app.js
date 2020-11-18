import h from "./modules/create-element.js";
import navBar from "./modules/navbar.js";

 const body = document.querySelector("body");
 const header = h("div", {}, navBar());
 body.append(header);

