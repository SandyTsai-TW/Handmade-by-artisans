$(document).ready(function () {
// card
  $(".flip").click(function () {
    $("#arrow").toggleClass("add");
  });

// switch
  $(".mySwitch").click(function () {
    $(".switch-bg").toggleClass("bg-add"),
    $(".circle").toggleClass("add");
  });

});

