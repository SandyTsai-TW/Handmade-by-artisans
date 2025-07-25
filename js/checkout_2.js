$(document).ready(function () {

// switch
  $("#switch1").click(function () {
    $("#switch-bg1").toggleClass("bg-add"),
    $("#circle1").toggleClass("add");
  });

  $("#switch2").click(function () {
    $("#switch-bg2").toggleClass("bg-add"), 
    $("#circle2").toggleClass("add");
  });

});

