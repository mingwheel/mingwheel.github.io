/* Activates Image Gallery
 * Attach an event listener to each img in the gallery
 * Add response to click 
 */
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");
  let title = document.querySelector("#gallery-info > .title");
  let description = document.querySelector("#gallery-info > .description");

  let currentClass = "current";

  thumbnails.forEach(thumbnail => {
    // Preload large images
    let newImgSrc = thumbnail.dataset.largeVersion;
    let newImgAlt = thumbnail.dataset.title;
    let largeVersion = new Image();
    largeVersion.src = thumbnail.dataset.largeVersion;
    
    thumbnail.addEventListener("click", function() {
      // Set clicked img as display img
      mainImage.setAttribute("src", newImgSrc);
      mainImage.setAttribute("alt", newImgAlt);

      // Toggle highlight on img selection
      document.querySelector(".current").classList.remove(currentClass);
      this.parentNode.classList.add(currentClass);
      
      // Update img info
      title.textContent = this.dataset.title;
      description.textContent = this.dataset.description;
    });
  });
}