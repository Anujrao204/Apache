function changehair(newImageSrc) {
    var imageContainer = document.getElementById("hair");
    var image = imageContainer.getElementsByTagName("img")[0];
    image.src = newImageSrc;
    image.alt = "New Image";
  }
  
