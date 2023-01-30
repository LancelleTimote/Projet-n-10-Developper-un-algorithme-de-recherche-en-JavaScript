export function getTags(recipes) {
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

export function init(nameTag, tagList){
    renderDropdown(nameTag)
    RenderTagList(nameTag, tagList)
}


function renderDropdown(nameTag) {
    let dropdownIcon = document.createElement("i");
    dropdownIcon.classList.add("fa-solid", "fa-chevron-down", "fa-lg");

    let dropdownButton = document.createElement("button");
    dropdownButton.classList.add("chevron-down", "noPadding");
    dropdownButton.appendChild(dropdownIcon);

    let dropdownInput = document.createElement("input");
    dropdownInput.classList.add("dropdown", `dropdown-${nameTag}`);
    dropdownInput.type = "search";
    dropdownInput.placeholder = nameTag;
    dropdownInput.ariaLabel = `${nameTag} search`;

    let dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("col-2", `dropdown-block-${nameTag}`, "noPadding");
    dropdownContainer.id = nameTag;
    dropdownContainer.appendChild(dropdownInput);
    dropdownContainer.appendChild(dropdownButton);

    let dropdown = document.getElementById("dropdown");
    dropdown.appendChild(dropdownContainer);

    //addEventListener -> Ouvrir/fermé le menu (Le UL)
}

function RenderTagList(nameTag, tagList){
    console.log(tagList, nameTag)
    let elt = document.getElementById(nameTag)
    elt = elt.querySelector('button')
    console.log(elt)
    // GetById (section > tag INGREDIENT)
    // Création HTML des tags (LI)
    // 
}

// AddTag (HTML)

//Close Tag

