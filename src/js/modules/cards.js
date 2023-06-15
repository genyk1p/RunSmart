// Функция строит карточки, в качестве аргументов можно передать, либо "obj" либо "fetch". Если obj тогда данные для построения карточек будут взяты из локального обьекта data
function cards (method='obj') {
    // Если получаем данные дистанциооно, то в url надо указать путь для получения данных
    const url = "http://localhost:4000/cards";
    const data = {
        cards: [
          {
            img: "img/polar.jpg",
            altimg: "polar",
            cardInfo: "Polar FT1 heart rate monitor'",
            cardText: "For the first steps in heart rate training",
            oldPrice: 60,
            newPrice: 50,
            li1: "You will hear a sound notification about the desired heart rate during training;",
            li2: "You will see an informative graphical indicator of target training heart rate zones;",
            li3: "You will also see information about the calorie consumption per workout;",
            li4: "You can view data for 10 workouts.",
            category: "fitness"
          },
          {
            img: "img/polar.jpg",
            altimg: "polar",
            cardInfo: "Heart rate monitor Suunto M2'",
            cardText: "For the first steps in heart rate training",
            oldPrice: 70,
            newPrice: 60,
            li1: "You will hear a sound notification about the desired heart rate during training;",
            li2: "You will see an informative graphical indicator of target training heart rate zones;",
            li3: "You will also see information about the calorie consumption per workout;",
            li4: "You can view data for 10 workouts.",
            category: "run"
          },
          {
            img: "img/polar.jpg",
            altimg: "polar",
            cardInfo: "Polar FT1 heart rate monitor",
            cardText: "For the first steps in heart rate training",
            oldPrice: 40,
            newPrice: 30,
            li1: "You will hear a sound notification about the desired heart rate during training;",
            li2: "You will see an informative graphical indicator of target training heart rate zones;",
            li3: "You will also see information about the calorie consumption per workout;",
            li4: "You can view data for 10 workouts.",
            category: "triathlon"
          },
          {
            img: "img/polar.jpg",
            altimg: "polar",
            cardInfo: "Polar FT1 heart rate monitor'",
            cardText: "For the first steps in heart rate training",
            oldPrice: 60,
            newPrice: 50,
            li1: "You will hear a sound notification about the desired heart rate during training;",
            li2: "You will see an informative graphical indicator of target training heart rate zones;",
            li3: "You will also see information about the calorie consumption per workout;",
            li4: "You can view data for 10 workouts.",
            category: "fitness"
          },
          {
            img: "img/polar.jpg",
            altimg: "polar",
            cardInfo: "Heart rate monitor Suunto M2'",
            cardText: "For the first steps in heart rate training",
            oldPrice: 70,
            newPrice: 60,
            li1: "You will hear a sound notification about the desired heart rate during training;",
            li2: "You will see an informative graphical indicator of target training heart rate zones;",
            li3: "You will also see information about the calorie consumption per workout;",
            li4: "You can view data for 10 workouts.",
            category: "run"
          },
          {
            img: "img/polar.jpg",
            altimg: "polar",
            cardInfo: "Polar FT1 heart rate monitor",
            cardText: "For the first steps in heart rate training",
            oldPrice: 40,
            newPrice: 30,
            li1: "You will hear a sound notification about the desired heart rate during training;",
            li2: "You will see an informative graphical indicator of target training heart rate zones;",
            li3: "You will also see information about the calorie consumption per workout;",
            li4: "You can view data for 10 workouts.",
            category: "triathlon"
          }
        ]
      }

    // Динамически формируем карточки
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
                                <div class="card__inspect">LEARN MORE</div>
                            </div>
                            <ul class="card__description">
                                <li>${this.li1}</li>
                                <li>${this.li2}</li>
                                <li>${this.li3}</li>
                                <li>${this.li4}</li>
                                <div class="card__back">BACK</div>
                            </ul>
                        </div>
                        <hr>
                        <div class="card__footer">
                            <div class="card__prices">
                                <div class="card__old-price">${this.oldPrice} EURO</div>
                                <div class="card__new-price">${this.newPrice} EURO</div>
                            </div>
                            <button class="button button_buy" data-btn="btn-buy">Buy</button>
                        </div>
            `;
            this.wraper.append(div);
        }
    }
    // Функция добаляет клас для отображения карточки, он необходима для плавной анимации появления карточки
    function addShowClass () {
        document.querySelectorAll(".card").forEach(card =>{
            card.classList.add("card_show")
        })
    }
    // функция добаляет клас внутри карточки который передвигает содержимое карточки вправо или влево когда мы нажимаем на кнопки ПОДРОБНЕЕ или назад
    function addEventListener () {
        document.addEventListener("click", (e)=>{
            if (e.target && (e.target.classList.contains("card__inspect") || e.target.classList.contains("card__back"))){
                e.target.parentElement.parentElement.classList.toggle("card__content-wrapper_translate")
            }
        })
    }

    // Функция принимает на вход метод получения данных и фильтр для фильтрации карточек, и рендерит карточки
    function renderPage({method='fetch', filter='all'}) {
        if(method==='fetch'){
            fetch(url)
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
                addShowClass ();
            });
        } else {
            if (filter == 'all'){
                data.cards.forEach(card =>{
                    new Menu(card.img, card.alt, card.cardInfo, card.cardText, card.oldPrice, card.newPrice, card.li1, card.li2, card.li3, card.li4, menuWraper).render();
                });
            } else {
                data.cards.filter((item)=>(item.category == filter)).forEach(card =>{
                    new Menu(card.img, card.alt, card.cardInfo, card.cardText, card.oldPrice, card.newPrice, card.li1, card.li2, card.li3, card.li4, menuWraper).render();
                });
            }
            addShowClass ();
        }
        addEventListener ()
    }
    function createMenu(filter='all'){
        menuWraper.innerHTML = '';
        renderPage({method: method, filter: filter})
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
        }
    })
}
export default cards;