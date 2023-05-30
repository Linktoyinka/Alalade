function createTabbedNavigation(containerId) {
  var container = document.getElementById(containerId);

  var tabButtons = container.getElementsByClassName("tab-btn");
  var tabContents = container.getElementsByClassName("tab-content");

  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function(evt) {
      var tabName = this.getAttribute("data-tab");

      for (var j = 0; j < tabContents.length; j++) {
        if (tabContents[j].getAttribute("id") === tabName) {
          tabContents[j].style.display = "block";
        } else {
          tabContents[j].style.display = "none";
        }
      }

      for (var k = 0; k < tabButtons.length; k++) {
        tabButtons[k].classList.remove("active");
      }

      this.classList.add("active");
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// Usage
createTabbedNavigation("tabContainer1");
createTabbedNavigation("tabContainer2");

// header
window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("header-scroll", window.scrollY > 0);
});

