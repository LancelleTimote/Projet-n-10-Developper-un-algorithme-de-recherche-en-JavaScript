import recipes from "../data/recipes.js";
console.log(recipes)

function getTags(recipes) {
    //Crer arayt vide []
    let tags = {
        ingredients : [],
        appareils : [],
        ustensiles : []
    };
    for (const recipe of recipes) {
        //ingrediedts (boucle pour récuepere ingredient)
            //if(name ingrenet n'existe pas dans mon table -> Ajouter dans le tableau)
                // push
        console.log(recipe);
        for (const ingredients of recipe.ingredients) {
            if(!tags.ingredients.includes(ingredients.ingredient)) {
                tags.ingredients.push(ingredients.ingredient);
            }
        }
    }
    return tags
}


const tags = getTags(recipes);
console.log(tags);

// const ingredientsTag = getIngredient(recipes)

// function getTags(recipes) {
//     //Crer array ing vide []
//     //Crer array apl vide []
//     //Crer array ust vide []
//     for (const recipe of recipes) {
//         //ingrediedts (boucle pour récuepere ingredient)
//             //if(name ingrenet n'existe pas dans mon table -> Ajouter dans le tableau)
//                 // push
//         //Appl
//             //if(name ingrenet n'existe pas dans mon table -> Ajouter dans le tableau)
//                 // push
//         //ust
//             //if(name ingrenet n'existe pas dans mon table -> Ajouter dans le tableau)
//                 // push
//     }

//     //retrun {
//         ingredients : arraying
//         APL : arrayapl
//         ust : arrayust
//     }
// }

// const allTags = getTags(recipes)
// const ingredients = allTags.ingredients