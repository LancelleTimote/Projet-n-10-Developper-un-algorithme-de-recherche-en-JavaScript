import renderRecipes from "./cards.js";
//SEARCH BAR
//Ecouter l'input
//if input.value > 3
//Filter Recipes pour créer un nouveau tableau avec les recette filtré
// (Transformer la recipe en chaine de carractère)
//  Condition recipeStr.include(Valeur)
//Lancer rendreRecipes(Newrecipes)


//EVENEMENT
//function Input() -> Search(RECIPES)
//function AddTag() -> Search()
//function CloseTag() -> Search()


//Search(RECIPES) Trier un tableau -> rendreRecipes(NewRecipes)



function searchBar(recipes) {
    let searchBarInput = document.getElementById('searchBarInput');

    searchBarInput.addEventListener('input', () =>{
        let inputElt = searchBarInput.value;

        if(inputElt.length >= 3) {
            search(recipes, inputElt);
        }
    });
}

function search(recipes, value = null){
    let result = recipes;
    if(value){
        result = recipes.filter((recipe) => recipe.name.toLowerCase().includes(value)
        || recipe.description.toLowerCase().includes(value)
        || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(value)));
    }

    //Ajouter la gestion des tags

    renderRecipes(result);
}

export default searchBar;