import { api } from './apiConsuptio.js';

export const createCocktailCard = (cocktails) => {

    cocktails.map((cocktails) => {

        const cocktailImages = document.querySelector(".showCocktailPicture");
        cocktailImages.src = cocktails.strDrinkThumb;

        const cocktailsName = document.querySelector(".showCocktailName");
        cocktailsName.innerHTML = cocktails.strDrink;

        const coctailid = cocktails.idDrink;

        const cocktailTemplate = document.querySelector('.cocktailCards');
        const cocktailsClone = cocktailTemplate.cloneNode(true);

        cocktailsClone.setAttribute('id', coctailid)

        cocktailsClone.addEventListener('click', () => {
            const clickedCocktailId = cocktailsClone.getAttribute('id');
            console.log(clickedCocktailId);
        });

        document.querySelector('#cardContent').appendChild(cocktailsClone);
    })

    const cardDelete = document.querySelector('#delete');
    cardDelete.remove();
}

export const showCocktails = async (urlApi) => {
    createCocktailCard(await api(urlApi))
}