import '../styles/index.css';
import {initialCards} from './initialCards.js';
import {namePopup,nameChange,profesion,nameNew,profesionNew,placePopup,openPlace,closePlace,placePopupReset,handleSubmitPlace,saveNamePopup} from './modal.js';
import {enableValidation} from './validate.js';
import {changeElement,elements,picturePopup,openCard} from'./card.js';


const closePlacePopup = document.getElementById("place-close");
const changeName = document.querySelector('.profile__info-picture');
const closePopup = document.querySelector('.popup__close');
const addPlace = document.querySelector('.profile__add-button');
const closePicturePopup = document.querySelector('.popup__close_pic');
const saveButtonName = document.getElementById("saveButton");
const savePlaceButton = document.getElementById("place-save");

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
  openPlace(placePopup);
});

// слушатель закрытия попапа с местом при клике
closePlacePopup.addEventListener('click', function(){
  placePopupReset();
  closePlace(placePopup);
});

// слушатель закрытия попапа через оверлей
// с помощью Esc
document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    placePopupReset();
    closePlace(namePopup);      
  };
});
document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    placePopupReset();
    closePlace(placePopup);
  };
});
document.addEventListener('keydown', function (evt) {
  if (evt.key === "Escape") {
    placePopupReset();
    closePlace(picturePopup);
  };
});
// с помощью кнопки мыши
document.addEventListener('click', function (evt){
    if (evt.target.classList.contains('popup')) {
        placePopupReset();
        closePlace(namePopup);
    };
});
document.addEventListener('click', function (evt){
  if (evt.target.classList.contains('popup')) {
      placePopupReset();
      closePlace(placePopup);
  };
});
document.addEventListener('click', function (evt){
  if (evt.target.classList.contains('popup')) {
      placePopupReset();
      closePlace(picturePopup);
  };
});

// слушатель закрытия попапа с картинкой при клике
closePicturePopup.addEventListener('click', function(){
    closePlace(picturePopup);
});

// слушатель сохранния при клике на кнопку
//места
savePlaceButton.addEventListener('click', function(){
  handleSubmitPlace();
  openCard();
  closePlace(picturePopup);
});
//имени
saveButtonName.addEventListener('click', function(){
  saveNamePopup();
  closePlace(picturePopup);
});


//card
// функция вызова карточки на страницу
function addOnElements(element) {
  elements.prepend(element);
  openCard();
};

// перебор массива
function massiveElement() {
  initialCards.forEach((item) => {
      addOnElements(changeElement(item.name, item.link));
  });
};
massiveElement();


// validation
enableValidation();