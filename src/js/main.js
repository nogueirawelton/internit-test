import "../scss/index.scss";

import { dynamicHomeBackground } from "./modules/dynamicHomeBackground";
import { createCarrouselItems } from "./modules/createCarrouselItems";

const data = [
  {
    id: 1,
    richTitle: "Aposte no <strong>conforto</strong> sem perder a <strong>elegância</strong>"
  },
  {
    id: 2,
    richTitle: "<strong>Lazer</strong> à um passo"
  },
  {
    id: 3,
    richTitle: "Crie memórias com <strong>amigos</strong> e <strong>família</strong>"
  },
  {
    id: 1,
    richTitle: ""
  },
  {
    id: 2,
    richTitle: ""
  },
  {
    id: 4,
    richTitle: ""
  }
]

const toggleModal = () => {
  const modal = document.querySelector("#modal-overlay");
  const button = document.querySelector("[data-open-document]");
  const closeButton = document.querySelector("[data-close-document]");

  button.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  })

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  })

}

window.onload = () => {
  toggleModal();
  dynamicHomeBackground(data);
  createCarrouselItems(data);
}
