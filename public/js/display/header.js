import { buildDropDownDisplay } from "./drop-down.js";

const headerData = {
  url: "https://www.youtube.com/@WorldNewsThisWeek",
  imageSrc: "images/WNTW_header_pic.png",
  imageAlt: "WNTW Profile Pic Fail",
  title: "WorldNewsThisWeek",
  tagline: "Sick of Garbage Reporting So Doing It Myself",
};

export const buildHeaderDisplay = async (screenSize) => {
  if (!screenSize) return null;

  //build drop down here
  const dropDown = await buildDropDownDisplay();

  console.log("DROP DOWN");
  console.log(dropDown);

  const header = document.createElement("header");
  header.id = "header";

  const picTextContainer = document.createElement("div");
  picTextContainer.id = "pic-text-container";

  const firstPicLink = await buildHeaderPicLink();
  const logoText = await buildHeaderLogoText();
  picTextContainer.append(firstPicLink, logoText);

  //return with just 2 items for phones
  if (screenSize === "smallPhone" || screenSize === "bigPhone") {
    header.append(picTextContainer, dropDown);
    return header;
  }

  //otherwise add in last pic link
  const secondPicLink = await buildHeaderPicLink();
  picTextContainer.appendChild(secondPicLink);
  header.append(picTextContainer, dropDown);

  return header;
};

export const buildHeaderPicLink = async () => {
  const link = document.createElement("a");
  link.href = headerData.url;

  const img = document.createElement("img");
  img.src = headerData.imageSrc;
  img.alt = headerData.imageAlt;

  link.appendChild(img);

  return link;
};

export const buildHeaderLogoText = async () => {
  const logoText = document.createElement("div");
  logoText.id = "logo-text";

  const titleLink = document.createElement("a");
  titleLink.href = headerData.url;

  const h1 = document.createElement("h1");
  h1.textContent = headerData.title;

  const p = document.createElement("p");
  p.textContent = headerData.tagline;

  titleLink.appendChild(h1);
  logoText.append(titleLink, p);

  return logoText;
};
