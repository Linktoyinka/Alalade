const main_menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-panel");
const body = document.querySelector(".body");
const hide = document.querySelector(".hide");
const aboutBtn = document.querySelector(".about-btn");
const downloadBtn = document.querySelector(".download-btn");


main_menu.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  body.classList.toggle("scroll");


  // About menu button switch
    aboutBtn.classList.toggle("hide");
    downloadBtn.classList.toggle("hide");
  
});


window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  header.classList.toggle("blur-header", window.scrollY > 50);
});

