import burgerMenu from "./modules/burgerMenu.js";
import serchControl from "./modules/searchControl.js";
burgerMenu ({
    selectorBtn: '.navigation__btn',
    selectorMenu: '.navigation',
    classActive: 'navigation_active',
    closeClass: 'navigation__link , header__btn',
});
serchControl({
    selectorBtn:'.search__button',
    selectorForm:'.search',
    classActive:'search_active',
    selectorClose:'.search__close',
    });

document.addEventListener('click', e => e.preventDefault()
);