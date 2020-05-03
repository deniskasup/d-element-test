function validate(form_id,email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms[form_id].elements[email].value;
    if(reg.test(address) == false) {
       alert('Введите корректный e-mail');
       return false;
    }
 }


 let formMessage = document.querySelector('#form-message');
 formMessage.onsubmit = async (e) => {
    e.preventDefault();

    try {
        let formData = new FormData(formMessage)
        let response = await fetch('js/response.php', {
            method: 'POST',
            body: formData
        });
        let result = await response.text();

        console.log('Успешно отправлено');


        let popupWindow = document.querySelector('.popup__window')
        popupWindow.classList.add('sended')
        popupWindow.insertAdjacentHTML('afterend', '<div class="success"> Успешно отправлено!</div>')
            
    } catch(e) {
        console.error(e);
    
    }
  
};