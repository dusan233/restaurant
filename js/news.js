const header = document.getElementById("header");

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

const searchbar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

const newsCards = document.querySelectorAll(".news-item");

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
  newsCards.forEach((item, i) => {
    if (
      window.pageYOffset + window.innerHeight >
      item.offsetTop + item.offsetHeight / 2
    ) {
      item.classList.add("show");
    }
  });
});
