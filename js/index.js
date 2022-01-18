const hamburger = document.querySelector(".nav--hamburger");
const nav_list = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__list a");
const showcase = document.querySelector(".portfolio--showcase");
const portLink = document.querySelectorAll(".portfolio--link");
const loadMore = document.querySelector("#load-more");
const lcClose = document.querySelector(".lc-close");

window.addEventListener("load", function () {
  generateImg(20);
  AOS.init({
    once: true,
  });
});

hamburger.addEventListener("click", () => {
  nav_list.classList.toggle("nav__list--active");
  hamburger.classList.toggle("nav--hamburger--active");
});

navLink.forEach((el) => {
  el.addEventListener("click", () => {
    nav_list.classList.toggle("nav__list--active");
    hamburger.classList.toggle("nav--hamburger--active");
  });
});

function getRandomNum() {
  return Math.ceil(Math.random() * 40);
}

function generateImg(imgLimit) {
  for (let img = 1; img <= imgLimit; img++) {
    const genImg = document.createElement("img");
    genImg.src = `./assets/asset ${getRandomNum()}-min.jpeg`;
    genImg.alt = "pic";

    showcase.appendChild(genImg);
  }
}

portLink.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClass();
    el.classList.add("active");
    showcase.innerHTML = "";
    generateImg(20);
  });
});

function removeActiveClass() {
  portLink.forEach((el) => el.classList.remove("active"));
}

loadMore.addEventListener("click", () => {
  generateImg(8);
  loadMore.style.display = "none";
});

lcClose.addEventListener("click", () => {
  document.querySelector(".lc-img").style.display = "none";
  lcClose.style.display = "none";
});
