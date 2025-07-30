const displayElement = document.getElementById("display-element");

export const buildDisplay = async () => {
  const vidObj = await getVidObj();
  console.log(vidObj);
};

export const getVidObj = async () => {
  const route = "/api/vid-data";
  const vidObj = await sendToBack({ route: route });
  return vidObj;
};

buildDisplay();
