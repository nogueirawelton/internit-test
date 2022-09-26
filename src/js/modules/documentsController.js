
export const documentsController = () => {
  const controls = document.querySelectorAll(".info .document-controls button");
  const buildingDocument = document.querySelector(".document");

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