window.addEventListener("DOMContentLoaded", (event) => {
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const sideNav = document.getElementsByClassName("side-nav")[0];

  hamburger.addEventListener("click", () => {
    sideNav.classList.toggle("side-nav-shown");
    console.log("Clicked");
  });
});
