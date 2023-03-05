export function getTags(recipes) {
    //reduce permet de traiter chaque élément du tableau recipes en accumulant les résultats dans l'objet tags
    return recipes.reduce((tags, recipe) => {
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
        return tags;
    },
    //creation 3 array vide pour les incrementer
    { ingredients: [], appliances: [], ustensils: [] });
}

function renderDropdown(nameTag) {
    const tagsListContainer = document.createElement("ul");
    tagsListContainer.className = `display-noTags tagsList-block tagsList-block-${nameTag}`;

    const dropdownIcon = document.createElement("i");
    dropdownIcon.className = "fa-solid fa-chevron-down fa-lg";

    const dropdownButton = document.createElement("button");
    dropdownButton.className = "chevron-down noPadding";
    dropdownButton.append(dropdownIcon);

    const dropdownInput = document.createElement("input");
    dropdownInput.className = `dropdown dropdown-${nameTag}`;
    dropdownInput.type = "search";
    dropdownInput.placeholder = nameTag;
    dropdownInput.ariaLabel = `${nameTag} search`;

    const dropdownInputIcon = document.createElement("div");
    dropdownInputIcon.className = "dropdown-divInputIcon dropdown-divInputIcon-noTags";
    dropdownInputIcon.append(dropdownInput, dropdownButton);

    const dropdownContainer = document.createElement("div");
    dropdownContainer.className = `col-2 dropdown-block dropdown-block-noTags dropdown-block-${nameTag} noPadding`;
    dropdownContainer.id = nameTag;
    dropdownContainer.append(dropdownInputIcon, tagsListContainer);

    document.getElementById("dropdown").appendChild(dropdownContainer);

    //Ouvrir et fermer la liste de tags / utilisation toggle pour ajouter class si présent ou absent en éliminant if / else
    dropdownButton.addEventListener('click', (e) => {
        e.preventDefault();
        tagsListContainer.classList.toggle("display-noTags");
        tagsListContainer.classList.toggle("display-tags");
        dropdownInputIcon.classList.toggle("dropdown-divInputIcon-noTags");
        dropdownInputIcon.classList.toggle("dropdown-divInputIcon-tags");
        dropdownContainer.classList.toggle("dropdown-block-noTags");
        dropdownContainer.classList.toggle("dropdown-block-tags");
    });
}

// const RenderTagList = (nameTag, tagList) => {
function RenderTagList(nameTag, tagList){
    let tagsListContainer = document.querySelector(`.tagsList-block-${nameTag}`);

    for (const tag of tagList) {
        let tags = document.createElement("li");
        tags.textContent = tag;
        tagsListContainer.appendChild(tags);

        //Quand on clic sur le tag -> lancer ADDTAG()
        tags.addEventListener('click', (e) => {
            //Si non e.target.textContent
            console.log(e.target.textContent)
            // addTag(tags, nameTag)
        })
    }
}

// AddTag (LEs tage en question nom du tag, Catégorie HTML, search()) -> //Close Tag, search()

//Function SearchInTagList


export function init(nameTag, tagList){
    renderDropdown(nameTag)
    RenderTagList(nameTag, tagList)
}