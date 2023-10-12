console.log("Script loaded");

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    console.log("Hamburger menu clicked");
    const dropdown = document.querySelector(".menu-dropdown");
    dropdown.classList.toggle("open");
  });

document.querySelector(".close-menu").addEventListener("click", function () {
  const dropdown = document.querySelector(".menu-dropdown");
  dropdown.classList.remove("open");
});
