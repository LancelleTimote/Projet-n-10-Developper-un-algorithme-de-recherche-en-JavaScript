import {renderRecipes} from "./cards.js";
import {getTags , renderTagList} from "./tags.js";

export function searchBar(recipes) {
    const searchBarInput = document.getElementById('searchBarInput');
    const messageError = document.querySelector('.error-message');

    searchBarInput.addEventListener('input', () => {
        const inputElt = searchBarInput.value;
        if(inputElt.length >= 3) {
            messageError.textContent = '';
            search(recipes, inputElt);
        } else {
            if(inputElt.length === 0){
                messageError.textContent = '';
            }else{
                messageError.textContent = 'Veuillez saisir au moins 3 caractères';
            }
            renderTagList('ingredients', getTags(recipes).ingredients);
            renderTagList('appliances', getTags(recipes).appliances);
            renderTagList('ustensils', getTags(recipes).ustensils);
            search(recipes);
        }
    });
}

export function search(recipes, value = null){
    const messageError = document.querySelector('.error-message');
    let result = recipes;

    if (value) {
        const lowerCaseValue = value.toLowerCase();
        const newTab = [];
        for (const recipe of recipes) {
            const recipeName = recipe.name.toLowerCase();
            const recipeDescription = recipe.description.toLowerCase();
            let ingredientFound = false;
            for (const ingredient of recipe.ingredients) {
                const ingredientName = ingredient.ingredient.toLowerCase();
                if (ingredientName.includes(lowerCaseValue)) {
                    ingredientFound = true;
                    break;
                }
            }
            if (recipeName.includes(lowerCaseValue) || recipeDescription.includes(lowerCaseValue) || ingredientFound) {
                newTab.push(recipe);
            }
        }
        result = newTab;
    }

    //Gestion des tags sélectionnés
    const tagListIng = document.querySelectorAll(".tags-block-ingredients span");
    const tagListApp = document.querySelectorAll(".tags-block-appliances span");
    const tagListUst = document.querySelectorAll(".tags-block-ustensils span");

    //Filtrer les recettes en fonction des tags ingrédients sélectionnés
    for(const tag of tagListIng) {
        const tagName = tag.textContent.toLowerCase();
        result = result.filter(recipe => {
            const recipeTags = (recipe.ingredients || []).map(item => (item.ingredient || '').toLowerCase());
            return recipeTags.includes(tagName);
        });
    }

    //Filtrer les recettes en fonction des tags appareils sélectionnés
    for(const tag of tagListApp) {
        const tagName = tag.textContent.toLowerCase();
        result = result.filter(recipe => {
            const recipeTags = (recipe.appliance.toLowerCase());
            return recipeTags.includes(tagName);
        });
    }

    //Filtrer les recettes en fonction des tags ustensiles sélectionnés
    for(const tag of tagListUst) {
        const tagName = tag.textContent.toLowerCase();
        result = result.filter(recipe => {
            const recipeTags = (recipe.ustensils || []).map(item => item.trim().toLowerCase());
            return recipeTags.includes(tagName);
        });
    }

    //Filter les tags
    const tagsUpdate = getTags(result);
    renderRecipes(result);
    renderTagList('ingredients', tagsUpdate.ingredients)
    renderTagList('appliances', tagsUpdate.appliances)
    renderTagList('ustensils', tagsUpdate.ustensils)

    // Affichage message d'erreur si la saisie ne correspond à aucune recette
    if(result.length === 0) {
        messageError.textContent = 'Aucune recette ne correspond à vos critères. Vous pouvez chercher par exemple "Salade de riz", "Pomme", "Saladier", etc...';
    }else{
        messageError.textContent = '';
    }
}

export function tagSearch(recipes) {
    const inputValue = document.getElementById('searchBarInput').value;
    if(inputValue.length >= 3) {
        search(recipes, inputValue);
    }else{
        search(recipes);
    }
}