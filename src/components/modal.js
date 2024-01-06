// импорт используемых переменных и функций
import './initialCards.js';


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
export const saveButtonName = document.getElementById("saveButton");
export const savePlaceButton = document.getElementById("place-save");

// функция закрытия попапа через оверлей
// с помощью Esc


// функция открытия попапа 
export function openPlace(item) {
    item.classList.add("popup_opened");
    item.classList.remove("popup_closet");
    document.addEventListener('keydown', popupEsc);
};

// функция закрытия попапа 
export function closePlace(item) {
    item.classList.remove("popup_opened");
    item.classList.add("popup_closet");
    document.removeEventListener('keydown', popupEsc);
};

function popupEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePlace(openedPopup);
    }
};
// с помощью клика
const allPopup = document.querySelectorAll('.popup');

allPopup.forEach((item) => 
    item.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
            closePlace(item);
        };
    })
);


