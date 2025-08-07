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
