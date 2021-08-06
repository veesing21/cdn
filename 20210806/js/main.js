$(function () {
  $(".menu-btn").click(function () {
    if ($("body").hasClass("open-nav")) {
      $("body").removeClass("open-nav");
    } else {
      $("body").addClass("open-nav");
    }
  });

  function setCurrent() {
    var hash = location.hash;
    if (hash) {
      $(".nav-link").removeClass("current");
      var name = hash.substr(1);
      $(".nav-link-" + name).addClass("current");
    }
  }

  setCurrent();

  $(".nav-item").click(function () {
    setTimeout(function () {
      setCurrent();
    }, 50)
    $("body").removeClass("open-nav");
  });
});
