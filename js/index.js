import recipes from "../data/recipes.js";
console.log(recipes);

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

rendreRecipes(recipes)



//SEARCH BAR
//Ecouter l'input
//if input.value > 3
//Filter Recipes pour créer un nouveau tableau avec les recette filtré
// (Transformer la recipe en chaine de carractère)
//  Condition recipeStr.include(Valeur)
//Lancer rendreRecipes(Newrecipes)


// const ingredientsTag = getIngredient(recipes)

// const allTags = getTags(recipes)
// const ingredients = allTags.ingredients

// function rendreRecipes(arrayRecipes){
//     let cardsElt = document.getElementById('cards')
//     cardsElt.innerHTML = ""

//     for (const recipe of arrayRecipes) {

//         console.log(recipe)

//         // let cardContainer = document.createElement("section");
//         // cardContainer.classList.add("container", "cards-container");

//         // let cardRow = document.createElement("div");
//         // cardRow.classList.add("row");

//         let card = document.createElement("div");
//         card.classList.add("col-4", "card");

//         let cardBody = document.createElement("div");
//         cardBody.classList.add("card-body");

//         let cardDivImg = document.createElement("div");
//         cardDivImg.classList.add("card-img");

//         let cardImg = document.createElement("img");

//         let cardText = document.createElement("div");
//         cardText.classList.add("card-text");

//         let cardTextTop = document.createElement("div");
//         cardTextTop.classList.add("card-text-top");

//         let cardTitle = document.createElement("h5");

//         let cardTime = document.createElement("div");

//         let cardTimerIcon = document.createElement("i");
//         cardTimerIcon.classList.add("fa-regular", "fa-clock", "fa-lg");

//         let cardTimer = document.createElement("span");

//         let cardTextBottom = document.createElement("div");
//         cardTextBottom.classList.add("card-text-bottom");

//         let cardIngredientsContainer = document.createElement("ul");
//         cardIngredientsContainer.classList.add("col-6");

//         //Boucle ingredients
//         for (const ingredients of recipe.ingredients) {
//             console.log(ingredients.ingredient)
//             let cardIngredients = document.createElement("li");
//             cardIngredients.textContent = ingredients.ingredient
//             cardIngredientsContainer.appendChild(cardIngredients)
//         }

//         console.log(cardIngredientsContainer)

//         let cardRecipesSteps = document.createElement("p");

//         cardsElt.appendChild(card)
//     }
// }