import { BREAKPOINTS } from "./define-things.js";
import { getReqBackend } from "./util.js";

import { buildHeaderDisplay } from "./display/header.js";
import { buildSocialsDisplay } from "./display/socials.js";

const displayElement = document.getElementById("display-element");

export const buildDisplay = async () => {
  const screenSize = await getScreenSize();

  console.log("SCREEN SIZE");
  console.log(screenSize);

  const socialsArray = await getReqBackend("/api/socials-data");
  const vidObj = await getReqBackend("/api/vid-data");

  //includes drop down
  const header = await buildHeaderDisplay(screenSize);
  displayElement.appendChild(header);

  const socials = await buildSocialsDisplay(socialsArray);
  displayElement.appendChild(socials);
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
