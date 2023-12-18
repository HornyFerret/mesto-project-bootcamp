// объявление переменных 
export const enableValidation = {
    formSelector: 'popup__form',
    inputSelector: 'popup__input',
    submitButtonSelector: 'popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: '${inputSelector.id}_incorrect',
    errorClass: 'popup__error_visible'
};
export const saveButton = document.getElementById("saveButton");
export const savePlaceButton = document.getElementById("place-save");
export let namePlace = document.getElementById("name-place");
export let linkPicture = document.getElementById("link-picture");
export const plaseForm = document.getElementById("form-Place");



// функция добавления объявления об ошибке в имени
export function wrongInputOn(item) {
    let formError = document.querySelector(`.${item.id}_incorrect`);
    item.classList.add("popup__input_noname");
    formError.classList.add(enableValidation.errorClass);
    formError.textContent = item.validationMessage;
};

export function wrongInputOff(item) {
    let formError = document.querySelector(`.${item.id}_incorrect`);
    item.classList.remove("popup__input_noname");
    formError.classList.remove(enableValidation.errorClass);
    formError.textContent = '';
};

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

//функции изменения состояния кнопки сохранения
// кнопка неактивна
export function saveButtonOff() {
    saveButton.classList.remove(enableValidation.submitButtonSelector);
    saveButton.classList.add(enableValidation.inactiveButtonClass);
};
// кнопка активна
export function saveButtonOn() {
    saveButton.classList.add(enableValidation.submitButtonSelector);
    saveButton.classList.remove(enableValidation.inactiveButtonClass);
};

//функции изменения состояния кнопки сохранения
// кнопка неактивна
export function saveButtonPlaceOff() {
    savePlaceButton.classList.remove(enableValidation.submitButtonSelector);
    savePlaceButton.classList.add(enableValidation.inactiveButtonClass);
};
// кнопка активна
export function saveButtonPlaceOn() {
    savePlaceButton.classList.add(enableValidation.submitButtonSelector);
    savePlaceButton.classList.remove(enableValidation.inactiveButtonClass);
};

// функция обновления попапа добавления карточки
export function placePopupReset() {
    wrongInputOff(namePlace);
    wrongInputOff(linkPicture);
    plaseForm.reset();
};

