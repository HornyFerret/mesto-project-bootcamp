// импорт используемых переменных и функций
import './utils.js';
import './modal.js';
import './validate.js';

// объявление переменных
export const element = document.querySelector('#new_element').content;
export const elements = document.querySelector('.elements');
export const elementPicture = document.querySelectorAll('.element__image');
export let elementPictureMassive = Array.from(elementPicture);
export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



// единоразовая кнопка удаления элемента из массива
export function deleteElementButton(item) {
    item.remove();
};

// функция автоматического добавления карточек из массива
export function changeElement(itemText, itemPhoto) {
    const elementClone = element.querySelector('.element').cloneNode(true);
    elementClone.querySelector('.element__text').textContent = itemText;
    elementClone.querySelector('.element__image').src = itemPhoto;
    elementClone.querySelector('.element__image').alt = itemText;
    const deleteButton = elementClone.querySelector('.element__delete-icon');
    deleteButton.addEventListener('click', () => deleteElementButton(elementClone));
    const likeButton = elementClone.querySelector('.element__like');
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('element__like_active');
    });
    return elementClone;
};

// функция вызова карточки на страницу
export function addOnElements(element) {
    elements.prepend(element);
};

// перебор массива
export function massiveElement() {
    initialCards.forEach((item) => {
        addOnElements(changeElement(item.name, item.link));
    });

    elementPictureMassive.forEach(function (item){
        item.addEventListener('click', function() {
            picturePopup.querySelector('.popup__image').src = item.src;
            picturePopup.querySelector('.popup__caption').textContent = item.alt;
            openPlace(picturePopup);
        });
        return item;
    });
};

