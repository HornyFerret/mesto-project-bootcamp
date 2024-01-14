import {addCardItem,updateProfileData,updateAvatar} from './api.js';
import {createElement} from'./card.js';
import {openPopup,closePopup} from './modal.js';

//для добавления карточек на страницу
export const elements = document.querySelector('.elements');

//попап с картинкой(при клике на картинку)
export const picturePopup = document.getElementById("picture");
export const picturePopupImg = picturePopup.querySelector('.popup__image');
export const picturePopupCaption = picturePopup.querySelector('.popup__caption');

//попап изменения данных профиля(имя и о себе)
export const profilePopup = document.getElementById("nickname");
export const nameProfilePopup = document.getElementById("name");
export const profesionProfilePopup = document.getElementById("proffesion");
export const nameProfile = document.querySelector('.profile__main-text');
export const profesionProfile = document.querySelector('.profile__text');
const saveButtonProfilePopup = document.getElementById("saveButton");

//попап добавления нового места
export const placePopup = document.getElementById("place");
export const namePlacePopup = document.getElementById("name-place");
export const linkPicturePlacePopup = document.getElementById("link-picture");
export const saveButtonPlacePopup = document.getElementById("place-save");

//попап изменения аватарки
export const avatarPic = document.getElementById('avatarPic')
export const avatarPicNew = document.getElementById('link-profile');
export const avatarChange = document.getElementById('profile');
export const avatarNewPicSave = document.getElementById('profile-save');

//-------------------------------------------

// функция сохранения попапа с местом
export function handleSubmitPlace() {
    saveButtonPlacePopup.textContent = 'Сохранение...';
    addCardItem(namePlacePopup.value,linkPicturePlacePopup.value)
    .then(res =>{
      elements.prepend(createElement(res,picturePopupImg,picturePopupCaption,openPopup,picturePopup));
      closePopup(placePopup);
    })
    .catch(err =>{
      console.log('Error:' + err);
    })
    .finally(() => {
      saveButtonPlacePopup.textContent = 'Сохранить';
    })
  };
  
  // функция сохранение попапа с именем
  export function saveProfilePopup() {
    saveButtonProfilePopup.textContent = 'Сохранение...';
    updateProfileData(nameProfilePopup.value,profesionProfilePopup.value)
    .then(res => {
      nameProfile.textContent = res.name;
      profesionProfile.textContent = res.about;
      closePopup(profilePopup);
    })
    .catch(err =>{
      console.log('Error:' + err);
    })
    .finally(() => {
      saveButtonProfilePopup.textContent = 'Сохранить';
    })
  };
  
  // функция сохранение попапа с аватаром
  export function saveAvatarPopup() {
    avatarNewPicSave.textContent = 'Сохранение...';
    updateAvatar(avatarPicNew.value)
    .then(res => {
      avatarPic.src = res.avatar;
      closePopup(avatarChange);
    })
    .catch(err =>{
      console.log('Error:' + err);
  })
  .finally(() => {
    avatarNewPicSave.textContent = 'Сохранить';
  })
  };