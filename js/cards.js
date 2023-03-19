function createIngredientsList(ingredients) {
    const list = document.createElement("ul");
    list.className = "col-6 noPadding noMargin";

    //Itération à travers chaque objet "ingredient" du tableau "ingredients"
    for (const { ingredient, unit, quantity } of ingredients) {
        const listItem = document.createElement("li");

        const ingredientEl = document.createElement("strong");
        ingredientEl.textContent = ingredient;

        const ingredientQuantity = document.createElement("span");
        //Ajout de la quantité et de l'unité de mesure (le cas échéant) à l'élément "span"
        ingredientQuantity.textContent = quantity && (unit ? ` : ${quantity} ${unit}` : ` : ${quantity}`);

        listItem.append(ingredientEl, ingredientQuantity);
        list.appendChild(listItem);
    }
    return list;
}

function createRecipeCard(recipe) {
    //Création des éléments pour la liste des ingrédients
    const cardIngredientsContainer = createIngredientsList(recipe.ingredients);

    //Création de l'élément pour la description de la recette
    const cardRecipesSteps = document.createElement("p");
    cardRecipesSteps.className = "col-6 noPadding noMargin";
    cardRecipesSteps.textContent = recipe.description;

    //Création de l'élément pour le titre de la recette et le temps de cuisson
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

    //Création de l'élément pour l'image de la recette
    const cardImg = document.createElement("img");

    const cardDivImg = document.createElement("div");
    cardDivImg.className = "card-img";
    cardDivImg.appendChild(cardImg);

    //Création de l'élément pour le titre, le temps de cuisson et la description
    const cardTextBottom = document.createElement("div");
    cardTextBottom.className = "card-text-bottom";
    cardTextBottom.append(cardIngredientsContainer, cardRecipesSteps);

    const cardText = document.createElement("div");
    cardText.className = "card-text";
    cardText.append(cardTextTop, cardTextBottom);

    //Création de l'élément pour le corps de la carte
    const cardBody = document.createElement("div");
    cardBody.className = "card-body noPadding";
    cardBody.append(cardDivImg, cardText);

    //Création de l'élément pour la carte elle-même
    const card = document.createElement("div");
    card.className = "col-4 card noPadding";
    card.appendChild(cardBody);

    return card;
}

function renderRecipes(arrayRecipes){
    //On récupère l'élément HTML où on va insérer les cartes de recettes
    const cardsElt = document.getElementById("cards");
    // On vide l'élément HTML pour éviter d'avoir des doublons de cartes
    cardsElt.innerHTML = "";

    //On parcourt le tableau de recettes et pour chaque recette, on crée une carte avec la fonction createRecipeCard
    for (const recipe of arrayRecipes) {
        const card = createRecipeCard(recipe);
        //On insère la carte dans l'élément HTML cardsElt
        cardsElt.appendChild(card);
    }
}

export default renderRecipes;