export const dynamicHomeBackground = (data) => {
  let i = 0;

  const homeContainer = document.querySelector("#home .container");
  const homeContainerInfo = homeContainer.querySelector("h1");

  const imagesBackground = data.filter(i => i.richTitle.length > 0);

  const setData = (i) => {
      homeContainer.style.background = `url(/assets/images/img_${imagesBackground[i].id}.jpg) no-repeat center`;
      homeContainerInfo.innerHTML = imagesBackground[i].richTitle;
  }

  setData(i);
  setInterval(() => { 
    i++;
    if(i > imagesBackground.length - 1) {
      i = 0;
    }
    setData(i);
  }, 12000);
}