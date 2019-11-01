const header = document.getElementById("header");

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

const searchbar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

const tabItems = document.querySelectorAll(".tab-item");
const menuItems = document.querySelectorAll(".menu-item");

document.body.style.paddingTop = header.offsetHeight + "px";

burger.addEventListener("click", function() {
  sidebar.classList.toggle("show-sidebar");
});

window.addEventListener("resize", function() {
  if (this.innerWidth > 980) {
    sidebar.classList.remove("show-sidebar");
  }
  if (this.innerWidth < 980) {
    searchbar.classList.remove("show-searchbar");
  }
  document.body.style.paddingTop = header.offsetHeight + "px";
});

searchButton.addEventListener("click", function() {
  searchbar.classList.toggle("show-searchbar");
});

document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].dataset.name === "Starters") {
      menuItems[i].style.display = "block";
    } else {
      menuItems[i].style.display = "none";
    }
  }

  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].addEventListener("click", function() {
      let tabs = [...tabItems];
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active-tab");
      }
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].dataset.name === this.textContent) {
          menuItems[i].style.display = "block";
        } else {
          menuItems[i].style.display = "none";
        }
      }
      this.classList.add("active-tab");
    });
  }
});
