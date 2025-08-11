// carousel
var swiper = new Swiper(".mySwiper", {
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

// hito
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 2.5,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 32,
    },
  },
});

// recommend
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1.3,
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
});

// movie
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1.17,
  spaceBetween: 16,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination-3",
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

// heart
function replaceClass(id, oldClass, newClass) {
  var elem = $(`#${id}`);
  if (elem.hasClass("unfill-heart")) {
    elem.removeClass(oldClass).addClass(newClass);
  } else {
    elem.addClass(oldClass).removeClass(newClass);
  }

}
$(document).ready(function () {
  $("#heart").click(function () {
    replaceClass("heart", "unfill-heart", "heart");
  });

  $("#heart2").click(function () {
    replaceClass("heart2", "unfill-heart", "heart");
  });

  $("#heart3").click(function () {
    replaceClass("heart3", "unfill-heart", "heart");
  });
  
});

