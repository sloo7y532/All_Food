// Scroll top
let btn = document.querySelector(".scroll-top");
let nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    btn.style.display = "flex";
    nav.style.position = "fixed";
  } else {
    nav.style.position = "static";
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
// Preloader
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  loader.style.display = "none"; 
});
