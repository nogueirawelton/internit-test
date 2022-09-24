import "./src/scss/index.scss";


const enterpriseSlider = document.querySelector("[data-enterprise-slider]");
const slider = document.querySelector(".slider ul");
const count = (Array.from(slider.querySelectorAll("li")).length - 3);

enterpriseSlider.addEventListener("input", (e) => {
  slider.scroll(e.target.value * (2.26 * count), 0)
})