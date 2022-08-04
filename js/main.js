const menuBtn = document.querySelector(".hamburger-btn");
const sideMenuWrapper = document.querySelector(".sideMenu-wrapper");
const sideMenu = document.querySelector(".side-menu");
const mainWrapper = document.querySelector(".main-wrapper");
const siteContent = document.querySelector(".site-content");

menuBtn.addEventListener("click", () => {
  if (
    sideMenu.classList.contains("menu-active") ||
    sideMenuWrapper.classList.contains("menu-active")
  ) {
    sideMenu.classList.remove("menu-active");
    mainWrapper.classList.remove("menu-active");
    siteContent.classList.remove("menu-active");
    sideMenuWrapper.classList.remove("menu-active");
  } else {
    sideMenu.classList.add("menu-active");
    sideMenuWrapper.classList.add("menu-active");
    mainWrapper.classList.add("menu-active");
    siteContent.classList.add("menu-active");
  }
});
