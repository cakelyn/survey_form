$(document).ready(function () {

  var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    $("img").css ({
      "width": "300px;"
    });
    $("h1").css ({
      "width": "300px;"
    });
    $("h1").css({
      "font-size": "24px;"
    });
  }

  // sets custom HTML5 validity text
  var name = document.querySelector('input[id="name"]');
  var email = document.querySelector('input[id="email"]');

  $(name).on("invalid", function () {
    this.setCustomValidity("BOO, NOT COOL.\nPlease enter your name.");
  });

  $(name).on("input", function () {
    this.setCustomValidity("");
  });

  $(email).on("invalid", function () {
    this.setCustomValidity("DISQUALIFIED.\nPlease format your email correctly.");
  });

  $(email).on("input", function () {
    this.setCustomValidity("");
  });

});

/**

    $("#submit").click(function() {
    var name = document.querySelector('input[id="name"]');
    var email = document.querySelector('input[id="email"]');
    var age = document.querySelector('input[name="age"]');

    if(name.checkValidity() == false) {
      name.setCustomValidity("BOO, NOT COOL.\nPlease enter your name.");
    } else if (email.checkValidity() == false) {
      email.setCustomValidity("DISQUALIFIED.\nPlease format your email correctly.");
    }

  });

    function checkValid() {
    var name = document.querySelector('input[id="name"]');
    var email = document.querySelector('input[id="email"]');
    var age = document.querySelector('input[name="age"]');

    if(name.checkValidity() == false) {
      name.setCustomValidity("BOO, NOT COOL.\nPlease enter your name.");
    } else if (email.checkValidity() == false) {
      email.setCustomValidity("DISQUALIFIED.\nPlease format your email correctly.");
    }

  }
  **/