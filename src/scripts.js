document.addEventListener("DOMContentLoaded", function () {
  // Function to determine the distance from the top of the viewport
  function getDistanceFromTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top;
  }

  // Function to remove the active class from all links
  function removeActiveClassFromLinks() {
    document.querySelectorAll(".desktop-nav a").forEach((link) => {
      link.classList.remove("active");
    });
  }

  // Add a scroll event listener
  window.addEventListener("scroll", function () {
    // Sections that correspond to menu items
    const sections = ["home", "meine-arbeit", "about-me", "events", "kontakt"];

    let closestSection = sections[0];
    let smallestDistance = Infinity;

    for (let section of sections) {
      const sectionEl = document.getElementById(section);
      const distance = Math.abs(getDistanceFromTop(sectionEl));

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestSection = section;
      }
    }

    // Remove active class from all links
    removeActiveClassFromLinks();

    // Find the link that corresponds to the closest section and add the active class
    const navLink = document.querySelector(
      `.desktop-nav a[href="#${closestSection}"]`
    );
    if (navLink) {
      navLink.classList.add("active");
    }
  });

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
  document
    .querySelector(".overlay")
    .addEventListener("click", function (event) {
      // Check if the clicked target is the overlay itself and not an inner element
      if (event.target === event.currentTarget) {
        document.querySelector(".overlay").classList.remove("active");
      }
    });
});
