const navbar = document.getElementById("topBar");
window.addEventListener("scroll", () => {
  const scrolly = window.scrollY;
  if (scrolly > 50) {
    //adjust offset
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navbars = document.getElementById("navBar");
window.addEventListener("scroll", () => {
  const scrolly = window.scrollY;
  if (scrolly > 50) {
    //adjust offset
    navbars.classList.add("scrolled");
  } else {
    navbars.classList.remove("scrolled");
  }
});
