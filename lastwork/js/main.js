//slideshow on bottom
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".womazing__arrowr",
    prevEl: ".womazing__arrowl",
  },
});

//slideshow on top
const slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".slide__dots-span"),
  slideWrap = document.querySelectorAll(".slides");

let index = 0;

const slideAct = (n) => {
  for (slide of slides) {
    slide.classList.remove("activate");
  }
  slides[n].classList.add("activate");
};

const slideDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("act");
  }
  dots[n].classList.add("act");
};

const prepareCurrentSlide = (ind) => {
  slideAct(ind);
  slideDot(ind);
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});
//scroll
$(document).ready(function () {
  var margin = 200; // переменная для контроля докрутки
  $(".slide__block-img").click(function () {
    // тут пишите условия, для всех ссылок или для конкретных
    $("html, body").animate(
      {
        scrollDown: $($(this).attr("href")).offset().top + margin - "px", // .top+margin - ставьте минус, если хотите увеличить отступ
      },
      {
        duration: 0.5, // тут можно контролировать скорость
        easing: "swing",
      }
    );
    return false;
  });
});

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
