// импорт используемых переменных и функций
import {openPlace} from './modal.js';


// объявление переменных
const element = document.querySelector('#new_element').content;
export const elements = document.querySelector('.elements');
export const elementPicture = document.querySelectorAll('.element__image');
export const picturePopup = document.getElementById("picture");


// единоразовая кнопка удаления элемента из массива
function deleteElementButton(item) {
    item.remove();
};

// функция автоматического добавления карточек из массива
export function changeElement(itemText, itemPhoto,elementPicture) {
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

// эта функция делает массив из всех добавленных карточек и от крывает попап с любой из вызванных при нажатии
export function openCard() {
    const elementPictureMassive = Array.from(document.querySelectorAll('.element__image'));
        elementPictureMassive.forEach(function (item){ 
            item.addEventListener('click', function() { 
                openPlace(picturePopup);
                picturePopup.querySelector('.popup__image').src = item.src; 
                picturePopup.querySelector('.popup__caption').textContent = item.alt; 
            }); 
        });
    };