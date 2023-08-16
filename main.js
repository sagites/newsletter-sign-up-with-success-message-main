const button1 = document.getElementById('popupBtn');
const button2 = document.getElementById('popupBtn2');
const popUp = document.getElementById('popup');
const input = document.getElementById('inputEmail');
const mail = document.querySelector('#mail b');
const show = document.querySelector('.container');
// const image = document.querySelector('section .image')

button1.addEventListener('click', () => {
    popUp.classList.add('popup');
    show.classList.add('show');
    mail.innerText = input.value;
    clearInput();
}, false);

 button2.addEventListener('click', () => {
    popUp.classList.remove('popup')
    show.classList.remove('show');
 }, false);

function clearInput() {
    input.value = '';
}
