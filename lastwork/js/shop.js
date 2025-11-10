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

//tabs
$(document).ready(function () {
  $("#one").click(function () {
    $("#one").addClass("types__id");
    $("#two").removeClass("types__id");
    $("#three").removeClass("types__id");
    $("#four").removeClass("types__id");
    $("#five").removeClass("types__id");
    $("#none-one").removeClass("on");
    $("#none-two").removeClass("on");
    $("#none-three").removeClass("on");
    $("#none-four").removeClass("on");
    $("#none-five").removeClass("on");
    $("#none-six").removeClass("on");
  });
  $("#two").click(function () {
    $("#two").addClass("types__id");
    $("#one").addClass("color");
    $("#one").removeClass("types__id");
    $("#three").removeClass("types__id");
    $("#four").removeClass("types__id");
    $("#five").removeClass("types__id");
    $("#none-one").addClass("on");
    $("#none-two").addClass("on");
    $("#none-three").addClass("on");
    $("#none-four").addClass("on");
    $("#none-five").addClass("on");
    $("#none-six").addClass("on");
    $(".on").removeClass("wrapper__think");
  });
  $("#three").click(function () {
    $("#three").addClass("types__id");
    $("#one").addClass("color");
    $("#one").removeClass("types__id");
    $("#two").removeClass("types__id");
    $("#four").removeClass("types__id");
    $("#five").removeClass("types__id");
    $("#none-one").addClass("on");
    $("#none-two").addClass("on");
    $("#none-three").addClass("on");
    $("#none-four").addClass("on");
    $("#none-five").addClass("on");
    $("#none-six").addClass("on");
    $(".on").removeClass("wrapper__think");
  });
  $("#four").click(function () {
    $("#four").addClass("types__id");
    $("#one").addClass("color");
    $("#one").removeClass("types__id");
    $("#two").removeClass("types__id");
    $("#three").removeClass("types__id");
    $("#five").removeClass("types__id");
    $("#none-one").addClass("on");
    $("#none-two").addClass("on");
    $("#none-three").addClass("on");
    $("#none-four").addClass("on");
    $("#none-five").addClass("on");
    $("#none-six").addClass("on");
    $(".on").removeClass("wrapper__think");
  });
  $("#five").click(function () {
    $("#five").addClass("types__id");
    $("#one").addClass("color");
    $("#one").removeClass("types__id");
    $("#two").removeClass("types__id");
    $("#three").removeClass("types__id");
    $("#four").removeClass("types__id");
    $("#none-one").addClass("on");
    $("#none-two").addClass("on");
    $("#none-three").addClass("on");
    $("#none-four").addClass("on");
    $("#none-five").addClass("on");
    $("#none-six").addClass("on");
    $(".on").removeClass("wrapper__think");
  });
});
