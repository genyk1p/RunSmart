
function modal (){
    const callBackBtn = document.querySelectorAll(".button[data-btn='call-back']"),
          thanksModalBtn = document.querySelector(".button[data-btn='thanks-modal']"),
          modalCallBackBtn = document.querySelector(".button[data-btn='modal-call-back-btn']");
    let modalThanksTimeout;

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
    function showThanksModal(e) {
        const modal = document.querySelector("#modal-thanks");
        e.preventDefault();
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
    document.querySelector('#modal-call-back').querySelector('.modal__cross').addEventListener('click', (e)=>{
        const modal = e.target.parentElement.parentElement.parentElement;
        modalHide(modal);
    })
    // После заполенения формы открываем модальное окно с благодарностью, и закрываем его по клику крестика или через 5 секунд
    thanksModalBtn.addEventListener('click', (e)=>{
        showThanksModal(e);
    })
    document.querySelector('#modal-thanks').querySelector('.modal__cross').addEventListener('click', (e)=>{
        const modal = document.querySelector('#modal-thanks');
        modalHide(modal);
        clearTimeout(modalThanksTimeout);
    })
    modalCallBackBtn.addEventListener('click', (e)=>{
        modalHide(document.querySelector("#modal-call-back"));
        showThanksModal(e);
    })

    // При нажатии по кнопке купить открываем модальное окно покупки и передаем в него название продукта который нужно купить
    document.addEventListener('click', (e)=>{
        if(e.target && (e.target.getAttribute('data-btn') === "btn-buy")){
            const productName = e.target.parentElement.parentElement.querySelector(".card__info").innerHTML,
                  modal = document.querySelector("#modal-buy")
            modal.querySelector(".modal__sub-title").innerHTML = productName;
            showModal(modal);
        }
    })
    // навешиваем обработчик событий на крестик который закрывает модальное окно
    document.querySelector("#modal-buy").querySelector(".modal__cross").addEventListener('click', ()=>{
        modalHide(document.querySelector("#modal-buy"));
    })
    // после нажатия кнопки купить в модальном окне закрываем модальное окно и открываем новое модальное окно с благодарностью
    document.querySelector("#modal-buy").querySelector(".button_submit").addEventListener('click', (e)=>{
        modalHide(document.querySelector("#modal-buy"));
        showThanksModal(e)
    })
}
export default  modal;