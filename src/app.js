"use strict"

document.addEventListener('click', handlerMenu);

function handlerMenu(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')) {
        console.log(targetItem);
        document.documentElement.classList.toggle('menu-open');
    }
}