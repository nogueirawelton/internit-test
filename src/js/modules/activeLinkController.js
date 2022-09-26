import { debounceEvent } from "../utils/debounce";

export const activeLinkController = () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("[data-menu] a");

  let current = "";
  window.addEventListener("scroll", debounceEvent(() => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop ) {
        current = section.getAttribute("id");
      }
    });
    menuLinks.forEach(i => {
      i.classList.remove("active");
      if (i.getAttribute("href").includes(current)) {
        i.classList.add("active");
      }
    });
  }))
}