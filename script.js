
let saveButton = document.querySelector('.popup__button');

function addInput() {
    let name = document.getElementById("name");
    let profesion = document.getElementById("proffesion");
    let nameNew = document.querySelector('.profile__main-text');
    let profesionNew = document.querySelector('.profile__text');
  
    nameNew.textContent = `${name.value}`;
    profesionNew.textContent = `${profesion.value}`;

    name.value = '';
    profesion.value = '';
}

saveButton.addEventListener('click', addInput);