document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const navLinks = document.querySelectorAll('.nav-link');

  // Funzione per normalizzare i path rimuovendo lo slash finale, tranne se è solo "/"
  const normalizePath = (path) => {
    return path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  };

  const currentURL = normalizePath(window.location.pathname);

  navLinks.forEach(link => {
    const linkURL = normalizePath(new URL(link.href).pathname);
    if (currentURL === linkURL) {
      link.classList.add('active');
    }
  });

  if (currentURL === "") {
    const link_home = document.getElementById("link_home");
    link_home?.classList.add('active');
  }

  // Gestione banner cookies
  if (!localStorage.getItem("cookies-accepted-jahee")) {
    banner.style.display = "block";
  }

  acceptBtn?.addEventListener("click", function () {
    localStorage.setItem("cookies-accepted-jahee", "true");
    banner.style.display = "none";
  });

  // Galleria foto: gestisce sia "/photo-gallery" che "/photo-gallery/"
  if (currentURL.endsWith("/photo-gallery")) {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    const thumbs = document.querySelectorAll('.gallery-thumb');

    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function (e) {
        e.preventDefault();
        let imgSrc = this.querySelector('img').getAttribute('src');
        imgSrc = imgSrc.replace(/\/s(?=g)/, '/');
        modalImage.src = imgSrc;
        modal.show();
      });
    });
  }
});
