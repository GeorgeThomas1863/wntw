export const buildDropDown = async () => {
  // Create the main section
  const dropDownSection = document.createElement("section");
  dropDownSection.id = "drop-down";

  // Create the dropdown bars link
  const barsLink = document.createElement("a");
  barsLink.href = "#";
  barsLink.id = "drop-down-bars";

  // Create 3 spans for the hamburger menu using a loop
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    barsLink.appendChild(span);
  }

  // Create the dropdown menu display div
  const menuDisplay = document.createElement("div");
  menuDisplay.id = "drop-down-menu-display";

  // Menu items data
  const menuItems = [
    { text: "About", href: "/about" },
    { text: "FAQ", href: "/faq" },
    { text: "Contact", href: "/contact" },
  ];

  // Create menu items using a loop
  for (let i = 0; i < menuItems.length; i++) {
    const h2 = document.createElement("h2");
    const link = document.createElement("a");
    link.href = menuItems[i].href;
    link.textContent = menuItems[i].text;
    h2.appendChild(link);
    menuDisplay.appendChild(h2);
  }

  // Assemble the complete structure
  dropDownSection.appendChild(barsLink);
  dropDownSection.appendChild(menuDisplay);

  return dropDownSection;
};
