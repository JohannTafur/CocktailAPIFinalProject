import { showCocktails } from './showCocktails.js';
import { alphabetCreate } from './createAlphabet.js';
import { showCategory } from './file.js'

showCocktails('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
alphabetCreate()
showCategory()
