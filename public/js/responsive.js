import { d } from "./define-things.js";

export const clickHandler = async (e) => {
  e.preventDefault();

  const clickElement = e.target;
  const dataType = clickElement.getAttribute("data-dropdown-toggle");

  console.log(clickElement);
  console.log(dataType);

  if (dataType) await dropDownOpenClose();

  // console.log("CLICK ELEMENT");
  // console.log(clickElement);

  // console.log("EXPAND TYPE");
  // console.log(expandType);

  // console.log("TOGGLE TYPE");
  // console.log(toggleType);

  // console.log("ARTICLE TYPE");
  // console.log(articleType);

  //   if (!expandType && !toggleType && !articleType) return null;

  //   if (toggleType) await toggleDropdown(toggleType);

  //   if (expandType) await expandForm(expandType);

  //   if (articleType) await changeArticleType(articleType);

  //   return true;
};

// Old Drop Down Click Functionality
let dropDownOpen = false;
export const dropDownOpenClose = async () => {
  const dropDownMenuStyle = d.dropDownMenuDisplayElement.style;
  if (dropDownOpen === false) {
    dropDownMenuStyle.display = "block";
    dropDownOpen = true;
  } else {
    dropDownMenuStyle.display = "none";
    dropDownOpen = false;
  }

  return;
};

const displayElement = document.getElementById("display-element");

if (displayElement) {
  displayElement.addEventListener("click", clickHandler);
}
