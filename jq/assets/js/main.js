(function ($) {
  "use strict";

  /* 1. Preloder (готовый код, можно использовать в любом проекте) */
  $(window).on("load", function () {
    $("#preloader-active").delay(450).fadeOut("slow");
    $("body").delay(450).css({
      overflow: "visible",
    });
  });

  /* 2. Sticky And Scroll UP */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header-sticky").removeClass("sticky-bar");
      $("#back-top").fadeOut(500);
    } else {
      $(".header-sticky").addClass("sticky-bar");
      $("#back-top").fadeIn(500);
    }
  });

  // Scroll Up
  $("#back-top a").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
  //Tabs
  $(".nav-item").on("click", function (event) {
    event.preventDefault();
    let currTab = $(this).index();
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
    $(".fade").removeClass("active");
    $(".fade").eq(currTab).addClass("active");
  });
})(jQuery);

//Parolax
const scene = document.getElementById("scene");
const parallaxInstance = new Parallax(scene);

//Menu
$(".mobile_menu").on("click", function () {
  $(".main-menu").toggle();
});
