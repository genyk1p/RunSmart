import { tns } from "tiny-slider/src/tiny-slider";

function slider () {
    const left = document.querySelector(".slider__left"),
          right = document.querySelector(".slider__right");

    const hidArow = () => {
      if (document.documentElement.clientWidth <= 768){
        left.style.display = "none";
        right.style.display = "none";
      } else {
        left.style.display = "block";
        right.style.display = "block";
      }
    }
    hidArow();

    let slider = tns({
        container: '.slider__inner',
        items: 1,
        slideBy: 'page',
        controls: false,
        nav: false,
        mouseDrag: true,
        speed: 1000,
      });
    left.addEventListener("click", () =>{
      slider.goTo("prev")
    })
    right.addEventListener("click", () =>{
      slider.goTo("next")
    })
    window.addEventListener('resize', function() {
      hidArow();
      slider.refresh(); // Обновить слайдер
    });
    setInterval(()=>{
      slider.goTo("next")
    }, 10000)
}
export default  slider;