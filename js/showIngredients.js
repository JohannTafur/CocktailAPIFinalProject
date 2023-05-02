import { cocktailsApi } from './apiConsuptio.js'

const ingredientsCreate = (ingredients) => {

    const ingredientsMenu = document.querySelector('#menu')

    const listMenu = document.createElement('ul');
    ingredientsMenu.appendChild(listMenu);

    ingredients.map((ingredient) => {

        const ingredientsName = document.createElement('li')
        ingredientsName.textContent = ingredient.strIngredient1;
        listMenu.appendChild(ingredientsName)
    })
}

export const showIngredient = async (url) => {
    ingredientsCreate(await cocktailsApi(url))
}