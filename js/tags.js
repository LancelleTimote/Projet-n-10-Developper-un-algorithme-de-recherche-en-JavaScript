export function getTags(recipes) {
    //reduce permet de traiter chaque élément du tableau recipes en accumulant les résultats dans l'objet tags
    return recipes.reduce((tags, recipe) => {
        //ingredients (boucle pour recupere ingredient)
        //if(name ingredient, etc... existe pas dans mon tableau -> ajouter dans le tableau)
        //push
        for (const ingredients of recipe.ingredients) {
            const ingredientName = capitalizeFirstLetter(ingredients.ingredient.trim());
            if (!tags.ingredients.includes(ingredientName)) {
                tags.ingredients.push(ingredientName);
            }
        }

        const applianceName = capitalizeFirstLetter(recipe.appliance.trim());
        if (!tags.appliances.includes(applianceName)) {
            tags.appliances.push(applianceName);
        }

        for (const ustensil of recipe.ustensils) {
            const ustensilName = capitalizeFirstLetter(ustensil.trim());
            if (!tags.ustensils.includes(ustensilName)) {
                tags.ustensils.push(ustensilName);
            }
        }
        return tags;
    },
    //creation 3 array vide pour les incrementer
    { ingredients: [], appliances: [], ustensils: [] });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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

    const dropdownBlocks = document.getElementsByClassName("dropdown-block");
    const displayTags = "display-tags";
    const displayNoTags = "display-noTags";
    const dropdownBlockTags = "dropdown-block-tags";
    const dropdownBlockNoTags = "dropdown-block-noTags";
    const dropdownDivInputIconTags = "dropdown-divInputIcon-tags";
    const dropdownDivInputIconNoTags = "dropdown-divInputIcon-noTags";

    function closeAllOtherDropdowns(nameTag) {
        Array.from(dropdownBlocks).forEach((dropdownBlock) => {
            if (dropdownBlock.id !== nameTag) {
                const tagsListContainer = dropdownBlock.querySelector(".tagsList-block");
                const dropdownInputIcon = dropdownBlock.querySelector(".dropdown-divInputIcon");
                dropdownBlock.classList.remove(dropdownBlockTags);
                dropdownBlock.classList.add(dropdownBlockNoTags);
                tagsListContainer.classList.remove(displayTags);
                tagsListContainer.classList.add(displayNoTags);
                dropdownInputIcon.classList.remove(dropdownDivInputIconTags);
                dropdownInputIcon.classList.add(dropdownDivInputIconNoTags);
            }
        });
    }

    dropdownButton.addEventListener('click', (e) => {
        e.preventDefault();
        const tagsListContainer = dropdownContainer.querySelector(".tagsList-block");
        const dropdownInputIcon = dropdownContainer.querySelector(".dropdown-divInputIcon");
        const isOpen = tagsListContainer.classList.contains("display-tags");

        closeAllOtherDropdowns(nameTag);

        dropdownContainer.classList.toggle(dropdownBlockTags, !isOpen);
        dropdownContainer.classList.toggle(dropdownBlockNoTags, isOpen);
        tagsListContainer.classList.toggle(displayTags, !isOpen);
        tagsListContainer.classList.toggle(displayNoTags, isOpen);
        dropdownInputIcon.classList.toggle(dropdownDivInputIconTags, !isOpen);
        dropdownInputIcon.classList.toggle(dropdownDivInputIconNoTags, isOpen);
    });
}

export function renderTagList(nameTag, tagList){
    let tagsListContainer = document.querySelector(`.tagsList-block-${nameTag}`);
    tagsListContainer.innerHTML = "";

    for (const tag of tagList) {
        let tags = document.createElement("li");
        tags.textContent = tag;
        tagsListContainer.appendChild(tags);

        //Quand on clic sur le tag lance addTag
        tags.addEventListener('click', (e) => {
            e.preventDefault();
            addTag(tags, nameTag);
            // search(recipes, 'coco')
        })
    }
}

//permet d'ajouter / supprimer des tags
function addTag (tags, nameTag) {
    const tagsText = document.createElement("span");
    tagsText.className = `tags-text`;
    tagsText.textContent = tags.textContent;

    const tagsCross = document.createElement("i");
    tagsCross.className = `fa-regular fa-circle-xmark fa-lg`;

    const tagsButton = document.createElement("button");
    tagsButton.className = `circle-x noPadding`;
    tagsButton.append(tagsCross);

    const tagsBlock = document.createElement("div");
    tagsBlock.className = `col-1 tags-block tags-block-${nameTag} noPadding gapMainElt`;
    tagsBlock.append(tagsText, tagsButton);

    const tagsElt = document.getElementById("tags");
    tagsElt.append(tagsBlock);

    tagsButton.addEventListener('click', (e) => {
        e.preventDefault();
        tagsBlock.remove();
    })
}

//permet de filtrer la liste des tags en faisant une recherche dans leur input dropdown
function searchTagList(nameTag, tagList) {
    const dropdownInput = document.querySelector(`.dropdown-${nameTag}`);
    dropdownInput.addEventListener('input', () => {
        const searchTerm = dropdownInput.value.toLowerCase();
        const filteredTagList = tagList.filter(tag => tag.toLowerCase().includes(searchTerm));
        renderTagList(nameTag, filteredTagList);
    });
}

export function init(nameTag, tagList) {
    renderDropdown(nameTag);
    renderTagList(nameTag, tagList);
    searchTagList(nameTag, tagList);
}