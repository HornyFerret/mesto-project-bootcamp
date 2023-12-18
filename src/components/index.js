import '../styles/index.css';
import {plaseForm,namePlace,saveButton,savePlaceButton,linkPicture,wrongInputOn,wrongInputOff,openPlace,closePlace,saveButtonOff,saveButtonOn,saveButtonPlaceOff,saveButtonPlaceOn,placePopupReset} from './utils.js';
import * as modal from './modal.js';
import * as validate from './validate.js';
import {massiveElement} from'./card.js';

//modal
const closePlacePopup = modal.closePlacePopup;
const changeName = modal.changeName;
const popup = modal.popup;
let nameChange = modal.nameChange;
let profesion = modal.profesion;
let nameNew = modal.nameNew;
let profesionNew = modal.profesionNew;
const closePopup = modal.closePopup;
const addPlace = modal.addPlace;
const placePopup = modal.placePopup;
const picturePopup = modal.picturePopup;
const closePicturePopup = modal.closePicturePopup;

// слушатель открытия попапа с именем при клике
changeName.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPlace(popup);
  nameChange.value = nameNew.textContent;
  profesion.value = profesionNew.textContent;
}); 


// слушатель закрытия попапа с именем при клике
closePopup.addEventListener('click', function () {
  closePlace(popup);
});

// слушатель открытия попапа с местом при клике
addPlace.addEventListener('click', function(){
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
    closePlace(popup);      
    closePlace(placePopup);
    closePlace(picturePopup);
  };
});
// с помощью кнопки мыши
document.addEventListener('click', function (evt){
    if (evt.target.classList.contains('popup')) {
        placePopupReset();
        closePlace(popup);
        closePlace(placePopup);
        closePlace(picturePopup);
    };
});

// слушатель закрытия попапа с картинкой при клике
closePicturePopup.addEventListener('click', function(){
    closePlace(picturePopup);
});



//validate
const popupForm = validate.popupForm;

// слушатель изменения имени и профессии без ошибок и с сохранением
popupForm.addEventListener('input', function (evt){
  evt.preventDefault();
  if (nameChange.validity.valid == true) {
    wrongInputOff(nameChange);
  }
  else {
    saveButtonOff();
    wrongInputOn(nameChange);
  };

  if (profesion.validity.valid == true) {
    wrongInputOff(profesion);
  }
  else {
    saveButtonOff();
    wrongInputOn(profesion);
  };

  if (nameChange.validity.valid == true && profesion.validity.valid == true) {
    saveButtonOn();
    saveButton.addEventListener('click', () => saveNamePopup(evt));
  };
});

// сохранение карточки в случае ее правильности
plaseForm.addEventListener('input', function (evt){
  evt.preventDefault();

  if (namePlace.validity.valid == true) {
    wrongInputOff(namePlace);
  }
  else {
    saveButtonPlaceOff();
    wrongInputOn(namePlace);
  };

  if (linkPicture.validity.valid == true) {
    wrongInputOff(linkPicture);
  }
  else {
    saveButtonPlaceOff();
    wrongInputOn(linkPicture);
  };

  if (namePlace.validity.valid == true && linkPicture.validity.valid == true) {
    saveButtonPlaceOn();
    savePlaceButton.addEventListener('click', () => handleSubmitPlace(evt));
  };
});


//card
massiveElement();