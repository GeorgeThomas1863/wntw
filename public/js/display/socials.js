export const buildSocialsDisplay = async (inputArray) => {
  if (!inputArray || !inputArray.length) return null;

  // console.log("INPUT ARRAY");
  // console.log(inputArray);

  const socialsDiv = document.createElement("div");
  socialsDiv.id = "socials";

  // Create social media links using a loop
  for (let i = 0; i < inputArray.length; i++) {
    const linkData = inputArray[i];

    // Create the link element
    const link = document.createElement("a");
    link.href = linkData.href;
    link.id = linkData.id;

    // Create the image element
    const img = document.createElement("img");
    img.src = linkData.imgSrc;
    img.alt = linkData.imgAlt;

    // Assemble and append
    link.appendChild(img);
    socialsDiv.appendChild(link);
  }

  return socialsDiv;
};
