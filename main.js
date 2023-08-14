const button1 = document.getElementById('popupBtn');
const button2 = document.getElementById('popupBtn2');
const popUp = document.getElementById('popup');

// button1.addEventListener('click', displayMessage(), false);

function displayMessage() {
    popUp.classList.add("popup");
}

// button2.addEventListener('click', removeMessage(), false)
function removeMessage() {
    popUp.classList.remove('popup');
}
