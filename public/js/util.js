export const backendGET = async (route) => {
  //GET REQ
  try {
    const res = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeBackgroundPic = async (screenSize) => {
  const backgroundPic = document.getElementById("background-pic");

  switch (screenSize) {
    case "bigDesktop":
      backgroundPic.src = "/images/WNTW_background_main.jpg";
      backgroundPic.style.opacity = 0.15;
      return;

    case "smallDesktop":
    case "tinyDesktop":
      backgroundPic.src = "/images/WNTW_background_main.jpg";
      backgroundPic.style.opacity = 0.3;
      return;

    case "tablet":
      backgroundPic.src = "/images/WNTW_background_crop1.jpg";
      backgroundPic.style.opacity = 0.3;
      return;

    case "bigPhone":
    case "smallPhone":
      backgroundPic.src = "/images/WNTW_background_crop2.jpg";
      backgroundPic.style.opacity = 0.4;
      return;
  }
};
