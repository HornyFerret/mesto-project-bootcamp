import '../styles/index.css';
import {touchCardFromServ,addCardItem,getUserInfo,setID,seeNewMe,seeNewAvatar} from './api.js';
import {openPopup,closePopup,closePopupOverlay} from './modal.js';
import {enableValidation} from './validate.js';
import {createElement} from'./card.js';
import {handleSubmitPlace,saveProfilePopup,saveAvatarPopup} from'./popupSaveFunctions.js';
import {openCard} from'./openCard.js';

//-------------------------------------------

//для добавления карточек на страницу
const elements = document.querySelector('.elements');

//массив всех попапов для закрытия через оверлей
const allPopups = document.querySelectorAll('.popup');

//попап с картинкой(при клике на картинку)
const picturePopup = document.getElementById("picture");
const picturePopupImg = picturePopup.querySelector('.popup__image');
const picturePopupCaption = picturePopup.querySelector('.popup__caption');
const closePicturePopup = document.querySelector('.popup__close_pic');

//попап изменения данных профиля(имя и о себе)
const profilePopup = document.getElementById("nickname");
const changeNameButton = document.querySelector('.profile__info-picture');
const nameProfilePopup = document.getElementById("name");
const nameProfileForm = document.getElementById('formName');
const profesionProfilePopup = document.getElementById("proffesion");
const nameProfile = document.querySelector('.profile__main-text');
const profesionProfile = document.querySelector('.profile__text');
const saveButtonProfilePopup = document.getElementById("saveButton");
const closeProfilePopup = document.querySelector('.popup__close');

//попап добавления нового места
const placePopup = document.getElementById("place");
const addPlaceButton = document.querySelector('.profile__add-button');
const namePlacePopup = document.getElementById("name-place");
const linkPicturePlacePopup = document.getElementById("link-picture");
const placePopupForm = document.getElementById("form-Place");
const saveButtonPlacePopup = document.getElementById("place-save");
const closePlacePopup = document.getElementById("place-close");

//попап изменения аватарки
const avatar = document.getElementById('avatar');
const avatarPic = document.getElementById('avatarPic')
const avatarPicNew = document.getElementById('link-profile');
const avatarChange = document.getElementById('profile'); 
const avatarForm = document.getElementById('formProfile');
const avatarPopupClose = document.getElementById('profileClose');
const avatarNewPicSave = document.getElementById('profile-save');

//-------------------------------------------

// слушатель открытия попапа с именем при клике
changeNameButton.addEventListener('click', function () {
  openPopup(profilePopup);
  nameProfilePopup.value = nameProfile.textContent;
  profesionProfilePopup.value = profesionProfile.textContent;
}); 

// слушатель открытия попапа с местом при клике
addPlaceButton.addEventListener('click', function(){
  placePopupForm.reset();
  const errorSpans = Array.from(placePopup.querySelectorAll(".popup__error"));
  errorSpans.forEach((it) =>{
    it.textContent = '';
  });
  namePlacePopup.classList.remove('popup__input_noname');
  linkPicturePlacePopup.classList.remove('popup__input_noname');
  saveButtonPlacePopup.classList.add("popup__button_disabled");
  saveButtonPlacePopup.setAttribute('disabled','');
  openPopup(placePopup);
});

// слушатель открытия попапа с аватаром при клике
avatar.addEventListener('click', function () {
  const errrorSpan = avatarChange.querySelector(".popup__error");
  errrorSpan.textContent = '';
  avatarPicNew.classList.remove('popup__input_noname');
  avatarForm.reset();
  openPopup(avatarChange);
});

//-------------------------------------------

// слушатель закрытия попапа с именем при клике
closeProfilePopup.addEventListener('click', function () {
  closePopup(profilePopup);
});

// слушатель закрытия попапа с местом при клике
closePlacePopup.addEventListener('click', function(){
  closePopup(placePopup);
});

// слушатель закрытия попапа с картинкой при клике
closePicturePopup.addEventListener('click', function (){
  closePopup(picturePopup);
});

// слушатель закрытия попапа с аватаром при клике
avatarPopupClose.addEventListener('click', function () {
  closePopup(avatarChange);
});

// закрытие попапа с помощью клика через оверлей
closePopupOverlay(allPopups);

//-------------------------------------------

// слушатель сохранния при клике на кнопку
//места
placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  handleSubmitPlace();
});
//имени
nameProfileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  saveProfilePopup();
});
//аватарки
avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  saveAvatarPopup();
});

//-------------------------------------------

// вызов данных с сервера(юзер и карточки)
 Promise.all([
  touchCardFromServ(),
  getUserInfo()
])
 .then(([touchCardFromServ,getUserInfo]) => {
    setID(getUserInfo._id);
    nameProfile.textContent = getUserInfo.name;
    profesionProfile.textContent = getUserInfo.about;
    avatarPic.src = getUserInfo.avatar;

    touchCardFromServ.reverse().forEach((item) => {
      elements.prepend(createElement(item, openCard));
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

