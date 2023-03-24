import recipes from "../data/recipes.js";
import renderRecipes from "./cards.js";
import {getTags , init} from "./tags.js";
import {searchBar, search} from "./search.js";

function startApp() {
    renderRecipes(recipes);
    searchBar(recipes);
    const tags = getTags(recipes);
    init('ingredients', tags.ingredients)
    init('appliances', tags.appliances)
    init('ustensils', tags.ustensils)
    search(recipes);
}

startApp();

// search(recipes, 'coco')