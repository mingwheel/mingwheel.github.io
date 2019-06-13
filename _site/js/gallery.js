function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");
  let title = document.querySelector("#gallery-info > .title");
  let description = document.querySelector("#gallery-info > .description");

  let currentClass = "current";

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      // Set clicked img as main img
      let newImgSrc = this.dataset.largeVersion;
      let newImgAlt = this.dataset.title;
      
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