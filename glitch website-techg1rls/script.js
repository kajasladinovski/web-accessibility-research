document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded and ready!");
  });
  function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
  
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    caption.innerText = img.getAttribute("data-description");
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }