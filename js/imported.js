import { showCocktails } from './showCocktails.js';
import { showIngredients } from './showIngredients.js'
import { htmlEvents } from './events.js'
import {capture} from './captureCocktails.js'

showCocktails('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
showIngredients('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
capture()
htmlEvents()