import '../styles/index.css';
import {initialCards} from './initialCards.js';
import {namePopup,nameChange,profesion,nameNew,profesionNew,saveButtonName,savePlaceButton,placePopup,openPlace,closePlace,linkPicture,namePlace,plaseForm} from './modal.js';
import {enableValidation} from './validate.js';
import {changeElement} from'./card.js';
const elements = document.querySelector('.elements');
const picturePopup = document.getElementById("picture");
const closePlacePopup = document.getElementById("place-close");
const changeName = document.querySelector('.profile__info-picture');
const closePopup = document.querySelector('.popup__close');
const addPlace = document.querySelector('.profile__add-button');
const closePicturePopup = document.querySelector('.popup__close_pic');


// функция обновления попапа добавления карточки с местом
function placePopupReset() {
  plaseForm.reset();
};

// функция сохранения попапа с местом
function handleSubmitPlace() {
  closePlace(placePopup);
  elements.prepend(changeElement(namePlace.value, linkPicture.value, openCard));
  placePopupReset();
};

// сохранение попапа с именем
function saveNamePopup() {
  debugger
  nameNew.textContent = nameChange.value;
  profesionNew.textContent = profesion.value;
  closePlace(namePopup);
};

//modal
// слушатель открытия попапа с именем при клике
changeName.addEventListener('click', function () {
  openPlace(namePopup);
  nameChange.value = nameNew.textContent;
  profesion.value = profesionNew.textContent;
}); 

// слушатель закрытия попапа с именем при клике
closePopup.addEventListener('click', function () {
  closePlace(namePopup);
});

// слушатель открытия попапа с местом при клике
addPlace.addEventListener('click', function(){
  savePlaceButton.classList.add("popup__button_disabled");
  savePlaceButton.setAttribute('disabled','');
  openPlace(placePopup);
});

// слушатель закрытия попапа с местом при клике
closePlacePopup.addEventListener('click', function(){
  placePopupReset();
  closePlace(placePopup);
});

// слушатель закрытия попапа с картинкой при клике
closePicturePopup.addEventListener('click', function (){
  closePlace(picturePopup);
});

// слушатель сохранния при клике на кнопку
//места
savePlaceButton.addEventListener('click', () => handleSubmitPlace());
//имени
saveButtonName.addEventListener('click', () => saveNamePopup());

//card
// функция вызова карточки на страницу
function addOnElements(element) {
  elements.prepend(element);
};

// перебор массива
function massiveElement() {
  initialCards.forEach((item) => {
    addOnElements(changeElement(item.name, item.link, openCard));
  });
};
massiveElement();

// открывает попап с любой из вызванных при нажатии
function openCard(itemScr, itemAlt) {
  openPlace(picturePopup);
  picturePopup.querySelector('.popup__image').src = itemScr; 
  picturePopup.querySelector('.popup__caption').textContent = itemAlt; 
};

// validation
enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: `.popup__error_`,
  errorClass: 'popup__error_visible'
 }); 
