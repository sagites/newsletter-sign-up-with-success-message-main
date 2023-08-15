const button1 = document.getElementById('popupBtn');
const button2 = document.getElementById('popupBtn2');
const popUp = document.getElementById('popup');
const input = document.getElementById('input_email');
const value = input.value;


button1.addEventListener('click', displayMessage(), false);

function displayMessage(event) {
    // event.preventDefault();
    popUp.classList.add("popup");
}

 button2.addEventListener('click', removeMessage(), false)
function removeMessage() {
    popUp.classList.remove('popup');
}
