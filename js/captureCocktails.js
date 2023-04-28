import { ingredientsApi } from './apiConsuptio.js'

export const capture = () => {
    const listItems = document.querySelector('#cardContent');

    listItems.addEventListener('click', async (event) => {
        const text = event.target.textContent;
        console.log(text);
    })
}