export const api = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.drinks
}