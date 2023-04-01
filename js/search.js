import renderRecipes from "./cards.js";
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
            // renderRecipes(recipes);
            search(recipes);
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

        // newTab = []
        //Ajouter les recete OK valeur ipute dans un tableuea || Supprimer es resset non conrerespondante)
        // pas le droit fonction native
        // for (const recipe of recipes) {
            //Si recipe = valuerInpute
            // (Soit suppprimer ou ajoure dans un autre tablea)
        // }

        // result = newTab;
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
            const recipeTags = (recipe.appliances || []).map(item => (item.appliance || '').toLowerCase());
            return recipeTags.includes(tagName);
        });
    }

    //Filtrer les recettes en fonction des tags ustensiles sélectionnés
    for(const tag of tagListUst) {
        const tagName = tag.textContent.toLowerCase();
        result = result.filter(recipe => {
            const recipeTags = (recipe.ustensils || []).map(item => (item.ustensil || '').toLowerCase());
            return recipeTags.includes(tagName);
        });
    }

    // Affichage message d'erreur si la saisie ne correspond à aucune recette
    if(result.length === 0) {
        messageError.textContent = 'Aucune recette ne correspond à vos critères. Vous pouvez chercher par exemple "Salade de riz", "Pomme", "Saladier", etc...';
    }

    //Filter les tags
    const tagsUpdate = getTags(result);
    renderRecipes(result);
    renderTagList('ingredients', tagsUpdate.ingredients)
    renderTagList('appliances', tagsUpdate.appliances)
    renderTagList('ustensils', tagsUpdate.ustensils)
}


//À lancer dans addtag et closetag
//Function tagSearch
//Récuperes les valuer du l'inpute si < a 3  const valeurInput = document.getElementById('searchBarInput').value;
// if(valeurInput > 3)
//Search(Recipe , valeurInput)
// /else
//Search(Recipe)

// export function tagSearch(recipes) {
//     const inputValue = document.getElementById('searchBarInput').value;
//     if(inputValue > 3) {
//         search(recipes, inputValue);
//     }else{
//         search(recipes);
//     }
// }

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