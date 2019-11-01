const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

const searchbar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

const navbarContainer = document.getElementById("navbar-container");
const navbarTopArea = document.getElementById("top-area");
const header = document.getElementById("header");

const introSection = document.getElementById("intro");
const littleInfoSection = document.getElementById("little-info");
const chefRecomendedSec = document.getElementById("chef-recomended");
const contactInfoSec = document.getElementById("contact-info");

burger.addEventListener("click", function() {
  sidebar.classList.toggle("show-sidebar");
});

document.body.style.paddingTop = header.offsetHeight + "px";

window.addEventListener("scroll", function() {
  if (
    window.pageYOffset + window.innerHeight >
    introSection.offsetTop + introSection.offsetHeight / 2
  ) {
    TweenMax.to(".intro-content", 0.5, {
      opacity: 1,
      y: "0"
    });
  }

  if (
    window.pageYOffset + window.innerHeight >
    littleInfoSection.offsetTop + littleInfoSection.offsetHeight / 2
  ) {
    TweenMax.staggerTo(".little-info-card", 0.5, { opacity: 1, y: 0 }, 0.2);
  }

  if (
    window.pageYOffset + window.innerHeight >
    chefRecomendedSec.offsetTop + chefRecomendedSec.offsetHeight / 2
  ) {
    TweenMax.staggerTo(".recomended-card", 0.7, { opacity: 1, scale: 1 }, 0.2);
  }

  if (
    window.pageYOffset + window.innerHeight >
    contactInfoSec.offsetTop + contactInfoSec.offsetHeight / 2
  ) {
    TweenMax.staggerTo(".ci-badge", 0.2, { width: 50, height: 50 }, 0.1);
  }
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

$(document).ready(function() {
  $(".slick").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 1000, //tranzition
    prevArrow: $(".prev"),
    nextArrow: $(".next")
  });

  $(".slick-testimonials").slick({
    autoplay: true,
    autoplaySpeed: 6000,

    speed: 1000, //tranzition
    prevArrow: $(".prev-testimonial"),
    nextArrow: $(".next-testimonial")
  });

  $(".slick").on("afterChange", function() {
    var currentSlide = $(".slick").slick("slickCurrentSlide");

    $(".slide-content").each(function(ind) {
      if (ind === currentSlide) {
        $(this).addClass("active-slide");
      } else {
        $(this).removeClass("active-slide");
      }
    });
  });
});
