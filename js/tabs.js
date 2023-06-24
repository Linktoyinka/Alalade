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

// function createTabbedNavigation(containerId) {
//   var container = document.getElementById(containerId);

//   var tabButtons = container.getElementsByClassName("tab-btn");
//   var tabContents = container.getElementsByClassName("tab-content");

//   for (var i = 0; i < tabButtons.length; i++) {
//     tabButtons[i].addEventListener("click", function(evt) {
//       var tabName = this.getAttribute("data-tab");

//       for (var j = 0; j < tabContents.length; j++) {
//         if (tabContents[j].getAttribute("id") === tabName) {
//           tabContents[j].style.display = "block";
//         } else {
//           tabContents[j].style.display = "none";
//         }
//       }

//       for (var k = 0; k < tabButtons.length; k++) {
//         tabButtons[k].classList.remove("active");
//       }

//       this.classList.add("active");

//       var tabContent = document.getElementById(tabName);
//       var padding = 20; // Adjust the padding value as needed
//       var topOffset = tabContent.getBoundingClientRect().top + window.pageYOffset;
//       container.scrollTop = topOffset - container.offsetTop - padding;
//     });
//   }
// }

// // Usage
// createTabbedNavigation("tabContainer1");
// createTabbedNavigation("tabContainer2");




