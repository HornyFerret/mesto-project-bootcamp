import * as api from './api.js';

// объявление переменных
const element = document.querySelector('#new_element').content;

// единоразовая кнопка удаления элемента из массива
function deleteElement(item) {
    item.remove();
};

// функция открывает попап с любой из вызванных при нажатии
export function openCard(itemImg,itemCaption, itemScr, itemAlt,openPopup,picturePopup) {
    openPopup(picturePopup);
    itemImg.src = itemScr;
    itemImg.alt = itemAlt;
    itemCaption.textContent = itemAlt;
  };

// функция автоматического добавления карточек из массива
export function createElement(card,itemImg,itemCaption,openPopup,picturePopup) {
    
    
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
            api.deleteCardLike(card._id)
            .then(res =>{
                likeButton.classList.toggle('element__like_active');
                likeNumder.textContent = res.likes.length;
            })
            .catch(err =>{
                console.log('Error:' + err);
            })
        }
        else{
            api.addCardLike(card._id)
            .then(res =>{
                likeButton.classList.toggle('element__like_active');
                likeNumder.textContent = res.likes.length;
            })
            .catch(err =>{
                console.log('Error:' + err);
            })
        }
        
    });

    elementCloneImg.addEventListener ('click', () => openCard(itemImg,itemCaption,card.link, card.name,openPopup,picturePopup));
    const deleteButton = elementClone.querySelector('.element__delete-icon');
    if(api.user === card.owner._id) {
        deleteButton.addEventListener('click', () => {
            api.deleteCardItem(card._id)
            .then(() => {
                deleteElement(elementClone);
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
