import {cocktailsApi} from './apiConsuptio.js'
let filterIngredients = [];

const ingredient = async (cocktailUrl) => {
    const position = cocktailUrl[0]

    filterIngredients = [];
    for (const prop in position) {
        if (prop.startsWith('strIngredient') && position[prop] !== null) {

            filterIngredients.push(position[prop]);
        }
    }
    // export default filterIngredients
    console.log( filterIngredients);
    // return filterIngredients
};

export const showIngredients = async (url) => {
    ingredient(await cocktailsApi(url))
}