
//функции изменения состояния кнопки сохранения
// кнопка неактивна
function saveButtonOff(submitButton,inactiveButtonClass) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute('disabled','');
};
// кнопка активна
function saveButtonOn(formElement,submitButton,inactiveButtonClass) {
    if (formElement.checkValidity() == false) {
        saveButtonOff(submitButton,inactiveButtonClass);
    }
    else {
        submitButton.classList.remove(inactiveButtonClass);
        submitButton.removeAttribute('disabled');
    }

};

// функция добавления объявления об ошибке в имени
function onWrongInput(
    formElement,
    inputElement,
    {
        errorClass,
        inputErrorClass,
        inputErrorLine
    }){
    const errorElement = formElement.querySelector(inputErrorClass + inputElement.id);
    inputElement.classList.add(inputErrorLine);
    errorElement.classList.add(errorClass);
    errorElement.textContent = inputElement.validationMessage;
    
};
// функция удаления объявления об ошибке в имени
function offWrongInput(
    formElement,
    inputElement,
    {
        errorClass,
        inputErrorClass,
        inputErrorLine
    }){
    const errorElement = formElement.querySelector(inputErrorClass + inputElement.id);
    inputElement.classList.remove(inputErrorLine);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

// функция проверки на валидацию задаваемого инпута из формы
function checkValid(formElement,inputElement, rest){
    if (!inputElement.validity.valid) {
        onWrongInput(formElement,inputElement, rest);
    } 
    else {
        offWrongInput(formElement,inputElement, rest);
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
    const submitButton = formElement.querySelector(submitButtonSelector);
    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    formElement.addEventListener('input', () => {
        inputs.forEach((inputElement) => {
            checkValid(formElement,inputElement,rest);  
            saveButtonOn(formElement,submitButton, inactiveButtonClass);
        });
        
    });
        
};

// експортируемая функция проверки всех форм и инпутов на валидацию
export function enableValidation({formSelector, ...rest}){
    const formLists = Array.from(document.querySelectorAll(formSelector));
    formLists.forEach((formElement) => {
        setEventListeners(formElement,rest);
    });
    
};
  

