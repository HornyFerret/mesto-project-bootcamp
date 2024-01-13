// функция открывает попап с любой из вызванных при нажатии
export function openCard(itemScr, itemAlt) {
    openPopup(picturePopup);
    picturePopupImg.src = itemScr;
    picturePopupImg.alt = itemAlt;
    picturePopupCaption.textContent = itemAlt;
  };
  