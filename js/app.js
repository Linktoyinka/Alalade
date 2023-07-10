const main_menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".nav-panel");
const body = document.querySelector(".body");

main_menu.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  body.classList.toggle("scroll");


  // About menu button switch
    // Get the anchor element
    const anchorElement = document.getElementById('cv');

    // change background color
    anchorElement.classList.toggle("btn-bg")
  
    // Toggle the href attribute
    if (anchorElement.href = '../about.html') {
      anchorElement.href = '../new-about.html';
    } else {
      anchorElement.href = '../about.html';
    }
  
    // Toggle the text content
    if (anchorElement.textContent === 'About Me') {
      anchorElement.textContent = 'Download CV';
    } else {
      anchorElement.textContent = 'Download CV';
    }
  
});


window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  header.classList.toggle("blur-header", window.scrollY > 50);
});

