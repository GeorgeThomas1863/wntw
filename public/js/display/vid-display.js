import { vidDimensions } from "../define-things.js";

export const buildVidDisplay = async (vidObj, screenSize) => {
  if (!vidObj || !screenSize) return null;

  const vidDisplay = document.createElement("div");
  vidDisplay.id = "vid-display";

  //get cotnainers from template
  const containerArray = await vidLayoutTemplate(vidObj, screenSize);
  console.log("CONTAINER ARRAY");
  console.log(containerArray);

  for (let i = 0; i < containerArray.length; i++) {
    const containerData = containerArray[i];

    // Create column div
    const container = document.createElement("div");
    container.id = containerData.id;

    // Create videos for this column
    for (let j = 0; j < containerData.vidSpecs.length; j++) {
      const video = containerData.vidSpecs[j];
      for (let k = 0; k < video.urls.length; k++) {
        const iframe = await buildThumbnailYT(video.size.width, video.size.height, video.urls[k]);
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

  let containerArray = [];
  switch (screenSize) {
    case "desktop":
      containerArray = [
        { id: "large-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "large-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "large-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "tablet":
      containerArray = [
        { id: "yt-shorts-row-big", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL, vidObj.secondShortURL] }] },
        { id: "yt-shorts-row-small", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL, vidObj.secondShortURL] }] },
        { id: "yt-vids-row-big", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
        { id: "yt-vids-row-small", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
        { id: "yt-vids-row-tiny", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.secondLongURL] }] },
      ];
      break;

    case "bigPhone":
      containerArray = [
        { id: "large-column1", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL, vidObj.thirdLongURL] }] },
        { id: "large-column2", vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "large-column3", vidSpecs: [{ size: vidSize.long, urls: [vidObj.secondLongURL, vidObj.fourthLongURL] }] },
      ];
      break;

    case "smallPhone":
      containerArray = [
        { id: null, vidSpecs: [{ size: vidSize.short, urls: [vidObj.firstShortURL] }] },
        { id: "yt-vid-wide", vidSpecs: [{ size: vidSize.long, urls: [vidObj.firstLongURL] }] },
      ];
      break;
  }

  return containerArray;
};

export const buildThumbnailYT = async (width, height, url) => {
  const vidId = extractVidIdYT(url);

  console.log("Vid ID");
  console.log(vidId);

  if (!vidId) {
    console.warn("Could not extract video ID from URL:", url);
    return null;
  }

  const container = document.createElement("div");
  container.className = "yt-vid youtube-thumbnail-container";
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;

  // Create thumbnail image
  const thumbnail = document.createElement("img");
  thumbnail.className = "youtube-thumbnail";
  thumbnail.src = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
  thumbnail.alt = "YouTube video thumbnail";

  // Create play button overlay
  const playButton = document.createElement("div");
  playButton.className = "youtube-play-button";
  playButton.innerHTML = "▶";

  // Hover effects
  container.addEventListener("mouseenter", () => {
    playButton.style.backgroundColor = "rgba(255, 0, 0, 0.9)";
    playButton.style.transform = "translate(-50%, -50%) scale(1.1)";
  });

  container.addEventListener("mouseleave", () => {
    playButton.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    playButton.style.transform = "translate(-50%, -50%) scale(1)";
  });

  // Click handler - redirect to YouTube
  container.addEventListener("click", () => {
    window.open(url, "_blank");
  });

  // Handle thumbnail load errors (fallback to lower quality)
  thumbnail.addEventListener(
    "error",
    () => {
      thumbnail.src = `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`;

      // If even the fallback fails, try one more fallback
      thumbnail.addEventListener(
        "error",
        () => {
          thumbnail.src = `https://img.youtube.com/vi/${vidId}/mqdefault.jpg`;
        },
        { once: true }
      );
    },
    { once: true }
  );

  container.appendChild(thumbnail);
  container.appendChild(playButton);

  return container;
};

export const extractVidIdYT = (url) => {
  if (!url) return null;
  const result = url.substring(url.indexOf("/embed/") + "/embed/".length);

  return result;
};

// export const createVidIframe = async (width, height, link) => {
//   const iframe = document.createElement("iframe");
//   iframe.className = "yt-vid";
//   iframe.width = width;
//   iframe.height = height;
//   iframe.src = link;
//   iframe.title = "YouTube video player";
//   iframe.frameBorder = "0";
//   iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
//   iframe.allowFullscreen = true;
//   return iframe;
// };
