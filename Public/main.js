let isScrolling;
const $backToTop = $(".back-to-top");
$backToTop.hide();
$(window).scroll(function () {
  clearTimeout(isScrolling);
  $backToTop.fadeIn("slow");
  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});
$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1700, "easeInOutExpo");
});

const nav = document.querySelector(".navigation");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const tog = document.querySelector(".tog");
const navlist = document.querySelector(".nav");
const icone = document.querySelector(".fa-bars");

tog.addEventListener("click", function () {
  navlist.classList.toggle("responsive");
  if (icone.classList.contains("fa-bars")) {
    icone.classList.replace("fa-bars", "fa-times");
  } else {
    icone.classList.replace("fa-times", "fa-bars");
  }
});
