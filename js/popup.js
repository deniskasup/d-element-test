let popupButtons = $('[data-popup]');
let html = $('html');
let templates =
{
    container: '<div class="popup__background"><div class="popup__container"></div></div>',
    close: '<button class="popup__close"><svg class= "icon" ><use xlink: href="img/sprite.svg#close"></use></svg ></button >'
}


//  отловить нажатие
popupButtons.click(function (e) {
    openPopup($(e.target).attr('data-popup'));

    // закрытие по клику вне блока
    $(document).mouseup(function (e) {
        let popupWindow = $(".popup__window");
        if ($('.popup__background').length > 0) {
            if (!popupWindow.is(e.target) && popupWindow.has(e.target).length === 0) {
                hidePopup();
            }
        }
    });
    // закрыть на крестик
    $('.popup__close').click(() => {
        hidePopup();
    });
});

// создаем контейнеры
let createContainer = function () {
    $('body').prepend(templates.container)
};

// открыть попап
let openPopup = function (e) {

    popupObj = $(e)

    createContainer()
    let popupContainer = $('.popup__container');

    let clone = popupObj.clone()
    popupContainer.append(clone)
    clone.addClass('popup__window')
    clone.prepend(templates.close);

    setTimeout(() => $('.popup__background').addClass('opened'), 100)

    // запрет прокрутки
    html.addClass('popup__active')
    
    // центрирование, если высота формы меньше экрана 
    if (document.querySelector('.popup__window').scrollHeight <= $(window).height()) {
        popupContainer.css('align-items','center')
    }

};

// закрыть попап
let hidePopup = function () {
    html.removeClass('popup__active')
    $('.popup__background').removeClass('opened')
    setTimeout((()=> $('.popup__background').remove()), 200)
};



// FORM DATA

let  formFunc = function (elem) {
    elem.onsubmit = async (e) => {
        e.preventDefault();
        let response = await fetch()

    }
}