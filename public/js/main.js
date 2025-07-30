import { backendGET, getScreenSize } from "./util.js";
import { buildHeaderDisplay } from "./display/header.js";
import { buildSocialsDisplay } from "./display/socials.js";
import { buildVidDisplay } from "./display/vid-display.js";

const displayElement = document.getElementById("display-element");

export const buildDisplay = async () => {
  try {
    const screenSize = await getScreenSize();

    console.log("SCREEN SIZE");
    console.log(screenSize);

    const socialsArray = await backendGET("/api/socials-data");
    const vidObj = await backendGET("/api/vid-data");

    //includes drop down
    const header = await buildHeaderDisplay(screenSize);
    displayElement.appendChild(header);

    const socials = await buildSocialsDisplay(socialsArray);
    displayElement.appendChild(socials);

    const vidDisplay = await buildVidDisplay(vidObj, screenSize);
    // console.log("VID DISPLAY");
    // console.log(vidDisplay);
    displayElement.appendChild(vidDisplay);
  } catch (e) {
    console.log(e);
  }
};

buildDisplay();
