import recipes from "../data/recipes.js";
import renderRecipes from "./cards.js";
import searchBar from "./search.js";
import {getTags , init} from "./tags.js";

renderRecipes(recipes);
searchBar(recipes);

const tags = getTags(recipes);

init('ingredients', tags.ingredients)
init('appliances', tags.appliances)
init('ustensils', tags.ustensils)
// init('time', ['10', '22'])

// Init TAG lancé ('ingredients", tags.ingredients)
//init(ingredients)
// renderBouton("ingredients", )
// renderBouton("appliences")
// renderBouton("ustensils")