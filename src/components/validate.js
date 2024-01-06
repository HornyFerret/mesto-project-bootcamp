
//функции изменения состояния кнопки сохранения
// кнопка неактивна
function saveButtonOff(submitButton,inactiveButtonClass) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute('disabled','');
};
// кнопка активна
function saveButtonOn(formElement,submitButtonSelector,inactiveButtonClass, inputElement) {
    const submitButton = formElement.querySelector(submitButtonSelector);

    if (formElement.checkValidity() == false) {
        saveButtonOff(submitButton,inactiveButtonClass);
    }
    else {
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.removeAttribute('disabled');
    }

};

// функция добавления объявления об ошибке в имени
function wrongInputOn(
    formElement,
    inputElement,
    {
        errorClass,
        inputErrorClass
    }){
    const errorElement = formElement.querySelector(inputErrorClass + inputElement.id);
    inputElement.classList.add("popup__input_noname");
    errorElement.classList.add(errorClass);
    errorElement.textContent = inputElement.validationMessage;
    
    
};
// функция удаления объявления об ошибке в имени
function wrongInputOff(
    formElement,
    inputElement,
    {
        errorClass,
        inputErrorClass
    }){
    const errorElement = formElement.querySelector(inputErrorClass + inputElement.id);
    inputElement.classList.remove("popup__input_noname");
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

// функция проверки на валидацию задаваемого инпута из формы
function isValid(formElement,inputElement, rest){
    if (!inputElement.validity.valid) {
        wrongInputOn(formElement,inputElement, rest);
    } 
    else {
        wrongInputOff(formElement,inputElement, rest);
    };
};

// функция применения валидации ко всем инпутам в форме
function setEventListeners(
    formElement,
    {
        inputSelector, 
        submitButtonSelector, 
        inactiveButtonClass, 
        ...rest
    }){

    formElement.addEventListener('input', () => {
        const inputMassive = Array.from(formElement.querySelectorAll(inputSelector));
        inputMassive.forEach((inputElement) => {
            isValid(formElement,inputElement,rest);  
            saveButtonOn(formElement,submitButtonSelector, inactiveButtonClass, inputElement);
        });
        
    });
        
};

// експортируемая функция проверки всех форм и инпутов на валидацию
export function enableValidation({formSelector, ...rest}){
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement,rest);
    });
    
};
  

