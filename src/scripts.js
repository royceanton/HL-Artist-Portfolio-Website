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


// Function to show overlay with the selected image
function showOverlay(imgSrc, altText) {
  const overlayImage = document.querySelector('.overlay img');
  overlayImage.src = imgSrc;
  overlayImage.alt = altText;
  document.querySelector('.overlay').classList.add('active');
}

// Event listeners for each image in the gallery
const galleryImages = document.querySelectorAll('.artwork-gallery img');
galleryImages.forEach(img => {
  img.addEventListener('click', function() {
      showOverlay(img.src, img.alt);
  });
});

// Event listener for the overlay to close it
document.querySelector('.overlay').addEventListener('click', function() {
  document.querySelector('.overlay').classList.remove('active');
});

// To prevent the overlay from closing when the image itself or the navigation buttons are clicked
document.querySelector('.overlay img').addEventListener('click', function(event) {
  event.stopPropagation();
});
document.querySelector('.overlay .prev').addEventListener('click', function(event) {
  event.stopPropagation();
});
document.querySelector('.overlay .next').addEventListener('click', function(event) {
  event.stopPropagation();
});
