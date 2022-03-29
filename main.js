"use scrict";

/******************************************************/
/**** Make navbar transparent when it is on the top ***/
/******************************************************/
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

/*********************************************************/
/**** Handle scrolling when tapping on the navbar menu ***/
/*********************************************************/
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const link = e.target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

/****************************************************/
/**** Handle click on "contact me" button on home ***/
/****************************************************/
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

/************************************************************************/
/**** Make home slowly fade to transparent as the window scrolls down ***/
/************************************************************************/
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

/***************************************************/
/**** Show "Arrow up" button when scrolling down ***/
/***************************************************/
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

/**********************************************/
/**** Handle click on the "arrow up" button ***/
/**********************************************/
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

/*****************/
/**** Projects ***/
/*****************/
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    //Method1
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        // console.log(`filter: ${filter}`);
        // console.log(`project.dataset.type: ${project.dataset.type}`);
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);

  // //Method2
  // for (let project of projects) {
  //   console.log(project);
  // }
  // //Method3
  // let project;
  // for (let i = 0; i < projects.length; i++) {
  //   project = projects[i];
  //   console.log(project);
  // }
});

/*************************/
/**** Utility Function ***/
/*************************/
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
