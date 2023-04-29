import { cocktailsApi } from './apiConsuptio.js'

const createCocktailCard = (cocktails) => {

    const cardCreate = (cocktails) => {

        const cocktailTemplate = document.querySelector('.cocktailCards')
        const cocktailsClone = cocktailTemplate.cloneNode(true)

        cocktailTemplate.setAttribute('id', cocktails.idDrink)

        const cocktailImages = document.querySelector(".showCocktailPicture");
        cocktailImages.src = cocktails.strDrinkThumb
        cocktailImages.alt = `cocktail name - ${cocktails.strDrink}`

        const cocktailsName = document.querySelector(".showCocktailName");
        cocktailsName.innerHTML = cocktails.strDrink

        document.querySelector('#cardContent').appendChild(cocktailsClone);
    }

    cocktails.map(cardCreate)

    const cardDelete = document.querySelector('#delete');
    cardDelete.remove();
}

export const showCocktails = async (urlApi) => {
    createCocktailCard(await cocktailsApi(urlApi))
}