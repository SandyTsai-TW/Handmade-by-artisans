// course-location
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 16,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4.5,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 5.5,
      spaceBetween: 32,
    },
  },
});

// course-date-range
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3.3,
  spaceBetween: 16,
  
  breakpoints: {
    768: {
      slidesPerView: 4.3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 5.3,
      spaceBetween: 32,
    },
  },
});

