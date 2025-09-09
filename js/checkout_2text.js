$(document).ready(function () {
  const myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log('55');
    setTimeout(function () {
      window.location.href = "/checkout_successful.html";
    });
  });

// switch
  $("#switch1").click(function () {
    $("#switch-bg1").toggleClass("bg-add"),
    $("#circle1").toggleClass("add");
  });

  $("#switch2").click(function () {
    $("#switch-bg2").toggleClass("bg-add"), 
    $("#circle2").toggleClass("add");
  });

// creditCard
  const creditCard = document.getElementById("creditCard");
  const cardNumber = document.getElementById("card-number");
  const expiryDate = document.getElementById("expiry-date");
  const securityCode = document.getElementById("security-code");

  creditCard.addEventListener("change", () => {
    // console.log(creditCard.checked);
    if (creditCard.checked) {
      // console.log('checked');
      cardNumber.toggleAttribute("disabled");
      expiryDate.toggleAttribute("disabled");
      securityCode.toggleAttribute("disabled");
    } else {
      //   console.log("no");
      cardNumber.toggleAttribute("disabled");
      expiryDate.toggleAttribute("disabled");
      securityCode.toggleAttribute("disabled");
    }
  });

});

