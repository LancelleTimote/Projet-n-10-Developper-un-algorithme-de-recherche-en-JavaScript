// import {tagSearch} from "./search.js";

export function getTags(recipes) {
    return recipes.reduce((tags, recipe) => {
        //Parcourt le tableau des ingrédients de la recette
        for (const ingredients of recipe.ingredients) {
            //Met en majuscule la première lettre de l'ingrédient et supprime les espaces au début et à la fin
            const ingredientName = capitalizeFirstLetter(ingredients.ingredient.trim());
            //Vérifie si l'ingrédient est déjà présent dans le tableau "ingredients" de l'objet "tags"
            if (!tags.ingredients.includes(ingredientName)) {
                //Ajoute l'ingrédient dans le tableau "ingredients" de l'objet "tags" s'il n'est pas déjà présent
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
    //Initialise l'objet "tags" avec les tableaux vides
    { ingredients: [], appliances: [], ustensils: [] });
}

//Prend une chaîne de caractères en entrée et renvoie une nouvelle chaîne avec la première lettre en majuscule
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//Crée et affiche un menu déroulant sur la page pour les tags d'une catégorie spécifique
function renderDropdown(nameTag) {
    //Conteneur pour la liste des tags
    const tagsListContainer = createTagsListContainer(nameTag);
    //Icône de l'input pour le menu déroulant
    const dropdownInputIcon = createDropdownInputIcon(nameTag);
    //Conteneur du menu déroulant complet avec l'icône et la liste des tags
    const dropdownContainer = createDropdownContainer(nameTag, dropdownInputIcon, tagsListContainer);
    //Ajoute le conteneur du menu déroulant à la page
    addDropdownContainerToPage(dropdownContainer);

    //Récupère le bouton du menu déroulant pour y ajouter un événement de clic
    const dropdownButton = dropdownInputIcon.querySelector("button");
    //Ajoute l'événement de clic qui ouvre et ferme le menu déroulant et ferme les autres menus déroulants ouverts pour cette catégorie de tags
    dropdownButton.addEventListener('click', (e) => {
        e.preventDefault();
        toggleDropdown(dropdownContainer, tagsListContainer, dropdownInputIcon);
        closeAllOtherDropdowns(nameTag);
    });
}

//Création conteneur pour la liste des tags d'une catégorie spécifique
function createTagsListContainer(nameTag) {
    const tagsListContainer = document.createElement("ul");
    tagsListContainer.className = `display-noTags tagsList-block tagsList-block-${nameTag}`;
    return tagsListContainer;
}

function createDropdownInputIcon(nameTag) {
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
    return dropdownInputIcon;
}

function createDropdownContainer(nameTag, dropdownInputIcon, tagsListContainer) {
    const dropdownContainer = document.createElement("div");
    dropdownContainer.className = `col-2 dropdown-block dropdown-block-noTags dropdown-block-${nameTag} noPadding`;
    dropdownContainer.id = nameTag;
    dropdownContainer.append(dropdownInputIcon, tagsListContainer);
    return dropdownContainer;
}

function addDropdownContainerToPage(dropdownContainer) {
    document.getElementById("dropdown").appendChild(dropdownContainer);
}

function toggleDropdown(dropdownContainer, tagsListContainer, dropdownInputIcon) {
    const isOpen = tagsListContainer.classList.contains("display-tags");
    dropdownContainer.classList.toggle("dropdown-block-tags", !isOpen);
    dropdownContainer.classList.toggle("dropdown-block-noTags", isOpen);
    tagsListContainer.classList.toggle("display-tags", !isOpen);
    tagsListContainer.classList.toggle("display-noTags", isOpen);
    dropdownInputIcon.classList.toggle("dropdown-divInputIcon-tags", !isOpen);
    dropdownInputIcon.classList.toggle("dropdown-divInputIcon-noTags", isOpen);
}

function closeAllOtherDropdowns(nameTag) {
    const dropdownBlocks = document.getElementsByClassName("dropdown-block");
    Array.from(dropdownBlocks).forEach((dropdownBlock) => {
        if (dropdownBlock.id !== nameTag) {
            const tagsListContainer = dropdownBlock.querySelector(".tagsList-block");
            const dropdownInputIcon = dropdownBlock.querySelector(".dropdown-divInputIcon");
            dropdownBlock.classList.remove("dropdown-block-tags");
            dropdownBlock.classList.add("dropdown-block-noTags");
            tagsListContainer.classList.remove("display-tags");
            tagsListContainer.classList.add("display-noTags");
            dropdownInputIcon.classList.remove("dropdown-divInputIcon-tags");
            dropdownInputIcon.classList.add("dropdown-divInputIcon-noTags");
        }
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
            if (!tags.classList.contains('selected')) {
                addTag(tags, nameTag);
                tags.classList.add('selected');
                // tagSearch();
            }
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
        tags.classList.remove('selected');
        // tagSearch();
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