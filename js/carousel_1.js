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

  $("#heart4").click(function () {
    replaceClass("heart4", "unfill-heart", "heart");
  });
  
});

