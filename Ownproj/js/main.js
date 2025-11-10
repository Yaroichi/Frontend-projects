let buttonClick = document.getElementById("secbtn");
let windowMod = document.getElementById("modal");
let body = document.querySelector("body");
let cross = document.getElementById("cross");

buttonClick.addEventListener("click", () => {
  windowMod.removeAttribute("id");
  windowMod.setAttribute("id", "on");
  body.classList.add("body-fixed");
});

cross.addEventListener("click", () => {
  windowMod.removeAttribute("id");
  body.classList.remove("body-fixed");
});

//slider
const leftBtn = document.getElementById("left-btn"),
  rightBtn = document.getElementById("right-btn"),
  dotSelection = document.getElementById("dot"),
  firstSlide = document.querySelectorAll(".slides__box"),
  slides = document.querySelectorAll(".slides"),
  slidesWrap = document.querySelectorAll(".slides__box"),
  dots = document.querySelectorAll(".slides__dot");

let index = 0;
const activeSlide = (n) => {
  for (slide of slidesWrap) {
    slide.classList.remove("active");
  }
  for (dot of dots) {
    dot.classList.remove("active");
  }
  slidesWrap[n].classList.add("active");
  dots[n].classList.add("active");
  console.log(n);
};

const nextSlide = () => {
  if (index == slidesWrap.length - 1 && index == dots.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slidesWrap.length - 1 && dots.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    activeSlide(index);
  });
});

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

//DropDown menu

const icon = document.getElementById("hamburger"),
  menu = document.getElementById("ddm"),
  close = document.getElementById("close");

icon.addEventListener("click", () => {
  menu.classList.toggle("appear");
});
close.addEventListener("click", () => {
  menu.classList.remove("appear");
});



