const createCocktailInformation = (cocktail) => {

    const cocktaiInformation = document.querySelector('#cocktail');

    const cocktailName = document.createElement('h1');
    cocktailName.textContent = cocktail.strDrink
    cocktaiInformation.appendChild(cocktailName);

    const divImageAndIngredients = document.createElement('div');
    divImageAndIngredients.setAttribute('id', 'cocktailInformation');
    cocktaiInformation.appendChild(divImageAndIngredients);

    const divCocktailImage = document.createElement('div');
    divCocktailImage.setAttribute('id', 'cocktailImage');
    divImageAndIngredients.appendChild(divCocktailImage);

    const cocktailImage = document.createElement('img');
    cocktailImage.src = cocktail.strDrinkThumb;
    cocktailImage.alt = `Cocktail Name: ${cocktail.strDrink}`;
    divCocktailImage.appendChild(cocktailImage);

    const cocktailsIngredients = document.createElement('div');
    cocktailsIngredients.setAttribute('id', 'cocktailIngredients');
    divImageAndIngredients.appendChild(cocktailsIngredients);

    const ingredients = document.createElement('div');
    cocktailsIngredients.appendChild(ingredients);



    const ingredientImage = document.createElement('img');
    ingredientImage.src = `https://www.thecocktaildb.com/images/ingredients/${cocktail.strDrink}-Medium.png`
    ingredientImage.alt = `Ingredient Name: ${cocktail.strDrink}`
    ingredients.appendChild(ingredientImage);


    const ingredientName = document.createElement('p');
    ingredientName.textContent = cocktail.strInstructions
    ingredients.appendChild(ingredientName)

    // ingredinets insert

    const cocktailDescription = document.createElement('p')
    cocktailDescription.textContent = cocktail.strInstructions;
    cocktaiInformation.appendChild(cocktailDescription);


}
