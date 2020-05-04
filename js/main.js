// полоска в футере
window.onload = function () {
    if (window.innerWidth > 767) {
        buttonPos = document.querySelector('.work__callback').getBoundingClientRect().left;
        document.querySelector('.line').setAttribute('style', 'width: ' + (buttonPos + 220) + 'px');
    }
}



let messageForm = document.querySelector('#message-form');
messageForm.onsubmit = async (e) => {
   e.preventDefault();

   try {
       let popupWindow = document.querySelector('.popup__window')
       let formData = new FormData(messageForm)
       let response = await fetch('js/response.php', {
           method: 'POST',
           body: formData
       });
       let result = await response.text();

       // Успешно
       popupWindow.classList.add('sended')
       popupWindow.insertAdjacentHTML('afterend', '<div class="success"> Успешно отправлено!</div>')
           
   } catch(e) {
       console.error('Ошибка: ', e);
   
   }
 
};