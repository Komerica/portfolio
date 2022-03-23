"use scrict";

// Make navbar transparent when it is on the top
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

// const navbar = document.querySelector("#navbar");
// const navbarHeight = navbar.getBoundingClientRect().height;
// //arrow function: not taking argument, execute the block inside
// document.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   console.log(`navbarHeight: ${navbarHeight}`);
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.add("navbar--dark");
//   } else {
//     navbar.classList.remove("navbar--dark");
//   }
// });

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const link = e.target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
