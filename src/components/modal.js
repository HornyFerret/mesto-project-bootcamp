// импорт используемых переменных и функций
import './initialCards.js';
import {changeElement,elements} from'./card.js';

// объявление переменных
export const namePopup = document.getElementById("nickname");
export const nameChange = document.getElementById("name");
export const profesion = document.getElementById("proffesion");
export const nameNew = document.querySelector('.profile__main-text');
export const profesionNew = document.querySelector('.profile__text');
export const placePopup = document.getElementById("place");
export const namePlace = document.getElementById("name-place");
export const linkPicture = document.getElementById("link-picture");
export const plaseForm = document.getElementById("form-Place");



// функция открытия попапа 
export function openPlace(item) {
    item.classList.add("popup_opened");
    item.classList.remove("popup_closet");
};

// функция закрытия попапа 
export function closePlace(item) {
    item.classList.remove("popup_opened");
    item.classList.add("popup_closet");
};

// функция обновления попапа добавления карточки с местом
export function placePopupReset() {
    plaseForm.reset();
};

// функция сохранения попапа с местом
export function handleSubmitPlace() {
    // evt.preventDefault();
    closePlace(placePopup);
    elements.prepend(changeElement(namePlace.value, linkPicture.value));
    // namePlace.value = '';
    // linkPicture.value = '';
    placePopupReset();
};

// сохранение попапа с именем
export function saveNamePopup(evt) {
    evt.preventDefault();
    nameNew.textContent = `${nameChange.value}`;
    profesionNew.textContent = `${profesion.value}`;
    closePlace(namePopup);
};