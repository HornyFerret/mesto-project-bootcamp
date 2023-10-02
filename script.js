
let saveButton = document.querySelector('.popup__button');

function addInput() {
    let name = document.querySelector('.popup__input-first');
    let profesion = document.querySelector('.popup__input-second');
    let nameNew = document.querySelector('.profile__main-text');
    let profesionNew = document.querySelector('.profile__text');
  
    nameNew.textContent = `${name.value}`;
    profesionNew.textContent = `${profesion.value}`;

    name.value = '';
    profesion.value = '';
}

saveButton.addEventListener('click', addInput);