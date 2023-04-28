export const cocktailsApi = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.drinks
}

export const ingredientsApi = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.ingredients
}