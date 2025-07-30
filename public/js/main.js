import { BREAKPOINTS } from "./define-things.js";
import { getReqBackend } from "./util.js";

import { buildHeader } from "./display/header.js";

const displayElement = document.getElementById("display-element");

export const buildDisplay = async () => {
  const vidObj = await getVidData();
  const screenSize = await getScreenSize();

  console.log("SCREEN SIZE");
  console.log(screenSize);

  //includes drop down
  const header = await buildHeader(screenSize);
  displayElement.appendChild(header);
};

export const getVidData = async () => {
  const route = "/api/vid-data";
  const vidObj = await getReqBackend(route);
  return vidObj;
};

export const getScreenSize = async () => {
  const width = window.innerWidth;
  const { smallPhone, bigPhone, tablet, desktop } = BREAKPOINTS;

  if (width < smallPhone) return "smallPhone";
  if (width < bigPhone) return "bigPhone";
  if (width < tablet) return "tablet";
  return "desktop";
};

buildDisplay();
