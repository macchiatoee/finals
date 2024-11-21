function navigateTo(page) {
    window.location.href = page;
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    const footerText = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Andrei's Portfolio | All Rights Reserved`;
  });
  
 
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  
  galleryImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "transform 0.3s ease-in-out";
    });
  
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });