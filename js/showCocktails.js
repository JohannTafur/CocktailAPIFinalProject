import { cocktailsApi } from './apiConsuptio.js'

export const createCocktailCard = (cocktails) => {

    const cardCreate = (cocktails) => {

        const cards = document.querySelector('#cardContent');

        const content = document.createElement('div');
        content.classList.add('cocktailCards');
        content.setAttribute('id', cocktails.idDrink);

        const imgElement = document.createElement('img');
        imgElement.classList.add('showCocktailPicture');
        imgElement.src = cocktails.strDrinkThumb
        imgElement.alt = `cocktail name - ${cocktails.strDrink}`

        content.appendChild(imgElement)

        const divTextContent = document.createElement('div');
        divTextContent.classList.add('tittle');

        const textElement = document.createElement('h1');
        textElement.classList.add('showCocktailName');
        textElement.textContent = cocktails.strDrink

        divTextContent.appendChild(textElement)

        content.appendChild(imgElement)
        content.appendChild(divTextContent) 
        
        cards.appendChild(content)
    }

    cocktails.map(cardCreate)
}

export const showCocktails = async (urlApi) => {
    createCocktailCard(await cocktailsApi(urlApi))
}