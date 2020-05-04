let forms = document.querySelectorAll('form')
let rules = {
    name: /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/,
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,

}

let validationErrors = function (form) {
    let errorFields = {
        name: form.name.nextElementSibling,
        email: form.email.nextElementSibling,
        text: form.messageText.nextElementSibling
    }

    form.name.addEventListener('blur', () => {
        if (!rules.name.test(form.name.value)) {
            errorFields.name.innerHTML = 'Incorrect name!'
        } else {
            errorFields.name.innerHTML = ''
        }

    });

    form.email.addEventListener('blur', () => {
        if (!rules.email.test(form.email.value)) {
            errorFields.email.innerHTML = 'Incorrect email!'
        } else {
            errorFields.email.innerHTML = ''
        }

    });

    form.messageText.addEventListener('blur', () => {
        if (!(form.messageText.value != '')) {
            errorFields.text.innerHTML = 'Field is empty!'
        }else if (form.messageText.value.length < 10) {
            errorFields.text.innerHTML = 'The text is too short!'
        } 
        
        else {
            errorFields.text.innerHTML = ''
        }

    });

}

forms.forEach(form => {
    form.addEventListener('input', () => {
        if (rules.name.test(form.name.value) &&
            (rules.email.test(form.email.value)) &&
            ((form.messageText.value != '') && 
            (form.messageText.value.length > 10))) {
            form.button.removeAttribute('disabled')
        } else {
            form.button.setAttribute('disabled', '')

        }
    })
    validationErrors(form);

});
