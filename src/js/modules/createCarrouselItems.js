import { setActiveImage } from "./setActiveImage";

export const createCarrouselItems = (data) => {
  const slider = document.querySelector(".slider .slider-track");
  const count = (data.length - 4);
  const enterpriseSliderScroll = document.querySelector("[data-enterprise-scroll]");

  data.forEach(({ id, active }, index) => {
    if(!active) {
      const newImage = document.createElement("img");

      newImage.setAttribute("src", `/assets/images/img_${id}.jpg`);
      newImage.addEventListener("click", setActiveImage);
      
      if(!index) {
        newImage.classList.add("active");
      }

      slider.appendChild(newImage);
    }
  });

  enterpriseSliderScroll.addEventListener("input", (e) => {
    slider.scroll(e.target.value * (2.26 * count), 0)
  });
}