const menuButton = document.querySelector('.botao-lateral');
const menu = document.querySelector('.menu');



function showMenu() {

    menu.classList.toggle('menu-active');
}

function fechaMenu() {
    menu.classList.remove('menu-active');
}