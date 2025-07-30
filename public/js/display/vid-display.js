import { vidDimensions } from "../define-things.js";

export const buildVidDisplay = async (vidObj, screenSize) => {
  if (!vidObj || !screenSize) return null;

  const vidDisplay = document.createElement("div");
  vidDisplay.id = "vid-display";

  //get cotnainers from template
  const containerArray = await vidLayoutTemplate(vidObj, screenSize);

  for (let i = 0; i < containerArray.length; i++) {
    const containerData = containerArray[i];

    // Create column div
    const container = document.createElement("div");
    container.id = containerData.id;

    // Create videos for this column
    for (let j = 0; j < containerData.vidSpecs.length; j++) {
      const video = containerData.vidSpecs[j];
      const iframe = createVidIframe(video.width, video.height, video.link);
      container.appendChild(iframe);
    }

    vidDisplay.appendChild(container);
  }

  return vidDisplay;
};

// Layout template definitions
export const vidLayoutTemplate = async (vidObj, screenSize) => {
  const vidSize = vidDimensions[screenSize];

  let containers = [];
  switch (screenSize) {
    case "desktop":
      containers = [
        { id: "large-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "large-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "large-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "tablet":
      containers = [
        { id: "yt-shorts-row-big", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL, vidObj.secondShortURL] }] },
        { id: "yt-shorts-row-small", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL, vidObj.secondShortURL] }] },
        { id: "yt-vids-row-big", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
        { id: "yt-vids-row-small", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
        { id: "yt-vids-row-tiny", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
      ];
      break;

    case "bigPhone":
      containers = [
        { id: "large-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "large-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "large-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "smallPhone":
      containers = [
        { id: null, vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "yt-vid-wide", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL] }] },
      ];
      break;
  }

  return containers;
};

export const createVidIframe = async (width, height, link) => {
  const iframe = document.createElement("iframe");
  iframe.className = "yt-vid";
  iframe.width = width;
  iframe.height = height;
  iframe.src = link;
  iframe.title = "YouTube video player";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  return iframe;
};
