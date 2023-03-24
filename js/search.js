import renderRecipes from "./cards.js";
import {getTags , renderTagList} from "./tags.js";

export function searchBar(recipes) {
    const searchBarInput = document.getElementById('searchBarInput');

    searchBarInput.addEventListener('input', () => {
        const inputElt = searchBarInput.value;
        if (inputElt.length < 3) {
            // Si la longueur de la valeur entrée est inférieure à 3, on met à jour les tags avec la liste complète
            renderTagList('ingredients', getTags(recipes).ingredients);
            renderTagList('appliances', getTags(recipes).appliances);
            renderTagList('ustensils', getTags(recipes).ustensils);
            // On affiche toutes les recettes
            renderRecipes(recipes);
        } else {
            // Sinon, on appelle la fonction de recherche avec la valeur entrée
            search(recipes, inputElt);
        }
    });
}

export function search(recipes, value = null){
    let result = recipes;
    if(value){
        result = recipes.filter(recipe => {
            const lowerCaseValue = value.toLowerCase();
            return recipe.name.toLowerCase().includes(lowerCaseValue)
            || recipe.description.toLowerCase().includes(lowerCaseValue)
            || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(lowerCaseValue))
        });
    }

    //Filter les targs
    const tagsUpdate = getTags(result);
    renderRecipes(result);
    renderTagList('ingredients', tagsUpdate.ingredients)
    renderTagList('appliances', tagsUpdate.appliances)
    renderTagList('ustensils', tagsUpdate.ustensils)
}




//Function tagSearch
//Récuperes les valuer du l'inpute si < a 3
//Search(Recipe + valeurInput)



//Gestion des tags Selectionné
//Récuperes les tags Selectionné dans le HTML (ing, app, ust) document.querySelectorAll(".tags-block-ingredients span")

// const tagListIng = document.querySelectorAll(".tags-block-ingredients span")
//if has tag ingre - trie ingreditne
// if(tagListIng){
//     for (const tag of tagListIng) {
//         const lowerCaseValue = tag.toLowerCase();
//         result = result.filter(recipe => {
//             //utilisation d'une variable lowerCase pour éviter de faire plusieurs fois value.toLowerCase()
//             return recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(lowerCaseValue));
//         });
//     }
// }

//if has tag app - trie app
//if has tag ust - trie ust