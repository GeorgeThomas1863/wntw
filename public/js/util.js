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
    case "smallDesktop":
      backgroundPic.src = "/images/WNTW_background_main.jpg";
      return;

    case "tablet":
      backgroundPic.src = "/images/WNTW_background_crop1.jpg";
      return;

    case "bigPhone":
    case "smallPhone":
      backgroundPic.src = "/images/WNTW_background_crop2.jpg";
      return;
  }
};
