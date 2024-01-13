// функция сохранения попапа с местом
export function handleSubmitPlace() {
    saveButtonPlacePopup.textContent = 'Сохранение...';
    addCardItem(namePlacePopup.value,linkPicturePlacePopup.value)
    .then(res =>{
      elements.prepend(createElement(res, openCard));
      closePopup(placePopup);
    })
    .catch(err =>{
      console.log('Error:' + err);
    })
    .finally(() => {
      saveButtonPlacePopup.textContent = 'Сохранить';
    })
  };
  
  // функция сохранение попапа с именем
  export function saveProfilePopup() {
    saveButtonProfilePopup.textContent = 'Сохранение...';
    seeNewMe(nameProfilePopup.value,profesionProfilePopup.value)
    .then(res => {
      nameProfile.textContent = res.name;
      profesionProfile.textContent = res.about;
      closePopup(profilePopup);
    })
    .catch(err =>{
      console.log('Error:' + err);
    })
    .finally(() => {
      saveButtonProfilePopup.textContent = 'Сохранить';
    })
  };
  
  // функция сохранение попапа с аватаром
  export function saveAvatarPopup() {
    avatarNewPicSave.textContent = 'Сохранение...';
    seeNewAvatar(avatarPicNew.value)
    .then(res => {
      avatarPic.src = res.avatar;
      closePopup(avatarChange);
    })
    .catch(err =>{
      console.log('Error:' + err);
  })
  .finally(() => {
    avatarNewPicSave.textContent = 'Сохранить';
  })
  };