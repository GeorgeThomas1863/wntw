import { getScreenSize } from "./screen-size.js";
import { backendGET, changeBackgroundPic } from "./util.js";
import { buildHeaderDisplay } from "./display/header.js";
import { buildSocialsDisplay } from "./display/socials.js";
import { buildVidDisplay } from "./display/vid-display.js";

const displayElement = document.getElementById("display-element");

export const buildDisplay = async () => {
  try {
    displayElement.innerHTML = "";

    const screenSize = await getScreenSize();

    await changeBackgroundPic(screenSize);

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
