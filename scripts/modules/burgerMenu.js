const burgerMenu = ({classActive,selectorBtn,selectorMenu})=>{
    const btn= document.querySelector(electorBtn);
    const menu= document.querySelector(selectorMenu);

    btn.addEventListener('click',()=>{
        menu.classList.add(classActive);
    })
};
export default burgerMenu;