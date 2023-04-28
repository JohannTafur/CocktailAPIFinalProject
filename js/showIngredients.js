import { cocktailsApi } from './apiConsuptio.js';

const bringIngredients = (ingredients) => {

    ingredients.map((ingredients) => {

        const cocktailIngredients = document.querySelector('.showCocktailIngredients');
        cocktailIngredients.innerHTML = ingredients.strIngredient1;

        const ingredientsTemplate = document.querySelector('.showCocktailIngredients');
        const ingredientsClone = ingredientsTemplate.cloneNode(true);
        document.querySelector('#addIngredients').appendChild(ingredientsClone);
    })
}

export const showIngredients = async (urlApi) => {
    bringIngredients(await cocktailsApi(urlApi))
}
