import { showCocktails } from './showCocktails.js';
import { alphabetCreate } from './createAlphabet.js';
import { showCategory } from './showCategory.js'

showCocktails('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
alphabetCreate();
showCategory('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
