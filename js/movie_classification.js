// movieUnder-swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  spaceBetween: 2,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4.5,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 2,
    },
  },
});



