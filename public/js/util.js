import { BREAKPOINTS } from "./define-things.js";

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

export const getScreenSize = async () => {
  const width = window.innerWidth;
  const { smallPhone, bigPhone, tablet } = BREAKPOINTS;

  if (width < smallPhone) return "smallPhone";
  if (width < bigPhone) return "bigPhone";
  if (width < tablet) return "tablet";
  return "desktop";
};
