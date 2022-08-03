const menuBtn = document.querySelector(".hamburger-btn");
const sideMenu = document.querySelector(".side-menu");

menuBtn.addEventListener("click", () => {
  if (sideMenu.classList.contains("menu-active")) {
    sideMenu.classList.remove("menu-active");
  } else {
    sideMenu.classList.add("menu-active");
  }
});
