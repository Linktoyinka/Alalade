const main_menu = document.querySelector(".menu");
const main_menu2 = document.querySelector(".bar");
const main_menu3 = document.querySelector(".bar2");
const mobile_menu = document.querySelector(".nav-mobile");

main_menu.addEventListener("click", function () {
  main_menu2.classList.toggle("is-active");
  main_menu3.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});