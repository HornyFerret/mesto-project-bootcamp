const changeName = document.querySelector('.profile__info-picture');
const addPlace = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__button');

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

// function for all page
function openPlace(item) {
  item.classList.add("popup_opened");
};
function closePlace(item) {
  item.classList.remove("popup_opened");
};

  // change name
let nameChange = document.getElementById("name");
let profesion = document.getElementById("proffesion");
let nameNew = document.querySelector('.profile__main-text');
let profesionNew = document.querySelector('.profile__text');

changeName.addEventListener('click', function () {
  openPlace(popup);
  nameChange.value = nameNew.textContent;
  profesion.value = profesionNew.textContent;
}); 

saveButton.addEventListener('click', function () {
  nameNew.textContent = `${nameChange.value}`;
  profesionNew.textContent = `${profesion.value}`;
  closePlace(popup);
});

closePopup.addEventListener('click', function () {
  closePlace(popup);
});

// like

const likeButton = document.querySelectorAll('#like');
let likeButtonMassive = Array.from(likeButton);

likeButtonMassive.forEach(function (item) {
  item.addEventListener('click', function (evt){
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like_active');
  });
  return item;
});

// add place card

const namePlace = document.getElementById("name-place");
const linkPicture = document.getElementById("link-picture");
const openPlacePopup = document.getElementById("place");
const closePlacePopup = document.getElementById("place-close");
const savePlacePopup = document.getElementById("place-save");
const elements = document.querySelector('.elements');
const element = document.querySelector('#new_element').content;


addPlace.addEventListener('click', function(){
  openPlace(openPlacePopup);
});

closePlacePopup.addEventListener('click', function(){
  closePlace(openPlacePopup);
});

function changeElement(itemText, itemPhoto) {
  const elementClone = element.querySelector('.element').cloneNode(true);
  elementClone.querySelector('.element__text').textContent = itemText;
  elementClone.querySelector('.element__image').src = itemPhoto;
  return elementClone;
};

function addOnElements(element) {
  elements.prepend(element);
};

initialCards.forEach((item) => {
 addOnElements(changeElement(item.name, item.link));
});







