export const cocktailsApi = async () => {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.drinks
}

export const ingredientsApi = async () => {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.drinks
}