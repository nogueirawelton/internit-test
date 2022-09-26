export const mobileMenuController = () => {
  const openMenuButton = document.querySelector("[data-open-menu]");
  const closeMenuButton = document.querySelector("[data-close-menu]");
  const menu = document.querySelector("[data-menu]");
  const overlay = document.querySelector("[data-menu-overlay]");
  const menuLinks = menu.querySelectorAll("a");

  const closeMenu = () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    closeMenuButton.classList.remove("active");
  }

  closeMenuButton.addEventListener("click", closeMenu);

  menuLinks.forEach(i => {
    i.addEventListener("click", closeMenu);
  })

  openMenuButton.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
    closeMenuButton.classList.add("active");
  });
}