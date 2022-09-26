import "../scss/index.scss";

import { dynamicHomeBackground } from "./modules/dynamicHomeBackground";
import { createCarrouselItems } from "./modules/createCarrouselItems";
import { toggleModal } from "./modules/toggleModal";

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

const documentController = () => {
  const controls = document.querySelectorAll(".info .document-controls button");
  const buildingDocument = document.querySelector(".document");

  console.log(buildingDocument);
  controls.forEach((control, index) => {
    control.addEventListener("click", (event) => {
      controls.forEach(control  => {
        control.classList.remove("active");
      });
      event.target.classList.add("active");
      buildingDocument.setAttribute("src", `/assets/images/bd_${index+1}.png`)
    })
  })
}

window.onload = () => {
  dynamicHomeBackground(data);
  createCarrouselItems(data);
  toggleModal();
  documentController();
}
