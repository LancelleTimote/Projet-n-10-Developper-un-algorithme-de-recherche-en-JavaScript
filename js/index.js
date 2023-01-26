import recipes from "../data/recipes.js";
import renderRecipes from "./cards.js";
import searchBar from "./search.js";
import getTags from "./tags.js";

renderRecipes(recipes);
searchBar(recipes);

const tags = getTags(recipes);

// Init TAG lancé ('ingredients", tags.ingredients)
//init(ingredients)
// renderBouton("ingredients", )
// renderBouton("appliences")
// renderBouton("ustensils")