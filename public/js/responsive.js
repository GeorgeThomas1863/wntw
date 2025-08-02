import { buildDisplay } from "./main.js";

const displayElement = document.getElementById("display-element");

//track width
let lastWidth = window.innerWidth;

export const clickHandler = async (e) => {
  const clickElement = e.target;
  const dataType = clickElement.getAttribute("data-dropdown-toggle");

  console.log(clickElement);
  console.log(dataType);

  if (dataType) {
    e.preventDefault();
    await dropDownOpenClose();
  }
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
  const currentWidth = window.innerWidth;

  //only rebuild on big width change
  if (Math.abs(currentWidth - lastWidth) < 20) {
    console.log(`Width change too small (${Math.abs(currentWidth - lastWidth)}px) - ignoring`);
    return null;
  }

  //rebuild display
  console.log(`Width changed from ${lastWidth} to ${currentWidth} - rebuilding display`);
  displayElement.innerHTML = "";
  await buildDisplay();

  lastWidth = currentWidth;
}, 300);

///----------

//event listeners
window.addEventListener("resize", debouncedResizeHandler);

if (displayElement) {
  displayElement.addEventListener("click", clickHandler);
}
