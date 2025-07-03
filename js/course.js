var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    },
  },
});
