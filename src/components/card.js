// импорт используемых переменных и функций
import {openPlace} from './modal.js';


// объявление переменных
const element = document.querySelector('#new_element').content;

// единоразовая кнопка удаления элемента из массива
function deleteElementButton(item) {
    item.remove();
};

// функция автоматического добавления карточек из массива
export function changeElement(itemText, itemPhoto,openCard) {
    const elementClone = element.querySelector('.element').cloneNode(true);
    elementClone.querySelector('.element__text').textContent = itemText;
    const elementCloneImg = elementClone.querySelector('.element__image');
    elementCloneImg.src = itemPhoto;
    elementCloneImg.alt = itemText;
    const deleteButton = elementClone.querySelector('.element__delete-icon');
    deleteButton.addEventListener('click', () => deleteElementButton(elementClone));
    const likeButton = elementClone.querySelector('.element__like');
    likeButton.addEventListener('click', function () {
        likeButton.classList.toggle('element__like_active');
    });
    elementCloneImg.addEventListener ('click', () => openCard(elementCloneImg.src, elementCloneImg.alt));

    return elementClone;
};
