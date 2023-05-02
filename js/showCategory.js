import { showCocktails } from "./showCocktails.js";
import { cocktailsApi } from "./apiConsuptio.js";

const showMenu = (newLink) => {

    const category = document.querySelector('#category');

    const addCategory = document.createElement('ul');
    addCategory.setAttribute('id','addCategory' );

    category.appendChild(addCategory);

    newLink.map((nameCategory)=>{
        const nameFromCategory = document.createElement('li');
        nameFromCategory.classList.add('nameFromCategory');
        nameFromCategory.addEventListener('click', async () => {
            const click = nameFromCategory.innerHTML
            console.log(click);
            showCocktails(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${click}`)
        })
        nameFromCategory.textContent = nameCategory.strCategory
        addCategory.appendChild(nameFromCategory);
    })
}

export const showCategory = async (url) => {
    showMenu(await cocktailsApi(url));
}