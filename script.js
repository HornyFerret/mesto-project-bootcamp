const changeName = document.querySelector('.profile__info-picture');
const openPopup = document.querySelector('.popup');
const closeChangeName = document.querySelector('.popup__close');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

changeName.addEventListener('click', function () {
    const saveButton = document.querySelector('.popup__button');
    let name = document.getElementById("name");
    let profesion = document.getElementById("proffesion");
    let nameNew = document.querySelector('.profile__main-text');
    let profesionNew = document.querySelector('.profile__text');

    openPopup.classList.add("popup_opened");

    name.value = nameNew.textContent;
    profesion.value = profesionNew.textContent;


    function addInput() {
        nameNew.textContent = `${name.value}`;
        profesionNew.textContent = `${profesion.value}`;

        name.value = '';
        profesion.value = '';
    }

    saveButton.addEventListener('click', function () {
        addInput();
        openPopup.classList.remove("popup_opened");
    });
  }); 

    
closeChangeName.addEventListener('click', function () {
    openPopup.classList.remove("popup_opened");
});


