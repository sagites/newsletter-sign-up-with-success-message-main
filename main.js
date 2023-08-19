const button1 = document.getElementById('popupBtn');
const button2 = document.getElementById('popupBtn2');
const popUp = document.getElementById('popup');
const input = document.getElementById('inputEmail');
const mail = document.querySelector('#mail b');
const show = document.querySelector('.container');
// const image = document.querySelector('section .image')

button1.addEventListener('submit', (event) => {
    event.preventDefault();
    popUp.classList.add('popup');
}, false);



button2.addEventListener('submit', remeoveElement(), false);