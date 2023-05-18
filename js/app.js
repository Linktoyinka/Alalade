const main_menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-panel");

main_menu.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});