function getTags(recipes) {
    //creation 3 array vide pour les incrementer
    let tags = {
        ingredients: [],
        appliances: [],
        ustensils: [],
    };
    for (const recipe of recipes) {
        //ingredients (boucle pour recupere ingredient)
        //if(name ingredient, etc... existe pas dans mon tableau -> ajouter dans le tableau)
        //push
        for (const ingredients of recipe.ingredients) {
            if (!tags.ingredients.includes(ingredients.ingredient)) {
                tags.ingredients.push(ingredients.ingredient);
            }
        }

        if (!tags.appliances.includes(recipe.appliance)) {
            tags.appliances.push(recipe.appliance);
        }

        for (const ustensils of recipe.ustensils) {
            if (!tags.ustensils.includes(ustensils)) {
                tags.ustensils.push(ustensils);
            }
        }
    }
    return tags;
}

//init(nameTag, tagList){
    // renderBouton(nameTag)
    //RenderTagList(tagList)
// }

//renderBouton(nameTag){
    //  Créer du HTML (searchTypes-block-i-${nameTag})
    //  Créer du HTML <SECTION> (#${nameTag})
// }

//RenderTagList(nameTag, tagList){
    // GetById (section > tag INGREDIENT)
    // Création HTML des tags
// }


export default getTags;
// console.log(tags);

// const ingredientsTag = getIngredient(recipes);

// const allTags = getTags(recipes);
// const ingredients = allTags.ingredients;