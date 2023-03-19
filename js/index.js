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