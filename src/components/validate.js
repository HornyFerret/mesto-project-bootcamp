// импорт используемых переменных и функций

// объявление переменных для валидации



//функции изменения состояния кнопки сохранения
// кнопка неактивна
function saveButtonOff(formElement) {
    const saveButton = formElement.querySelector(".popup__button");
    saveButton.classList.add("popup__button_disabled");
};
// кнопка активна
function saveButtonOn(formElement) {
    const saveButton = formElement.querySelector(".popup__button");
    saveButton.classList.remove("popup__button_disabled");
};

// функция добавления объявления об ошибке в имени
const wrongInputOn = (formElement, inputElement) => {
    let errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.add("popup__input_noname");
    errorElement.classList.add("popup__error_visible");
    errorElement.textContent = inputElement.validationMessage;
};
// функция удаления объявления об ошибке в имени
const wrongInputOff = (formElement, inputElement) => {
    let errorElement = formElement.querySelector(`.popup__error_${inputElement.id}`);
    inputElement.classList.remove("popup__input_noname");
    errorElement.classList.remove("popup__error_visible");
    errorElement.textContent = '';
};

// функция проверки на валидацию задаваемого инпута из формы
const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        wrongInputOn(formElement,inputElement);
        saveButtonOff(formElement);
    } 
    else {
        wrongInputOff(formElement,inputElement);
        saveButtonOn(formElement);
    };
};

// функция применения валидации ко всем инпутам в форме
const setEventListeners = (formElement) => {
    const inputMassive = Array.from(formElement.querySelectorAll('.popup__input'));
    inputMassive.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
        });
    });
};

// експортируемая функция проверки всех форм и инпутов на валидацию
export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
      });
};



