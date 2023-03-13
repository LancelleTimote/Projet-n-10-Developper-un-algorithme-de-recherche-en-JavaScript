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
    const searchBarInput = document.getElementById('searchBarInput');

    searchBarInput.addEventListener('input', () => {
        const inputElt = searchBarInput.value;
        //utilisation d'un opérateur ternaire pour remplacer la conditionnelle if/else
        inputElt.length >= 3 ? search(recipes, inputElt) : renderRecipes(recipes);
    });
}

function search(recipes, value = null){
    let result = recipes;
    if(value){
        result = recipes.filter(recipe => {
            //utilisation d'une variable lowerCase pour éviter de faire plusieurs fois value.toLowerCase()
            const lowerCaseValue = value.toLowerCase();
            return recipe.name.toLowerCase().includes(lowerCaseValue)
            || recipe.description.toLowerCase().includes(lowerCaseValue)
            || recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(lowerCaseValue))
        });
    }

    //Gestion des tags Selectionné
    //Récuperes les tags Selectionné dans le HTML (ing, app, ust) document.querySelectorAll(".tags-block-ingredients span")

    // const tagListIng = document.querySelectorAll(".tags-block-ingredients span")
    //if has tag ingre - trie ingreditne
    // if(tagListIng){
    //     for (const tag of tagListIng) {
    //         const lowerCaseValue = tag.toLowerCase();
    //         result = result.filter(recipe => {
    //             //utilisation d'une variable lowerCase pour éviter de faire plusieurs fois value.toLowerCase()
    //             return recipe.ingredients.some(item => item.ingredient.toLowerCase().includes(lowerCaseValue));
    //         });
            
    //     }
    // }

    
    //if has tag app - trie app
    //if has tag ust - trie ust


    renderRecipes(result);
}



export default searchBar;