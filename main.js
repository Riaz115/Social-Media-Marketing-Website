// this is for the scroll top js

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-sroll");
  } else {
    nav.classList.remove("header-sroll");
  }
};

// this is for the nav-hide

let navs = document.querySelectorAll(".navbar .nav-link");
let colapes = document.querySelector(".navbar-collapse");
navs.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    colapes.classList.remove("show");
  });
});

// this is for the owl carousel slider
$(document).ready(function () {
  $(".clients-slider-section").owlCarousel({
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});
