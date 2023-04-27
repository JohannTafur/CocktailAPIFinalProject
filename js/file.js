const cocktail = async () => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const info = await fetch(url);
    const data = await info.json();
    const category = data.drinks.map((drink) => drink);
    console.log(category);
    return category
}

const showMenu = (newLink) => {
    newLink.map((newLink =>{

        const cocktailsName = document.querySelector(".nameFromCategory");
        cocktailsName.innerHTML = `${newLink.strCategory}`

        const cocktailTemplate = document.querySelector('.nameFromCategory')
        const cocktailsClone = cocktailTemplate.cloneNode(true)

        document.querySelector('#addCategory').appendChild(cocktailsClone);
    }))
    const cardDelete = document.querySelector('#delete');
    cardDelete.remove();
}

const showCategory = async () =>{
    showMenu(await cocktail());
}

showCategory()