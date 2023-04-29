import { createCocktailCard } from './showCocktails.js'
import { cocktailsApi } from './apiConsuptio.js'

export const alphabetCreate = () => {

    const contentElement = document.querySelector('#content');

    for (let i = 65; i <= 90; i++) {

        const letterElement = document.createElement('li');
        letterElement.classList.add('alphabetContent');

        letterElement.addEventListener('click', async () => {
            const click = letterElement.innerHTML
            console.log(click);

            createCocktailCard(await cocktailsApi(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${click}`));

        })

        letterElement.innerHTML = String.fromCharCode(i);

        contentElement.appendChild(letterElement);
    }
}
