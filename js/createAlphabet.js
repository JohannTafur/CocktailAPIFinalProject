export const alphabetCreate = () => {

    const contentElement = document.querySelector('#content');

    for (let i = 65; i <= 90; i++) {

        const letterElement = document.createElement('li');
        letterElement.classList.add('alphabetContent');
        letterElement.innerHTML = String.fromCharCode(i);

        contentElement.appendChild(letterElement);
    }
}
