export const setActiveImage = (event) => {
  const enterpriseImage = document.querySelector("#enterprise .image img");
  const enterpriseSliderItems = document.querySelectorAll(".slider .slider-track img");

  enterpriseSliderItems.forEach(i => {
    i.classList.remove("active");
  })

  enterpriseImage.setAttribute("src", event.target.getAttribute("src"));
  event.currentTarget.classList.add("active");
}