import '../styles/index.css';
import {cardFromServ,cardAddItem,whoAreU,setID,newMe,newAvatar} from './api.js';
// import {initialCards} from './initialCards.js';
import {openPlace,closePlace} from './modal.js';
import {enableValidation,plaseResetValid} from './validate.js';
import {changeElement} from'./card.js';

const elements = document.querySelector('.elements');
const picturePopup = document.getElementById("picture");
const closePlacePopup = document.getElementById("place-close");
const changeName = document.querySelector('.profile__info-picture');
const closePopup = document.querySelector('.popup__close');
const addPlace = document.querySelector('.profile__add-button');
const closePicturePopup = document.querySelector('.popup__close_pic');

const namePopup = document.getElementById("nickname");
const nameChange = document.getElementById("name");
const profesion = document.getElementById("proffesion");
const nameNew = document.querySelector('.profile__main-text');
const profesionNew = document.querySelector('.profile__text');
const placePopup = document.getElementById("place");
const namePlace = document.getElementById("name-place");
const linkPicture = document.getElementById("link-picture");
const plaseForm = document.getElementById("form-Place");
const saveButtonName = document.getElementById("saveButton");
const savePlaceButton = document.getElementById("place-save");

const avatar = document.getElementById('avatar');
const avatarPic = document.getElementById('avatarPic')
const avatarPicNew = document.getElementById('link-profile');
const avatarChange = document.getElementById('profile'); 
const avatarForm = document.getElementById('formProfile');
const avatarPopupClose = document.getElementById('profileClose');
const avatarNewPicSave = document.getElementById('profile-save');


// функция сохранения попапа с местом
function handleSubmitPlace() {
  savePlaceButton.textContent = 'Сохранение...';
  closePlace(placePopup);
  cardAddItem(namePlace.value,linkPicture.value)
  .then(res =>{
    addOnElements(changeElement(res, openCard));
  })
};

whoAreU()
.then(res =>{
  nameNew.textContent = res.name;
  profesionNew.textContent = res.about;
  avatarPic.src = res.avatar;
})

// сохранение попапа с именем
function saveNamePopup() {
  saveButtonName.textContent = 'Сохранение...';
  newMe(nameChange.value,profesion.value)
  .then(res => {
    nameNew.textContent = res.name;
    profesionNew.textContent = res.about;
  })

  closePlace(namePopup);
};

//modal
// слушатель открытия попапа с именем при клике
changeName.addEventListener('click', function () {
  openPlace(namePopup);
  whoAreU()
  .then(res =>{
    nameChange.value = res.name;
    profesion.value = res.about;
  })
  saveButtonName.textContent = 'Сохранить';
}); 

// слушатель закрытия попапа с именем при клике
closePopup.addEventListener('click', function () {
  closePlace(namePopup);
});

// слушатель открытия попапа с местом при клике
addPlace.addEventListener('click', function(){
  plaseForm.reset();
  savePlaceButton.classList.add("popup__button_disabled");
  savePlaceButton.setAttribute('disabled','');
  openPlace(placePopup);
  plaseResetValid(placePopup,namePlace,linkPicture);
  savePlaceButton.textContent = 'Сохранить';
});

// слушатель закрытия попапа с местом при клике
closePlacePopup.addEventListener('click', function(){
  closePlace(placePopup);
});

// слушатель закрытия попапа с картинкой при клике
closePicturePopup.addEventListener('click', function (){
  closePlace(picturePopup);
});


// слушатель открытия попапа с аватаром при клике
avatar.addEventListener('click', function () {
  openPlace(avatarChange);
  avatarForm.reset();
  const errrorSpan = avatarChange.querySelector(".popup__error");
  errrorSpan.textContent = '';
  avatarPicNew.classList.remove('popup__input_noname');
  avatarNewPicSave.textContent = 'Сохранить';
});

// слушатель закрытия попапа с аватаром при клике
avatarPopupClose.addEventListener('click', function () {
  closePlace(avatarChange);
});

// сохранение попапа с аватаром
function avatarSave() {
  avatarNewPicSave.textContent = 'Сохранение...';
  newAvatar(avatarPicNew.value)
  .then(res => {
    avatarPic.src = res.avatar;
  })
  closePlace(avatarChange);
};



// слушатель сохранния при клике на кнопку
//места
savePlaceButton.addEventListener('click', () => handleSubmitPlace());
//имени
saveButtonName.addEventListener('click', () => saveNamePopup());
//аватарки
avatarNewPicSave.addEventListener('click', () => avatarSave());

//card
// функция вызова карточки на страницу
function addOnElements(element) {
  elements.prepend(element);
};

// перебор массива
 Promise.all([
  cardFromServ(),
  whoAreU()
])
 .then(([cardFromServ,whoAreU]) => {
    setID(whoAreU._id);
    // nameNew.textContent = whoAreU.name;
    // profesionNew.textContent = whoAreU.about;
    // avatarPic.src = whoAreU.avatar;

    cardFromServ.reverse().forEach((item) => {
      addOnElements(changeElement(item, openCard));
    });
 })


// открывает попап с любой из вызванных при нажатии
function openCard(itemScr, itemAlt) {
  openPlace(picturePopup);
  picturePopup.querySelector('.popup__image').src = itemScr;
  picturePopup.querySelector('.popup__image').alt = itemAlt;
  picturePopup.querySelector('.popup__caption').textContent = itemAlt;
};

// validation
enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: `.popup__error_`,
  errorClass: 'popup__error_visible',
  inputErrorLine: 'popup__input_noname'
 });

