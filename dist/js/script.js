// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const arrowTop = document.querySelector("#arrowTop");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    arrowTop.classList.remove("hidden");
    arrowTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    arrowTop.classList.remove("flex");
    arrowTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // toggle berfungsi untuk menambah atau menghilangkan class dari element html
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  darkToggle.checked ? html.classList.add("dark") : html.classList.remove("dark");
  darkToggle.checked ? (localStorage.theme = "dark") : (localStorage.theme = "light");
});

// pindahkan toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  document.documentElement.classList.remove("dark");
  darkToggle.checked = false;
}
