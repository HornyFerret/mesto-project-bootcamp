// функция открытия попапа 
export function openPopup(item) {
    item.classList.add("popup_opened");
    document.addEventListener('keydown', closePopupByEsc);
};

// функция закрытия попапа 
export function closePopup(item) {
    item.classList.remove("popup_opened");
    document.removeEventListener('keydown', closePopupByEsc);
};

// функция закрытия попапа с помощью Esc
function closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
};
// с помощью клика через оверлей
export function closePopupOverlay(elements) {
    elements.forEach((item) => 
        item.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                closePopup(item);
            };
        })
    );
};
