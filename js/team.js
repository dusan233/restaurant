const header = document.getElementById("header");

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

const searchbar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");


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


