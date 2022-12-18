import recipes from "../data/recipes.js";
console.log(recipes);

function getTags(recipes) {
    //Création array vide
    let tags = {
        ingredients: [],
        appliances: [],
        ustensils: [],
    };
    for (const recipe of recipes) {
        //ingredients (boucle pour récuepere ingredient)
        //if(name ingrenet n'existe pas dans mon table -> Ajouter dans le tableau)
        //push
        console.log(recipe);
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

let myCards = ""
recipes.forEach(recipe => {
    con
})


let cardContainer = document.createElement("section");
cardContainer.classList.add("container", "cards-container");

let cardRow = document.createElement("div");
cardRow.classList.add("row");

let card = document.createElement("div");
card.classList.add("col-4", "card");

let cardBody = document.createElement("div");
cardBody.classList.add("card-body");

let cardDivImg = document.createElement("div");
cardDivImg.classList.add("card-img");

let cardImg = document.createElement("img");

let cardText = document.createElement("div");
cardText.classList.add("card-text");

let cardTextTop = document.createElement("div");
cardTextTop.classList.add("card-text-top");

let cardTitle = document.createElement("h5");

let cardTime = document.createElement("div");

let cardTimerIcon = document.createElement("i");
cardTimerIcon.classList.add("fa-regular", "fa-clock", "fa-lg");

let cardTimer = document.createElement("span");

let cardTextBottom = document.createElement("div");
cardTextBottom.classList.add("card-text-bottom");

let cardIngredientsContainer = document.createElement("div");
cardIngredientsContainer.classList.add("col-6");

let cardIngredients = document.createElement("span");

let cardRecipesSteps = document.createElement("p");