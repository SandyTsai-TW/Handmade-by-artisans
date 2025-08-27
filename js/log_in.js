$(document).ready(function () {
  function memberState() {
    let state = localStorage.getItem("memberState");
    console.log(state);
  }
  memberState();

  firebase.auth().onAuthStateChanged(function (user) {
    console.log("user", user);

    if (user) {
      $(".unauth").hide();
      $(".auth").show();
      $("#loader").show();
      
      // localStorage.setItem("memberState", "true");

    } else {
      $(".unauth").show();
      $(".auth").hide();

      // localStorage.setItem('memberState', 'false');
    }
  });

  // 按登出按鈕，做登出的動作
  $("#logout").on("click", function () {
    firebase.auth().signOut().then(function () {
        $(".unauth").show();
        $(".auth").hide();
      })
      .catch(function (err) {
        console.log("Logout fail", err);
      });
  });

  // log_in.html
  $(".toggle-password").click(function () {
    $(this).toggleClass("eye eye-off");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

});

