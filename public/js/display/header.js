import { buildDropDown } from "./drop-down.js";

const headerData = {
  url: "https://www.youtube.com/@WorldNewsThisWeek",
  imageSrc: "images/WNTW_header_pic.png",
  imageAlt: "WNTW Profile Pic Fail",
  title: "WorldNewsThisWeek",
  tagline: "Sick of Garbage Reporting So Doing It Myself",
};

export const buildHeader = async (screenSize) => {
  if (!screenSize) return null;

  //build drop down here
  const dropDown = await buildDropDown();

  const header = document.createElement("header");
  header.id = "header";

  const firstPicLink = await buildHeaderPicLink();
  const logoText = await buildHeaderLogoText();
  header.append(firstPicLink, logoText);

  //return with just 2 items for phones
  if (screenSize === "smallPhone" || screenSize === "bigPhone") {
    header.appendChild(dropDown);
    return header;
  }

  //otherwise add in last pic linkk
  const secondPicLink = await buildHeaderPicLink();
  header.append(secondPicLink, dropDown);

  return header;
};

export const buildHeaderPicLink = async () => {
  const link = document.createElement("a");
  link.href = headerData.url;

  const img = document.createElement("img");
  img.src = headerData.imageSrc;
  img.alt = headerData.imageAlt;

  console.log("IMG");
  console.log(img);

  link.appendChild(img);
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
