function renderRecipes(arrayRecipes){
    const cardsElt = document.getElementById("cards");
    cardsElt.innerHTML = "";

    for (const recipe of arrayRecipes) {
        const cardIngredientsContainer = document.createElement("ul");
        cardIngredientsContainer.className = "col-6 noPadding noMargin";

        // Boucle ingredients
        for (const { ingredient, unit, quantity } of recipe.ingredients) {
            const cardIngredientsElements = document.createElement("li");

            const ingredientEl = document.createElement("strong");
            ingredientEl.textContent = ingredient;

            const ingredientQuantity = document.createElement("span");
            // Vérifier si la quantité existe et si l'unité de mesure existe
            ingredientQuantity.textContent = quantity && (unit ? ` : ${quantity} ${unit}` : ` : ${quantity}`);

            cardIngredientsElements.append(ingredientEl, ingredientQuantity);
            cardIngredientsContainer.appendChild(cardIngredientsElements);
        }

        const cardRecipesSteps = document.createElement("p");
        cardRecipesSteps.className = "col-6 noPadding noMargin";
        cardRecipesSteps.textContent = recipe.description;

        const cardTextBottom = document.createElement("div");
        cardTextBottom.className = "card-text-bottom";
        cardTextBottom.append(cardIngredientsContainer, cardRecipesSteps);

        const cardTitle = document.createElement("h5");
        cardTitle.textContent = recipe.name;

        const cardTimerIcon = document.createElement("i");
        cardTimerIcon.className = "fa-regular fa-clock fa-lg";

        const cardTimerText = document.createElement("span");
        cardTimerText.className = "clockTimer";
        cardTimerText.textContent = ` ${recipe.time} min`;

        const cardTime = document.createElement("div");
        cardTime.append(cardTimerIcon, cardTimerText);

        const cardTextTop = document.createElement("div");
        cardTextTop.className = "card-text-top";
        cardTextTop.append(cardTitle, cardTime);

        const cardImg = document.createElement("img");

        const cardDivImg = document.createElement("div");
        cardDivImg.className = "card-img";
        cardDivImg.appendChild(cardImg);

        const cardText = document.createElement("div");
        cardText.className = "card-text";
        cardText.append(cardTextTop, cardTextBottom);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body noPadding";
        cardBody.append(cardDivImg, cardText);

        const card = document.createElement("div");
        card.className = "col-4 card noPadding";
        card.appendChild(cardBody);

        cardsElt.appendChild(card);
    }
}

export default renderRecipes;