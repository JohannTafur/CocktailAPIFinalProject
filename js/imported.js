import { showCocktails } from './showCocktails.js';
import { showCategory  } from './showCategory.js';
import { showIngredients } from './showIngredients.js'
import { htmlEvents } from './events.js'

showCocktails('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
showIngredients('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
showCategory('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
htmlEvents()