const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  slidesPerView: 1.25,
  loop: true,
  centeredSlides: true,
  coverflowEffect: {
    depth: 200,
    rotate: 30,
    stretch: 0,
    slideShadows: true,
  },
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
