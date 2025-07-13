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


// keyword.html
var swiper = new Swiper(".mySwiper-1", {
  slidesPerView: 3.5,
  spaceBetween: 2,
  scrollbar: {
    el: ".swiper-scrollbar-1",
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.8,
      spaceBetween: 2,
    },
    375: {
      slidesPerView: 3.5,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 6,
    },
  },
});


