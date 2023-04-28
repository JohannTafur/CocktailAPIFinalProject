export const htmlEvents = () => {
    const menu = document.querySelector('#menu');
    const menu2 = document.querySelector('#menu2');
    const menuTop = menu.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= menuTop) {
            menu.classList.add('fixed');
            menu2.classList.add('menu2');

        } else {
            menu.classList.remove('fixed');
            menu2.classList.remove('menu2');
        }
    });
}