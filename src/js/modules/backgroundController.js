export const backgroundController = (data) => {
  let i = 0;

  const homeContainer = document.querySelector("#home .container");
  const homeContainerInfo = homeContainer.querySelector("h1");
  const contactContainer = document.querySelector("#contact .container");

  const imagesBackground = data.filter(i => i.richTitle.length > 0);
  
  contactContainer.style.backgroundImage = `url(/assets/images/img_${imagesBackground[0].id}.jpg)`;
  const setData = (i) => {
    homeContainer.style.backgroundImage = `url(/assets/images/img_${imagesBackground[i].id}.jpg)`;
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