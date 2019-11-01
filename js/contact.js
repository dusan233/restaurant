const header = document.getElementById("header");

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

const searchbar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

const contactInfoSec = document.getElementById("contact-info");

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

window.addEventListener("scroll", function() {
  if (
    window.pageYOffset + window.innerHeight >
    contactInfoSec.offsetTop + contactInfoSec.offsetHeight / 2
  ) {
    TweenMax.staggerTo(".ci-badge", 0.2, { width: 50, height: 50 }, 0.1);
  }
});
