import '../styles/index.css';
import {getAllCards,getUserInfo,setID} from './api.js';
import {openPopup,closePopup,closePopupOverlay} from './modal.js';
import {enableValidation} from './validate.js';
import {createElement} from'./card.js';
import * as save from'./popupSaveFunctions.js';

//-------------------------------------------

//массив всех попапов для закрытия через оверлей
const allPopups = document.querySelectorAll('.popup');

//попап с картинкой(при клике на картинку)
const closePicturePopup = document.querySelector('.popup__close_pic');

//попап изменения данных профиля(имя и о себе)
const changeNameButton = document.querySelector('.profile__info-picture');
const nameProfileForm = document.getElementById('formName');
const closeProfilePopup = document.querySelector('.popup__close');

//попап добавления нового места
const addPlaceButton = document.querySelector('.profile__add-button');
const placePopupForm = document.getElementById("form-Place");
const closePlacePopup = document.getElementById("place-close");

//попап изменения аватарки
const avatar = document.getElementById('avatar');
const avatarForm = document.getElementById('formProfile');
const avatarPopupClose = document.getElementById('profileClose');

//-------------------------------------------

// слушатель открытия попапа с именем при клике
changeNameButton.addEventListener('click', function () {
  openPopup(save.profilePopup);
  save.nameProfilePopup.value = save.nameProfile.textContent;
  save.profesionProfilePopup.value = save.profesionProfile.textContent;
}); 

// слушатель открытия попапа с местом при клике
addPlaceButton.addEventListener('click', function(){
  placePopupForm.reset();
  const errorSpans = Array.from(save.placePopup.querySelectorAll(".popup__error"));
  errorSpans.forEach((it) =>{
    it.textContent = '';
  });
  save.namePlacePopup.classList.remove('popup__input_noname');
  save.linkPicturePlacePopup.classList.remove('popup__input_noname');
  save.saveButtonPlacePopup.classList.add("popup__button_disabled");
  save.saveButtonPlacePopup.setAttribute('disabled','');
  openPopup(save.placePopup);
});

// слушатель открытия попапа с аватаром при клике
avatar.addEventListener('click', function () {
  const errrorSpan = save.avatarChange.querySelector(".popup__error");
  errrorSpan.textContent = '';
  save.avatarPicNew.classList.remove('popup__input_noname');
  avatarForm.reset();
  openPopup(save.avatarChange);
});

//-------------------------------------------

// слушатель закрытия попапа с именем при клике
closeProfilePopup.addEventListener('click', function () {
  closePopup(save.profilePopup);
});

// слушатель закрытия попапа с местом при клике
closePlacePopup.addEventListener('click', function(){
  closePopup(save.placePopup);
});

// слушатель закрытия попапа с картинкой при клике
closePicturePopup.addEventListener('click', function (){
  closePopup(save.picturePopup);
});

// слушатель закрытия попапа с аватаром при клике
avatarPopupClose.addEventListener('click', function () {
  closePopup(save.avatarChange);
});

// закрытие попапа с помощью клика через оверлей
closePopupOverlay(allPopups);

//-------------------------------------------

// слушатель сохранния при клике на кнопку
//места
placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  save.handleSubmitPlace();
});
//имени
nameProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  save.saveProfilePopup();
});
//аватарки
avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  save.saveAvatarPopup();
});

//-------------------------------------------

// вызов данных с сервера(юзер и карточки)
 Promise.all([
  getAllCards(),
  getUserInfo()
])
 .then(([getAllCards,getUserInfo]) => {
    setID(getUserInfo._id);
    save.nameProfile.textContent = getUserInfo.name;
    save.profesionProfile.textContent = getUserInfo.about;
    save.avatarPic.src = getUserInfo.avatar;

    getAllCards.reverse().forEach((item) => {
      save.elements.prepend(createElement(item,save.picturePopupImg,save.picturePopupCaption,openPopup,save.picturePopup));
    });
 })
 .catch(err =>{
  console.log('Error:' + err);
})

//-------------------------------------------

// призыв функции валидации
enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: `.popup__error_`,
  errorClass: 'popup__error_visible',
  inputErrorLine: 'popup__input_noname'
 });

