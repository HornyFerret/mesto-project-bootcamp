// импорт используемых переменных и функций
import './utils.js';
import './modal.js';

// объявление переменных для валидации
export const popupForm = document.querySelector('.popup__form');



// функция сохранения карточки
export function handleSubmitPlace(evt) {
    evt.preventDefault();
    addOnElements(changeElement(namePlace.value, linkPicture.value));
    closePlace(placePopup);
    namePlace.value = '';
    linkPicture.value = '';
    placePopupReset();
};

// сохранение попапа
export function saveNamePopup(evt) {
    evt.preventDefault();
    nameNew.textContent = `${nameChange.value}`;
    profesionNew.textContent = `${profesion.value}`;
    closePlace(popup);
};
