// movie
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.17,
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.17,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    },
  },
});

const click111 = document.querySelector("#click111");
const open111 = document.querySelector("#open111");

const keyframes = {
  translate: [0,'0 -46%']
}
const options = {
  duration: 2000,
  easing: "ease",
  fill: "backward",
};

click111.addEventListener('click',() => {
  // console.log("open");
  open111.animate(keyframes, options)
});