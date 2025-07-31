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

const displayElement = document.getElementById("display-element");

if (displayElement) {
  displayElement.addEventListener("click", clickHandler);
}
