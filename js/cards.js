function renderRecipes(arrayRecipes){
    let cardsElt = document.getElementById("cards");
    cardsElt.innerHTML = "";

    for (const recipe of arrayRecipes) {
        let cardIngredientsContainer = document.createElement("ul");
        cardIngredientsContainer.classList.add("col-6", "noPadding", "noMargin");

        // Boucle ingredients
        for (const ingredients of recipe.ingredients) {
            let cardIngredientsElements = document.createElement("li");

            let ingredient = document.createElement("strong");
            ingredient.textContent = ingredients.ingredient;
            cardIngredientsElements.appendChild(ingredient);

            //élément strong séparé par span car sinon plus en strong
            let ingredientQuantity = document.createElement("span");

            //vérification obligatoire pour les unités car pas présentes partout
            if(ingredients.unit === '' || ingredients.unit == null) {
                //si pas d'unités, vérification quantité car pas partout
                if(ingredients.quantity) {
                    ingredientQuantity.textContent = " : " + ingredients.quantity;
                }
            }else{
                // cardIngredientsElements.textContent += ingredients.quantity + ingredients.unit;
                ingredientQuantity.textContent = " : " + ingredients.quantity + " " + ingredients.unit;
            }
            cardIngredientsElements.appendChild(ingredientQuantity);

            cardIngredientsContainer.appendChild(cardIngredientsElements);
        }

        let cardRecipesSteps = document.createElement("p");
        cardRecipesSteps.classList.add("col-6", "noPadding", "noMargin");
        cardRecipesSteps.textContent = recipe.description;

        let cardTextBottom = document.createElement("div");
        cardTextBottom.classList.add("card-text-bottom");
        cardTextBottom.appendChild(cardIngredientsContainer);
        cardTextBottom.appendChild(cardRecipesSteps);

        let cardTitle = document.createElement("h5");
        cardTitle.textContent = recipe.name;

        let cardTimerIcon = document.createElement("i");
        cardTimerIcon.classList.add("fa-regular", "fa-clock", "fa-lg");

        let cardTimerText = document.createElement("span");
        cardTimerText.classList.add("clockTimer");
        cardTimerText.textContent = " " + recipe.time + " min";

        let cardTime = document.createElement("div");
        cardTime.appendChild(cardTimerIcon);
        cardTime.appendChild(cardTimerText);

        let cardTextTop = document.createElement("div");
        cardTextTop.classList.add("card-text-top");
        cardTextTop.appendChild(cardTitle);
        cardTextTop.appendChild(cardTime);

        let cardImg = document.createElement("img");

        let cardDivImg = document.createElement("div");
        cardDivImg.classList.add("card-img");
        cardDivImg.appendChild(cardImg);

        let cardText = document.createElement("div");
        cardText.classList.add("card-text");
        cardText.appendChild(cardTextTop);
        cardText.appendChild(cardTextBottom);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "noPadding");
        cardBody.appendChild(cardDivImg);
        cardBody.appendChild(cardText);

        let card = document.createElement("div");
        card.classList.add("col-4", "card", "noPadding");
        card.appendChild(cardBody);

        cardsElt.appendChild(card);
    }
}

export default renderRecipes;