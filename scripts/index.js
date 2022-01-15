import burgerMenu from "./modules/burgerMenu.js";
import serchControl from "./modules/searchControl.js";
burgerMenu ({
    selectorBtn: '.navigation__btn',
    selectorMenu: '.navigation',
    classActive: 'navigation_active',
});
serchControl({
    selectorBtn:'.search__button',
    selectorForm:'.search',
    classActive:'search_active',
    selectorClose:'.search__close',

    });