let popupButtons = document.querySelectorAll('[data-popup]');
const html = document.querySelector('html');
let templates =
{
    container: '<div class="popup__background"><div class="popup__container"></div></div>',
    close: '<button class="popup__close"><svg class= "icon" ><use xlink: href="img/sprite.svg#close"></use></svg ></button >',
    anchor: '<div class="anchor"></div>'
};


popupButtons.forEach(function (button) {
    let popupId = button.getAttribute('data-popup')
    button.addEventListener('click', function (event) {

        openPopup(popupId);
        onClickClose(document.querySelector(popupId));
        event.stopImmediatePropagation();

    });

});

let openPopup = function (popupId) {
    createTemplates();
    setTimeout(() => {
        document.querySelector('.popup__background').classList.add('opened')
    }, 100)
    
    let popupObj = document.querySelector(popupId);

    // запрет прокрутки
    html.classList.add('popup__active');
    

    // якорь, чтобы вернуть элемент обратно
    popupObj.insertAdjacentHTML('afterend', templates.anchor);

    document.querySelector('.popup__container').append(popupObj);
    popupObj.classList.add('popup__window');
    popupObj.insertAdjacentHTML('afterbegin', templates.close);

}


let cleaning = () => {
    let anchor = document.querySelector('.anchor');
    let openedPopup = document.querySelector('.popup__window');
    anchor.after(openedPopup);
    anchor.remove();
    openedPopup.classList.remove('popup__window');
    html.classList.remove('popup__active');
    document.querySelector('.popup__close').remove();
    document.querySelector('.popup__background').remove();
};

// создать обертку
let createTemplates = () => {
    document.querySelector('body').insertAdjacentHTML('afterbegin', templates.container);

};


function onClickClose(elem) {
    function outsideClickListener(event) {
        if (!elem.contains(event.target)) {  // проверяем, что клик не по элементу и элемент виде
            cleaning()
            document.removeEventListener('click', outsideClickListener);
        }
    }

    document.addEventListener('click', outsideClickListener)

    document.querySelector('.popup__close').onclick = () => {
        cleaning();
        document.removeEventListener('click', outsideClickListener);
    };
}



