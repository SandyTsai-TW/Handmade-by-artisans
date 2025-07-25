// Loading畫面
const loading = document.querySelector("#loading");

window.addEventListener("load", () => {

  loading.animate(
    // keyframes,option
    {
      opacity: [1, 0],
      visibility: "hidden",
    },
    {
      duration: 2000,
      delay: 1200,
      easing: "ease",
      fill: "forwards",
    }
  );
});