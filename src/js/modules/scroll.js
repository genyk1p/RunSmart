
function crollUp(){
    const up = document.querySelector(".scroll-up")
    window.addEventListener("scroll", function(event) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 1000){
            up.classList.remove("scroll-up_hide")
            up.classList.add("scroll-up_show")
        } else if (scrollTop <= 1000 && up.classList.contains("scroll-up_show")){
            up.classList.add("scroll-up_hide")
            up.classList.remove("scroll-up_show")
        }
    });
}
export default crollUp