const selectControl = (selectorBtn,selectorSelect,classActive,breakpoint) => {

const buttons = document.querySelectorAll(selectorBtn);
const selects = document.querySelectorAll(selectorSelect);

    buttons.forEach(btn=>{
        btn.addEventListener('click',()=>{
            if(document.documentElement.clientWidth <= breakpoint){
                
            }
        })
    });
};

export default selectControl;