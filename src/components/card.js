import * as api from './api.js';

// объявление переменных
const element = document.querySelector('#new_element').content;

// единоразовая кнопка удаления элемента из массива
function deleteElementButton(item) {
    item.remove();
};

// функция автоматического добавления карточек из массива
export function changeElement(card,openCard) {
    
    
    const elementClone = element.querySelector('.element').cloneNode(true);
    elementClone.querySelector('.element__text').textContent = card.name;

    const elementCloneImg = elementClone.querySelector('.element__image');
    elementCloneImg.src = card.link;
    elementCloneImg.alt = card.name;

    const likeButton = elementClone.querySelector('.element__like-pic');
    const likeNumder = elementClone.querySelector('.element__like-number');
    likeNumder.textContent = card.likes.length;

    function checkLike(card) {
        return card.likes.some(like => like._id === api.user);
    };
    if(checkLike(card)){
        likeButton.classList.add('element__like_active');
    };
    

    
    likeButton.addEventListener('click', function (evt) {
        if(evt.target.classList.contains('element__like_active')){
            api.cardDeleteLike(card._id)
            .then(res =>{
                likeButton.classList.toggle('element__like_active');
                likeNumder.textContent = res.likes.length;
            })
            .catch(err =>{
                console.log('Error:' + err);
            })
        }
        else{
            api.cardAddLike(card._id)
            .then(res =>{
                likeButton.classList.toggle('element__like_active');
                likeNumder.textContent = res.likes.length;
            })
            .catch(err =>{
                console.log('Error:' + err);
            })
        }
        
    });

    elementCloneImg.addEventListener ('click', () => openCard(card.link, card.name));
    const deleteButton = elementClone.querySelector('.element__delete-icon');
    if(api.user === card.owner._id) {
        deleteButton.addEventListener('click', () => {
            api.cardDeleteItem(card._id)
            .then(() => {
                deleteElementButton(elementClone);
            })
            .catch(err =>{
                console.log('Error:' + err);
            })
        });

    } else {
        deleteButton.remove();
    };

    return elementClone;
};
