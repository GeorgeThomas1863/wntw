import { BREAKPOINTS } from "./define-things.js";
import { getReqBackend } from "./util.js";

import { buildHeaderDisplay } from "./display/header.js";
import { buildSocialsDisplay } from "./display/socials.js";

const displayElement = document.getElementById("display-element");

export const buildDisplay = async () => {
  const screenSize = await getScreenSize();

  const socialsObj = await getReqBackend({ route: "/api/socials-data" });
  const vidObj = await getReqBackend({ route: "/api/vid-data" });

  console.log("SCREEN SIZE");
  console.log(screenSize);

  //includes drop down
  const header = await buildHeaderDisplay(screenSize);
  displayElement.appendChild(header);

  const socials = await buildSocialsDisplay(socialsObj);
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
