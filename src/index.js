// index.js

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

import './styles/index.css'; // импорт главного файла стилей
const changeName = document.querySelector('.profile__info-picture');
const addPlace = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveButton = document.getElementById("saveButton");

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
  item.classList.remove("popup_closet");
};
function closePlace(item) {
  item.classList.remove("popup_opened");
  item.classList.add("popup_closet");
};


// функция добавления объявления об ошибке в имени

function wrongInputOn(item) {
  let formError = document.querySelector(`.${item.id}_incorrect`);
  item.classList.add("popup__input_noname");
  formError.textContent = item.validationMessage;
  formError.classList.add('popup__span_incorrect');
  saveButton.classList.remove("popup__button");
  saveButton.classList.add("popup__button_grey");
};

function wrongInputOff(item) {
  let formError = document.querySelector(`.${item.id}_incorrect`);
  item.classList.remove("popup__input_noname");
  formError.classList.remove("popup__span_incorrect");
  formError.textContent = '';
  saveButton.classList.remove("popup__button");
  saveButton.classList.add("popup__button_grey");
};

  // переменные изменения имени и открытия поп-апа с изменением имени

let nameChange = document.getElementById("name");
let profesion = document.getElementById("proffesion");
let nameNew = document.querySelector('.profile__main-text');
let profesionNew = document.querySelector('.profile__text');

changeName.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPlace(popup);
  nameChange.value = nameNew.textContent;
  profesion.value = profesionNew.textContent;
}); 

// слушатель изменения имени и профессии без ошибок и с сохранением

const popupForm = document.querySelector('.popup__form');


popupForm.addEventListener('input', function (evt){
  evt.preventDefault();
  if (nameChange.validity.valid == true) {
    wrongInputOff(nameChange);
  }
  else {
    wrongInputOn(nameChange);
  };

  if (profesion.validity.valid == true) {
    wrongInputOff(profesion);
  }
  else {
    wrongInputOn(profesion);
  };

// сохранение попапа

  if (nameChange.validity.valid == true && profesion.validity.valid == true) {
    saveButton.classList.remove("popup__button_grey");
    saveButton.classList.add("popup__button");
    saveButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (nameChange.validity.valid == true && profesion.validity.valid == true) {
        nameNew.textContent = `${nameChange.value}`;
        profesionNew.textContent = `${profesion.value}`;
        closePlace(popup);
      }
      else {
        console.log("Неверно набрано");
      };
    });
  };
});

// закрытие поп-апа
closePopup.addEventListener('click', function () {
  closePlace(popup);
});


// add place card

let namePlace = document.getElementById("name-place");
let linkPicture = document.getElementById("link-picture");
const placePopup = document.getElementById("place");
const plaseForm = document.getElementById("form-Place");
const closePlacePopup = document.getElementById("place-close");
const savePlaceButton = document.getElementById("place-save");
const elements = document.querySelector('.elements');
const element = document.querySelector('#new_element').content;


addPlace.addEventListener('click', function(){
  openPlace(placePopup);
});

closePlacePopup.addEventListener('click', function(){
  plaseForm.reset();
  closePlace(placePopup);
});

function deleteElementButton(item) {
  item.remove();
};

// functions to add new elements
function changeElement(itemText, itemPhoto) {
  const elementClone = element.querySelector('.element').cloneNode(true);
  elementClone.querySelector('.element__text').textContent = itemText;
  elementClone.querySelector('.element__image').src = itemPhoto;
  elementClone.querySelector('.element__image').alt = itemText;
  const deleteButton = elementClone.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', () => deleteElementButton(elementClone));
  const likeButton = elementClone.querySelector('.element__like');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active');
  });
  return elementClone;
};

function addOnElements(element) {
  elements.prepend(element);
};

// thats massive elements
initialCards.forEach((item) => {
 addOnElements(changeElement(item.name, item.link));
});

// thats new eelement from pepole


// функция сохранения карточки
function handleSubmitPlace(evt) {
  evt.preventDefault();
  addOnElements(changeElement(namePlace.value, linkPicture.value));
  closePlace(placePopup);
  namePlace.value = '';
  linkPicture.value = '';
  plaseForm.reset();
};

// сохранение карточки в случае ее правильности

plaseForm.addEventListener('input', function (evt){
  evt.preventDefault();

  if (namePlace.validity.valid == true) {
    wrongInputOff(namePlace);
  }
  else {
    wrongInputOn(namePlace);
  };

  if (linkPicture.validity.valid == true) {
    wrongInputOff(linkPicture);
  }
  else {
    wrongInputOn(linkPicture);
  };

  if (namePlace.validity.valid == true && linkPicture.validity.valid == true) {
    savePlaceButton.classList.remove("popup__button_grey");
    savePlaceButton.classList.add("popup__button");
    savePlaceButton.addEventListener('click', () => handleSubmitPlace(evt));
  };

});


// i hate mushrooms

// popup fith picture

const elementPicture = document.querySelectorAll('.element__image');
const picturePopup = document.getElementById("picture");
const closePicturePopup = document.querySelector('.popup__close_pic');

let elementPictureMassive = Array.from(elementPicture);

elementPictureMassive.forEach(function (item){

  item.addEventListener('click', function() {
    picturePopup.querySelector('.popup__image').src = item.src;
    picturePopup.querySelector('.popup__caption').textContent = item.alt;
    openPlace(picturePopup);
  });
  return item;
});
console.log(elementPictureMassive);

closePicturePopup.addEventListener('click', function(){
  closePlace(picturePopup);
});




