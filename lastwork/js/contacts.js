//window

$(document).ready(function () {
  //Первое окно
  $(".nav__tel-box").click(function () {
    $(".contacts-wrapper").addClass("on");
    $("body").addClass("body-fixed");
  });

  $(".contacts-wrapper__overlay").click(function () {
    $(".contacts-wrapper").removeClass("on");
    $("body").removeClass("body-fixed");
  });
  // Второе окно
  $(".contacts-wrapper__link").click(function () {
    $(".agreed").addClass("ok");
    $(".contacts-wrapper").removeClass("on");
    $("body").addClass("body-fixed");
  });
  $(".agreed__btn").click(function () {
    $("body").removeClass("body-fixed");
    $(".agreed").removeClass("ok");
  });
  $(".agreed__overlay").click(function () {
    $("body").removeClass("body-fixed");
    $(".agreed").removeClass("ok");
  });
});

// Success block
$(document).ready(function () {
  $(".btn").click(function () {
    $(".done").addClass("done__success");
    $(".done").removeClass("done");
  });
});
