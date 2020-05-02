let popupButtons = document.querySelectorAll('[data-popup]')
const html = document.querySelector('html')
let templates =
{
    container: '<div class="popup__background"><div class="popup__container"></div></div>',
    close: '<button class="popup__close"><svg class= "icon" ><use xlink: href="img/sprite.svg#close"></use></svg ></button >',
    anchor: '<div class="anchor"></div>'
}


popupButtons.forEach(function (button) {
    button.addEventListener('click', () => {
        openPopup(button.getAttribute('data-popup'));
        

    });

});


let openPopup = function (buttonId) {
    createTemplates();
    let popupObj = document.querySelector(buttonId)
    let anchor = popupObj.insertAdjacentHTML('afterend', templates.anchor)

    

}

// let openPopup = function () {

// }

// создать обертку
let createTemplates = () => {
    document.querySelector('body').insertAdjacentHTML('beforebegin', templates.container);

}