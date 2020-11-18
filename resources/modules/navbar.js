import h from "./create-element.js";

const navBar = () => {
  const searchButton = h("button", {}, "Search");

  const allSpells = h("button", {}, "Spell Seeker");
  const searchInput = h("input", {}, "Which Spell", searchButton);
  const addSpell = h("button", {}, "+");

  return h(
    "nav",
    {},
    allSpells,
    searchInput,
    searchButton,
    addSpell
  );
};

export default navBar; 