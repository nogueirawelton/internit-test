export const dynamicHomeBackground = (data) => {
  let i = 0;

  const homeContainer = document.querySelector("#home .container");
  const homeContainerInfo = homeContainer.querySelector("h1");

  const setData = (i) => {
    if(data[i].richTitle.length) {
      homeContainer.style.background = `url(/assets/images/img_${data[i].id}.jpg) no-repeat center`;
      homeContainerInfo.innerHTML = data[i].richTitle;
    }
  }

  setData(i);

  setInterval(() => { 
    i++;
    if(i > data.length - 1) {
      i = 0;
    }
    setData(i);
  }, 12000);
}