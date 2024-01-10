// импорт используемых переменных и функций
import './initialCards.js';
// функция закрытия попапа через оверлей
// с помощью Esc


// функция открытия попапа 
export function openPlace(item) {
    item.classList.add("popup_opened");
    document.addEventListener('keydown', popupEsc);
};

// функция закрытия попапа 
export function closePlace(item) {
    item.classList.remove("popup_opened");
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

