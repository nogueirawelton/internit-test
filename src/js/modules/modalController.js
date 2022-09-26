export const modalController = () => {
  const modal = document.querySelector("[data-modal]");
  const button = document.querySelector("[data-open-document]");
  const closeButton = document.querySelector("[data-close-document]");

  const reference = document.querySelector(".document");
  const opennedImage = modal.querySelector(".openned-image");

  const toggleModal = () => {
    opennedImage.setAttribute("src", reference.getAttribute("src"));
    modal.classList.toggle("active");
  }

  button.addEventListener("click", () => {
    toggleModal();
    document.body.style.overflow = "hidden";
  })

  closeButton.addEventListener("click", () => {
    toggleModal();
    document.body.style.overflow = "auto";
  })
}