// 1600+ = bigDesktop //4 long 1 short
// 1350-1599 = smallDesktop //4 long 1 short
// 1100-1349 = tinyDesktop //4 long 1 short
// 768-1099 = tablet // 2 shorts 2 long
// 401-767 = bigPhone // 2 shorts 1 long
// <400 = smallPhone //1 short 1 long

export const BREAKPOINTS = {
  bigDesktop: 1600,
  smallDesktop: 1350,
  tinyDesktop: 1100,
  tablet: 768,
  bigPhone: 401,
  // smallPhone: <400,
};

export const getScreenSize = async () => {
  const { bigPhone, tablet, smallDesktop, tinyDesktop, bigDesktop } = BREAKPOINTS;

  //get size that will define screen size
  const sizeItem = await getSizeItem();

  console.log("sizeItem");
  console.log(sizeItem);

  if (sizeItem > bigDesktop) return "bigDesktop";
  if (sizeItem > smallDesktop) return "smallDesktop";
  if (sizeItem > tinyDesktop) return "tinyDesktop";
  if (sizeItem > tablet) return "tablet";
  if (sizeItem > bigPhone) return "bigPhone";
  return "smallPhone";
};

export const getSizeItem = async () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  //desktop
  if (width > 1100) return width;

  //return smaller for table / phone
  return Math.min(width, height);
};

// Video size definitions
export const vidDimensions = {
  bigDesktop: {
    short: { width: "315", height: "560" },
    long: { width: "560", height: "315" },
  },

  smallDesktop: {
    short: { width: "284", height: "504" },
    long: { width: "504", height: "284" },
  },

  tinyDesktop: {
    short: { width: "221", height: "392" },
    long: { width: "392", height: "221" },
  },

  tablet: {
    short: { width: "315", height: "560" },
    long: { width: "448", height: "252" },
  },

  bigPhone: {
    short: { width: "315", height: "560" },
    long: { width: "420", height: "236" },
  },

  smallPhone: {
    short: { width: "315", height: "560" },
    long: { width: "392", height: "221" },
  },
};
