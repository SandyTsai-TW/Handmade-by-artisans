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

const btn = document.querySelector("#btn-follow");
const text = document.querySelector("#text");

btn.addEventListener("click", () => {
  btn.classList.toggle("company-follow-active");

  if (text.textContent === "追蹤") {
    text.textContent = "追蹤中";
  } else {
    text.textContent = "追蹤";
  }
});

$(document).ready(function () {
  $("#more").click(function(){
    $(".flip").toggleClass("addH");
    $("#more").toggleClass("moreText");
  });
});

