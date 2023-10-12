// Hamburger menu functionality
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".menu-dropdown").classList.add("open");
  });

// Close button functionality
document.querySelector(".close-menu").addEventListener("click", function () {
  document.querySelector(".menu-dropdown").classList.remove("open");
});

// Dropdown link click script
const dropdownLinks = document.querySelectorAll(".menu-dropdown a");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default behavior of the link
    event.preventDefault();

    // Scroll to the target section
    const targetSection = document.querySelector(link.getAttribute("href"));
    if (targetSection) {
      const topPosition = targetSection.offsetTop;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });

      // Close the dropdown after scrolling
      document.querySelector(".menu-dropdown").classList.remove("open");
    }
  });
});

// Event listeners for enlarging artwork images
const artworkImages = document.querySelectorAll(".artwork-display img");

artworkImages.forEach((img) => {
  img.addEventListener("click", function () {
    const overlay = document.querySelector(".overlay");
    const overlayImg = overlay.querySelector("img");

    // Set the src of the overlay image to the clicked image's src
    overlayImg.src = img.src;

    // Show the overlay
    overlay.classList.add("active");
  });
});

// Event listener for the close button in the image overlay
document
  .querySelector(".close-menu-overlay")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
  });

// Optional: Hide the overlay if anywhere outside the image is clicked
document.querySelector(".overlay").addEventListener("click", function (event) {
  // Check if the clicked target is the overlay itself and not an inner element
  if (event.target === event.currentTarget) {
    document.querySelector(".overlay").classList.remove("active");
  }
});
