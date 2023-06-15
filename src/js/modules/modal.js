import { Validator, enLang as en } from '@upjs/facile-validator';
import IMask from 'imask';
import sendDataToServer from '../services/services'
function modal (){
    const callBackBtn = document.querySelectorAll(".button[data-btn='call-back']"),
          thanksModalBtn = document.querySelector(".button[data-btn='thanks-modal']"),
          modalCallBackBtn = document.querySelector(".button[data-btn='modal-call-back-btn']");
    let modalThanksTimeout;
    // Создаем маску на инпут телефонного номераgit
    const phoneInputs = document.querySelectorAll('.form__phone');
    phoneInputs.forEach(input =>{
        IMask(input, {
            mask: '+{420} 000 000 000',
            });
    })
    // Отображает модальное окно
    function showModal(modal) {
        modal.style.display = "block";
        modal.querySelector('.modal__item-wrapper').classList.add("modal__item-wrapper_show")
    }
    // Скрывает модальное окно
    function modalHide(modal){
        modal.style.display = "none";
        modal.querySelector('.modal__item-wrapper').classList.remove("modal__item-wrapper_show")
    }
    // открывает модальное окно с благодарностью
    function showThanksModal() {
        const modal = document.querySelector("#modal-thanks");
        showModal(modal);
        modalThanksTimeout = setTimeout(()=>{
            modalHide(modal);
            }, 5000)
    }
    // Открываем и закрываем модальное окно перезвонить мне также устанавливаем таймер автоматического закрытия окна
    callBackBtn.forEach(item =>{
        item.addEventListener("click", ()=>{
            const modal = document.querySelector("#modal-call-back");
            showModal(modal);
 
        })
    })
    document.querySelector('#modal-call-back .modal__cross').addEventListener('click', (e)=>{
        const modal = e.target.parentElement.parentElement.parentElement;
        modalHide(modal);
    })
    // После заполенения формы открываем модальное окно с благодарностью, и закрываем его по клику крестика или через 5 секунд
    thanksModalBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const form = document.querySelector('#call-back-form');

        // Create an instance of Validator for the container element
        const v = new Validator(form, {
            onFieldChangeValidation: true,
            lang: en,
        });
        v.validate();
        if(v.validatorError.errorsList.length === 0){
            const formData = new FormData(form);
            sendDataToServer(formData);
            form.reset();
            showThanksModal();
        }
    })
    document.querySelector('#modal-thanks .modal__cross').addEventListener('click', (e)=>{
        const modal = document.querySelector('#modal-thanks');
        modalHide(modal);
        clearTimeout(modalThanksTimeout);
    })
    modalCallBackBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        const modal = document.querySelector("#modal-call-back"),
              form = modal.querySelector(".form")
        // валидация формы
        const v = new Validator(form, {
            onFieldChangeValidation: true,
            lang: en,
        });
        v.validate();
        if(v.validatorError.errorsList.length === 0){
            showThanksModal();
            modalHide(modal);
            const formData = new FormData(form);
            sendDataToServer(formData);
            form.reset();
        }
    })
    // При нажатии по кнопке купить открываем модальное окно покупки и передаем в него название продукта который нужно купить
    document.addEventListener('click', (e)=>{
        if(e.target && (e.target.getAttribute('data-btn') === "btn-buy")){
            const productName = e.target.parentElement.parentElement.querySelector(".card__info").innerHTML,
                  modal = document.querySelector("#modal-buy");
            modal.querySelector(".modal__sub-title").innerHTML = productName;
            showModal(modal);
        }
    })
    // навешиваем обработчик событий на крестик который закрывает модальное окно
    document.querySelector("#modal-buy .modal__cross").addEventListener('click', ()=>{
        modalHide(document.querySelector("#modal-buy"));
    })
    // после нажатия кнопки купить и валидации формы в модальном окне закрываем модальное окно и открываем новое модальное окно с благодарностью
    document.querySelector("#modal-buy .button_submit").addEventListener('click', (e)=>{
        e.preventDefault();
        const form = document.querySelector("#modal-buy .form")
        const v = new Validator(form, {
            onFieldChangeValidation: true,
            lang: en,
        });
        v.validate();
        if(v.validatorError.errorsList.length === 0){
            modalHide(document.querySelector("#modal-buy"));
            showThanksModal();
            const formData = new FormData(form);
            sendDataToServer(formData);
            form.reset();
        }
    })
}
export default  modal;