export const api = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.drinks
}

export const cocktail = async (url) => {
    const info = await fetch(url);
    const data = await info.json();
    const category = data.drinks.map((drink) => drink);
    return category
}