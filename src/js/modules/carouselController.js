export const carouselController = (data) => {
  const slider = document.querySelector(".slider .slider-track");
  const count = (data.length - 4);
  const enterpriseSliderScroll = document.querySelector("[data-enterprise-scroll]");

  data.forEach(({ id, active }, index) => {
    if(!active) {
      const newImage = document.createElement("img");

      newImage.setAttribute("src", `/assets/images/img_${id}.jpg`);
      newImage.addEventListener("click", (event) => {
        const enterpriseImage = document.querySelector("#enterprise .image img");
        const enterpriseSliderItems = document.querySelectorAll(".slider .slider-track img");
      
        enterpriseSliderItems.forEach(i => {
          i.classList.remove("active");
        })
      
        enterpriseImage.setAttribute("src", event.target.getAttribute("src"));
        event.currentTarget.classList.add("active");
      });
       
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