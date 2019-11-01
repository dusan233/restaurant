const header = document.getElementById("header");

const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");

const searchbar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

const countUpSection = document.getElementById("count-up");
const servicesSection = document.getElementById("services");
const serviceIcons = document.querySelectorAll(".icone");
const firstCount = document.getElementById("first-count");
const secondCount = document.getElementById("second-count");
const thirdCount = document.getElementById("third-count");

const galleryImages = document.querySelectorAll(".gal");
var imgBig = document.getElementById("img-big");
var imgBigModal = document.getElementById("img-big-modal");

let countUpDone = false;
let servIconsDone = false;

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

function countUp(finalNumber, duration, elementId, startPoint = 0) {
  let repetition = parseInt(duration / finalNumber);
  countUpDone = true;
  let intervalId = setInterval(() => {
    startPoint++;
    document.getElementById(elementId).textContent = startPoint;

    if (startPoint >= finalNumber) {
      clearInterval(intervalId);
    }
  }, repetition);
}

window.addEventListener("scroll", function() {
  if (window.innerWidth > 800) {
    if (
      window.pageYOffset + window.innerHeight >=
        countUpSection.offsetTop + countUpSection.offsetHeight / 5 &&
      !countUpDone
    ) {
      countUp(120, 6000, "first-count");
      countUp(530, 6000, "second-count");
      countUp(1059, 6500, "third-count");
    }
  }

  if (
    window.pageYOffset + window.innerHeight >
      servicesSection.offsetTop + servicesSection.offsetHeight / 2 &&
    !servIconsDone
  ) {
    serviceIcons.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add("service-card-active");
      }, 200 * (i + 1));
    });
    servIconsDone = true;
  }
});

searchButton.addEventListener("click", function() {
  searchbar.classList.toggle("show-searchbar");
});

$(document).ready(function() {
  $(".foto-slider").slick({
    lazyLoad: "ondemand",
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000, //tranzition
    prevArrow: $(".prev-foto"),
    nextArrow: $(".next-foto"),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
});

for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].addEventListener("click", function() {
    imgBigModal.style.display = "block";
    imgBig.src = this.src;
    document.body.style.overflow = "hidden";
  });
}

function closeModal() {
  imgBigModal.style.display = "none";
  document.body.style.overflowY = "scroll";
}
