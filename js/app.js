const main_menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-panel");
const body = document.querySelector(".body");
const hide = document.querySelector(".hide");
const aboutBtn = document.querySelector(".about-btn");
const downloadBtn = document.querySelector(".download-btn");
const header = document.querySelector(".header");


main_menu.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  body.classList.toggle("scroll");


  // About menu button switch
    // Get the button
    const button = document.getElementById('cv');

    // change background color
    button.classList.toggle("btn-bg")

    aboutBtn.classList.toggle("hide");
    downloadBtn.classList.toggle("hide");


    header.classList.toggle("header-bg");
  
});


const werk = document.querySelector(".werk-logo");
const werkSecond = document.querySelector(".werk-logo-2");

window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  header.classList.toggle("blur-header", window.scrollY > 50);

  werk.classList.toggle("hide", window.scrollY > 50);
  werkSecond.classList.toggle("hide", window.scrollY < 50);
});

