window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});

//--------------------------------------------------------------------------------------------------//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// ---------------------------------------------------------------------------------------------//

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//---------------------------------------------------------------------------------------------------//

function reveal_x() {
  var reveal_xs = document.querySelectorAll(".reveal_x");

  for (var i = 0; i < reveal_xs.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal_xs[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal_xs[i].classList.add("active");
    } else {
      reveal_xs[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal_x);

// --------------------------------------------------------------------------------------///

let swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 42,
  loop: "true",
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "true",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// ----------------------------------------------------------------------------------------------///

let currentSlide = 0,
  theSlides = document.getElementsByClassName("widget_media_image"),
  customSliderTimer,
  next,
  prev,
  theWrapper = document.getElementById("my-custom-slider-demo");
function customNavToNextSlide() {
  next = currentSlide < theSlides.length - 1 ? currentSlide + 1 : 0;
  customSetCurrentSlide(next);
}
function customNavToPrevSlide() {
  prev = currentSlide > 0 ? currentSlide - 1 : theSlides.length - 1;
  customSetCurrentSlide(prev);
}
function customSetCurrentSlide(to) {
  clearInterval(customSliderTimer);
  for (let i = 0; i < theSlides.length; i++) {
    if (currentSlide == i) {
      theSlides[currentSlide].classList.remove("active");
    }
    if (next == i) {
      theSlides[to].classList.add("active");
    }
  }
  currentSlide = to;
  customSliderStart();
}
function customSliderStart() {
  customSliderTimer = setInterval(function () {
    customNavToNextSlide();
  }, 1000);
}
function customSliderInit() {
  let height = theSlides[0].getElementsByTagName("img")[0].height;
  theWrapper.style.height = height + "px";
  for (let i = 0; i < theSlides.length; i++) {
    theSlides[i].style.height = height + "px";
  }
}
if (typeof theSlides !== "undefined") {
  window.addEventListener("resize", customSliderInit);
  customSliderInit();
  if (theSlides.length > 1) {
    customSliderStart();
  }
}

//---------------------------------------------------------------------------------------------------------//

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.classList.add("active");

button1.addEventListener("click", function () {
  button1.classList.add("active");
  button2.classList.remove("active");
});

button2.addEventListener("click", function () {
  button2.classList.add("active");
  button1.classList.remove("active");
});

// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

button1.addEventListener("click", function () {
  div1.classList.remove("hidden");
  div2.classList.add("hidden");
});

button2.addEventListener("click", function () {
  div2.classList.remove("hidden");
  div1.classList.add("hidden");
});

// this code to make the second div hidden when the first one is active
div2.classList.add("hidden");
div1.classList.remove("hidden");

//-----------------------------------------------------------------------------------------------------//
