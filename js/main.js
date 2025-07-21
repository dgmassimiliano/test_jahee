document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const navLinks = document.querySelectorAll('.nav-link');
  const currentURL = window.location.pathname;

  navLinks.forEach(link => {
    const linkURL = new URL(link.href).pathname;
    if (currentURL === linkURL) {
      link.classList.add('active');
    }
  });
  if (currentURL === "/") {
    let link_home = document.getElementById("link_home");
    link_home.classList.add('active');
  }

  if (!localStorage.getItem("cookies-accepted-jahee")) {
    banner.style.display = "block";
  }

  acceptBtn?.addEventListener("click", function () {
    localStorage.setItem("cookies-accepted-jahee", "true");
    banner.style.display = "none";
  });

  //Photo Gallery
  if(currentURL.endsWith("/photo-gallery/")){  
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    const thumbs = document.querySelectorAll('.gallery-thumb');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function (e) {
        e.preventDefault();
        let imgSrc = this.querySelector('img').getAttribute('src');
        // Rimuove la "s" subito dopo lo slash e prima della "g"
        imgSrc = imgSrc.replace(/\/s(?=g)/, '/');
        modalImage.src = imgSrc;
        modal.show();
      });
    });
  }
});
