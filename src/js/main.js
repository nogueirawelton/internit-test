import "../scss/index.scss";

import { backgroundController } from "./modules/backgroundController";
import { carouselController } from "./modules/carouselController";
import { modalController } from "./modules/modalController";
import { documentsController } from "./modules/documentsController";
import { activeLinkController } from "./modules/activeLinkController";
import { mobileMenuController } from "./modules/mobileMenuController";
import { formController } from "./modules/formController";

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

window.onload = () => {
  mobileMenuController();
  activeLinkController();
  backgroundController(data);
  carouselController(data);
  documentsController();
  modalController();
  formController();
}
