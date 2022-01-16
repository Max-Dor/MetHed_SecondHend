import burgerMenu from "./modules/burgerMenu.js";
import searchControl from "./modules/searchControl.js";

burgerMenu({
    selectorBtn: '.navigation__btn',
    selectorMenu: '.navigation',
    classActive: 'navigation_active',
    selectorClose: '.navigation__link, .header__btn',
    selectorClose:'.navigation__link, .header__btn',
});

searchControl({
    selectorBtn: '.search__button',
    selectorForm: '.search',
    classActive: 'search_active',
    selectorClose: '.search__close',
    breakpoint: 760,
});

document.addEventListener('click', e => e.preventDefault()
);