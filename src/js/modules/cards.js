function cards () {
    // Динамически формируем карточки меню
    const menuWraper = document.querySelector(".catalog__cards");
    class Menu {
        constructor(img, alt, cardInfo, cardText, oldPrice, newPrice, li1, li2, li3, li4, wraper) {
            this.img = img;
            this.alt = alt;
            this.cardInfo = cardInfo;
            this.cardText = cardText;
            this.oldPrice = oldPrice;
            this.newPrice = newPrice;
            this.li1 = li1;
            this.li2 = li2;
            this.li3 = li3;
            this.li4 = li4;
            this.wraper = wraper;
        }
        render(){
            const div = document.createElement("div");
            div.classList.add("card");
            div.classList.add("card_mb10");
            div.innerHTML = `
                        <div class="card__content-wrapper">
                            <div class="card__content">
                                <img src=${this.img} alt="${this.alt}">
                                <div class="card__info">${this.cardInfo}</div>
                                <div class="card__text">${this.cardText}</div>
                                <div class="card__inspect">ПОДРОБНЕЕ</div>
                            </div>
                            <ul class="card__description">
                                <li>${this.li1}</li>
                                <li>${this.li2}</li>
                                <li>${this.li3}</li>
                                <li>${this.li4}</li>
                                <div class="card__back">НАЗАД</div>
                            </ul>
                        </div>
                        <hr>
                        <div class="card__footer">
                            <div class="card__prices">
                                <div class="card__old-price">${this.oldPrice} EURO</div>
                                <div class="card__new-price">${this.newPrice} EURO</div>
                            </div>
                            <button class="button button_buy">Купить</button>
                        </div>
            `;
            this.wraper.append(div);
        }
    }
    function createMenu(filter='all'){
        menuWraper.innerHTML = '';
        fetch("http://localhost:4000/cards")
        .then(data => data.json())
        .then(data =>{
            if (filter == 'all'){
                data.forEach(card =>{
                    new Menu(card.img, card.alt, card.cardInfo, card.cardText, card.oldPrice, card.newPrice, card.li1, card.li2, card.li3, card.li4, menuWraper).render();
                });
            } else {
                data.filter((item)=>(item.category == filter)).forEach(card =>{
                    new Menu(card.img, card.alt, card.cardInfo, card.cardText, card.oldPrice, card.newPrice, card.li1, card.li2, card.li3, card.li4, menuWraper).render();
                });
            }
            document.querySelectorAll(".card").forEach(card =>{
                card.classList.add("card_show")
            })
        });
        document.addEventListener("click", (e)=>{
            if (e.target && (e.target.classList.contains("card__inspect") || e.target.classList.contains("card__back"))){
                e.target.parentElement.parentElement.classList.toggle("card__content-wrapper_translate")
            }
        })
    }
    createMenu();
    document.addEventListener('click', (e)=>{
        if(e.target && e.target.parentElement.classList.contains("catalog__tab")){
            document.querySelectorAll(".catalog__tab").forEach(element =>{
                element.classList.remove("catalog__tab_activ")
            })
            e.target.parentElement.classList.add("catalog__tab_activ");
            switch (e.target.innerHTML) {
                case 'для фитнеса':
                    createMenu("fitness");
                    break;
                case 'для бега':
                    createMenu("run");
                    break;
                case 'для триатлона':
                    createMenu("triathlon");
                    break;
                default:
                    createMenu();
            }
            console.log(document.querySelectorAll(".card"))
            
        }
    })
}
export default cards;