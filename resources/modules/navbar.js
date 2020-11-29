import h from "./create-element.js";

const navBar = () => {
  const searchButton = h("button", {onclick: (event) => search(event.target.previousSibling.value)}, "Search");
  

  const allSpells = h("button", {}, "Spell Seeker");
  const searchInput = h("input", {placeholder: "Which Spell", type: "search"}, searchButton);
  const logoutButton = h("button", {onclick: logout()}, "Logout");
  const addSpell = h("button", {}, "+");

  return h(
    "nav",
    {},
    allSpells,
    searchInput,
    searchButton,
    logoutButton,
    addSpell
  );
};
const fetchApi = (url) => {
  return fetch(`https://spellbook-spook.herokuapp.com/${url}`)
    .then((response)=> {
      if(!response.ok){
        const error = new Error("HTTP Error");
        error.status = response.status;
        throw error;
      } else {
        return response.json();
      }
  })
}

const search = (name) => {
  console.log("test")
  console.log(name)
  fetchApi(`spells/${name}`);
};

const logout = () => {
  window.localStorage.removeItem("access_token");
};
export default navBar; 