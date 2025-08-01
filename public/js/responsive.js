import { buildDisplay } from "./main.js";

const displayElement = document.getElementById("display-element");

export const clickHandler = async (e) => {
  e.preventDefault();

  const clickElement = e.target;
  const dataType = clickElement.getAttribute("data-dropdown-toggle");

  console.log(clickElement);
  console.log(dataType);

  if (dataType) await dropDownOpenClose();
};

export const dropDownOpenClose = async () => {
  const dropDownMenuElement = document.getElementById("drop-down-menu-display");
  if (dropDownMenuElement.classList.contains("hidden")) {
    dropDownMenuElement.classList.remove("hidden");
  } else {
    dropDownMenuElement.classList.add("hidden");
  }

  return;
};

export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Debounced resize handler
export const debouncedResizeHandler = debounce(async () => {
  displayElement.innerHTML = "";
  await buildDisplay();
}, 300);

///----------

//event listeners
window.addEventListener("resize", debouncedResizeHandler);

// document.addEventListener("DOMContentLoaded", async () => {
//   await buildDisplay();
// });

if (displayElement) {
  displayElement.addEventListener("click", clickHandler);
}
