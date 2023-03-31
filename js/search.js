import renderRecipes from "./cards.js";
import {getTags , renderTagList} from "./tags.js";

export function searchBar(recipes) {
    const searchBarInput = document.getElementById('searchBarInput');
    const messageError = document.querySelector('.error-message');

    searchBarInput.addEventListener('input', () => {
        const inputElt = searchBarInput.value;
        if(inputElt.length === 0 || inputElt.length >= 3) {
            messageError.textContent = '';
            search(recipes, inputElt);
        } else {
            messageError.textContent = 'Veuillez saisir au moins 3 caractères';
            renderTagList('ingredients', getTags(recipes).ingredients);
            renderTagList('appliances', getTags(recipes).appliances);
            renderTagList('ustensils', getTags(recipes).ustensils);
            renderRecipes(recipes);
        }
    });
}

export function search(recipes, value = null){
    const messageError = document.querySelector('.error-message');
    let result = recipes;
    if(value) {
        result = recipes.filter(recipe => {
            const lowerCaseValue = value.toLowerCase();
            return recipe.name.toLowerCase().includes(lowerCaseValue)
            || recipe.description.toLowerCase().includes(lowerCaseValue)
            || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(lowerCaseValue))
        });
    }

    //Gestion des tags sélectionnés
    const tagListIng = document.querySelectorAll(".tags-block-ingredients span");
    const tagListApp = document.querySelectorAll(".tags-block-appliances span");
    const tagListUst = document.querySelectorAll(".tags-block-ustensils span");

    const selectedTags = [];

    //Ajouter les tags sélectionnés dans le tableau selectedTags
    for(const tag of tagListIng) {
        selectedTags.push(tag.textContent.toLowerCase());
    }
    for(const tag of tagListApp) {
        selectedTags.push(tag.textContent.toLowerCase());
    }
    for(const tag of tagListUst) {
        selectedTags.push(tag.textContent.toLowerCase());
    }

    //Filtrer les recettes en fonction des tags sélectionnés
    if(selectedTags.length > 0) {
        result = result.filter(recipe => {
            const recipeTags = [...(recipe.ingredients || []).map(item => (item.ingredient || '').toLowerCase()),
                                ...(recipe.appliances || []).map(item => (item.appliance || '').toLowerCase()),
                                ...(recipe.ustensils || []).map(item => (item.ustensil || '').toLowerCase())];
            return selectedTags.every(tag => recipeTags.includes(tag));
        });
    }

    // Affichage message d'erreur si la saisie ne correspond à aucune recette
    if(result.length === 0) {
        messageError.textContent = 'Aucune recette ne correspond à vos critères. Vous pouvez chercher par exemple "Salade de riz", "Pomme", "Saladier", etc...';
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

    // //Si un ou plusieurs tags sont sélectionnés
    // if(tagListIng.length > 0 || tagListApp.length > 0 || tagListUst.length > 0){
    //     //Filtre les recettes selon les tags sélectionnés pour chaque catégorie (ingrédients, appareils, ustensiles)
    //     if(tagListIng.length > 0){
    //         const tagValuesIng = Array.from(tagListIng).map(tag => tag.textContent.toLowerCase());
    //         result = result.filter(recipe => recipe.ingredients.some(ingredient => tagValuesIng.includes(ingredient.ingredient.toLowerCase())));
    //     }

    //     if(tagListApp.length > 0){
    //         const tagValuesApp = Array.from(tagListApp).map(tag => tag.textContent.toLowerCase());
    //         result = result.filter(recipe => tagValuesApp.includes(recipe.appliance.toLowerCase()));
    //     }

    //     if(tagListUst.length > 0){
    //         const tagValuesUst = Array.from(tagListUst).map(tag => tag.textContent.toLowerCase());
    //         result = result.filter(recipe => recipe.ustensils.some(ustensil => tagValuesUst.includes(ustensil.toLowerCase())));
    //     }
    // }