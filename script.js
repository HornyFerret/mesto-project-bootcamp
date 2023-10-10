const changeName = document.querySelector('.profile__info-picture');
const addPlace = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__button');

const initialCards = [
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

// function for all page
function openPlace(item) {
  item.classList.add("popup_opened");
};
function closePlace(item) {
  item.classList.remove("popup_opened");
};

  // change name
let nameChange = document.getElementById("name");
let profesion = document.getElementById("proffesion");
let nameNew = document.querySelector('.profile__main-text');
let profesionNew = document.querySelector('.profile__text');

changeName.addEventListener('click', function () {
  openPlace(popup);
  nameChange.value = nameNew.textContent;
  profesion.value = profesionNew.textContent;
}); 

saveButton.addEventListener('click', function () {
  nameNew.textContent = `${nameChange.value}`;
  profesionNew.textContent = `${profesion.value}`;
  closePlace(popup);
});

closePopup.addEventListener('click', function () {
  closePlace(popup);
});

// add place card

const namePlace = document.getElementById("name-place");
const linkPicture = document.getElementById("link-picture");
const placePopup = document.getElementById("place");
const closePlacePopup = document.getElementById("place-close");
const savePlacePopup = document.getElementById("place-save");
const elements = document.querySelector('.elements');
const element = document.querySelector('#new_element').content;

addPlace.addEventListener('click', function(){
  openPlace(placePopup);
});

closePlacePopup.addEventListener('click', function(){
  closePlace(placePopup);
});

function deleteElementButton(item) {
  item.remove();
};

// functions to add new elements
function changeElement(itemText, itemPhoto) {
  const elementClone = element.querySelector('.element').cloneNode(true);
  elementClone.querySelector('.element__text').textContent = itemText;
  elementClone.querySelector('.element__image').src = itemPhoto;
  const deleteButton = elementClone.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', () => deleteElementButton(elementClone));
  const likeButton = elementClone.querySelector('.element__like');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__like_active');
  });
  return elementClone;
};

function addOnElements(element) {
  elements.prepend(element);
};

// thats massive elements
initialCards.forEach((item) => {
 addOnElements(changeElement(item.name, item.link));
});

// thats new eelement from pepole

function handleSubmitPlace(evt) {
  evt.preventDefault();
  addOnElements(changeElement(namePlace.value, linkPicture.value));
  closePlace(placePopup);
  namePlace.value = '';
  linkPicture.value = '';
};

placePopup.addEventListener('submit', handleSubmitPlace);





