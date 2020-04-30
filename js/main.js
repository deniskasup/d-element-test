// полоска в футере
window.onload = function () {
    if (window.innerWidth > 767) {
        buttonPos = document.querySelector('.work__callback').getBoundingClientRect().left;
        document.querySelector('.line').setAttribute('style', 'width: ' + (buttonPos + 220) + 'px');
    }
}