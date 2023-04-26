const cocktail = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const info = await fetch(url);
    const data = await info.json();
    const category = data.drinks.map((drink) => drink.strCategory);
    console.log(category);
}

cocktail();