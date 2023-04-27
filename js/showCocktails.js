import { cocktailsApi } from './apiConsuptio.js';

const createCocktailCard = (cocktails) => {

    cocktails.map((cocktails) => {

        const cocktailImages = document.querySelector(".showCocktailPicture");
        cocktailImages.src = cocktails.strDrinkThumb;

        const cocktailsName = document.querySelector(".showCocktailName");
        cocktailsName.innerHTML = cocktails.strDrink;

        const cocktailTemplate = document.querySelector('.cocktailCards');
        const cocktailsClone = cocktailTemplate.cloneNode(true);

        document.querySelector('#cardContent').appendChild(cocktailsClone);
    })

    const cardDelete = document.querySelector('#delete');
    cardDelete.remove();
}

export const showCocktails = async () => {
    createCocktailCard(await cocktailsApi())
}