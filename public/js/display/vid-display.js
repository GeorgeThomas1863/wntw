import { vidDimensions } from "../screen-size.js";

export const buildVidDisplay = async (vidObj, screenSize) => {
  if (!vidObj || !screenSize) return null;

  const vidDisplay = document.createElement("div");
  vidDisplay.id = "vid-display";

  //get cotnainers from template
  const containerArray = await vidLayoutTemplate(vidObj, screenSize);
  // console.log("CONTAINER ARRAY");
  // console.log(containerArray);

  for (let i = 0; i < containerArray.length; i++) {
    const containerData = containerArray[i];

    // Create column div
    const container = document.createElement("div");
    container.id = containerData.id;

    // Create videos for this column
    for (let j = 0; j < containerData.vidSpecs.length; j++) {
      const video = containerData.vidSpecs[j];
      for (let k = 0; k < video.urls.length; k++) {
        const iframe = await createVidIframe(video.size.width, video.size.height, video.urls[k]);
        // console.log("IFRAME");
        // console.log(iframe);
        container.appendChild(iframe);
      }
    }

    vidDisplay.appendChild(container);
  }

  return vidDisplay;
};

// Layout template definitions
export const vidLayoutTemplate = async (vidObj, screenSize) => {
  const vidSize = vidDimensions[screenSize];

  //EACH NEEDS TO BE ITS OWN TO GET WRITE CSS NAMES
  let containerArray = [];
  switch (screenSize) {
    case "bigDesktop":
    case "smallDesktop":
    case "tinyDesktop":
      containerArray = [
        { id: "bigDesktop-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "bigDesktop-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "bigDesktop-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "smallDesktop":
      containerArray = [
        { id: "smallDesktop-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "smallDesktop-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "smallDesktop-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "tinyDesktop":
      containerArray = [
        { id: "tinyDesktop-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "tinyDesktop-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "tinyDesktop-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "tablet":
      containerArray = [
        { id: "tablet-row1", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL, vidObj.secondShortURL] }] },
        { id: "tablet-row2", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
      ];
      break;

    case "bigPhone":
      containerArray = [
        { id: "bigPhone-row1", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "bigPhone-row2", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL] }] },
      ];
      break;

    case "smallPhone":
      containerArray = [
        { id: "smallPhone-row1", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "smallPhone-row2", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL] }] },
      ];
      break;
  }

  return containerArray;
};

export const createVidIframe = async (width, height, link) => {
  const iframe = document.createElement("iframe");
  iframe.className = "yt-vid";
  iframe.width = width;
  iframe.height = height;
  iframe.src = link;
  iframe.title = "YouTube video player";
  iframe.allow = "encrypted-media; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  return iframe;
};
