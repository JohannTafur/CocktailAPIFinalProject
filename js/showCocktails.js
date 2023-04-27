const cocktailsApi = async () => {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.drinks
}

const createCocktailCard = (cocktails) => {

    cocktails.map((cocktails) => {

        const cocktailImages = document.querySelector(".showCocktailPicture");
        cocktailImages.src = cocktails.strDrinkThumb

        const cocktailsName = document.querySelector(".showCocktailName");
        cocktailsName.innerHTML = cocktails.strDrink

        const cocktailTemplate = document.querySelector('.cocktailCards')
        const cocktailsClone = cocktailTemplate.cloneNode(true)

        document.querySelector('#cardContent').appendChild(cocktailsClone);
    })

    const cardDelete = document.querySelector('#delete');
    cardDelete.remove();
}

const showCoctails = async () => {
    createCocktailCard(await cocktailsApi())
}

showCoctails()