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

function renderDropdown(nameTag) {
    let tagsListContainer = document.createElement("ul");
    tagsListContainer.classList.add("display-tagsList", "tagsList-block", `tagsList-block-${nameTag}`);
    // tagsListContainer.id = `tagsList-block-${nameTag}`;

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
    dropdownContainer.classList.add("col-2", "dropdown-block", `dropdown-block-${nameTag}`, "noPadding");
    dropdownContainer.id = nameTag;
    dropdownContainer.appendChild(dropdownInput);
    dropdownContainer.appendChild(dropdownButton);
    dropdownContainer.appendChild(tagsListContainer);

    let dropdown = document.getElementById("dropdown");
    dropdown.appendChild(dropdownContainer);

    //Ouvrir et fermer la liste de tags
    dropdownButton.addEventListener('click', (e) => {
        e.preventDefault();
        if(tagsListContainer.classList.contains("display-tagsList")) {
            tagsListContainer.classList.remove("display-tagsList");
        }else{
            tagsListContainer.classList.add("display-tagsList");
        }
    });
}


    // let openDropdownIcon = document.getElementById(nameTag);
    // openDropdownIcon.appendChild(tagsContainer);

    //addEventListener -> Ouvrir/fermé le menu (Le UL)
    // let openDropdownIcon = document.getElementById(nameTag);
    // openDropdownIcon = openDropdownIcon.querySelector("button");
    // console.log(openDropdownIcon);


    // dropdownButton.addEventListener('click', (e) => { RenderTagList(nameTag, tagList) });

function openDropdown(nameTag) {
    let tagsListContainer = document.getElementById(`tagsList-block-${nameTag}`);
    tagsListContainer.classList.remove('test')
}

function closeDropdown(nameTag) {
    let tagsListContainer = document.getElementById(`tagsList-block-${nameTag}`);
    tagsListContainer.classList.add('test')
}

// function RenderTagList(nameTag, tagList){
//     console.log(tagList, nameTag);

//     let tags = document.createElement("li");
//     tags.textContent = tagList;

//     let tagsContainer = document.createElement("ul");
//     tagsContainer.appendChild(tags);
//     // GetById (section > tag INGREDIENT)
//     // Création HTML des tags (LI)
//     //
// }

// const RenderTagList = (nameTag, tagList) => {
function RenderTagList(nameTag, tagList){
    //getElementById pour appendchild le tagsListContainer dans renderDropDown
    // let tagsListContainer = document.getElementsByClassName(`tagsList-block-${nameTag}`);
    let tagsListContainer = document.querySelector(`.tagsList-block-${nameTag}`);

    for (const tag of tagList) {
        let tags = document.createElement("li");
        tags.textContent = tag;
        // tagsListContainer[0].appendChild(tags);
        tagsListContainer.appendChild(tags);

        //Quand on clic sur le tag -> lancer ADDTAG()
        tagsListContainer.addEventListener('click', (e) => {
            //Si non e.target.textContent
            addTag(tags, nameTag)
        })
    }
}

// AddTag (LEs tage en question nom du tag, Catégorie HTML) -> //Close Tag

export function init(nameTag, tagList){
    renderDropdown(nameTag)
    RenderTagList(nameTag, tagList)
}