export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  if (linksInternos.length) {
    function scrollToSection(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      /*    Forma Alternativa

      *  const top = section.offsetTop;
      *  window.scrollTo({
      *   top: top,
      *   behavior: "smooth",
      *  });

      */
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
