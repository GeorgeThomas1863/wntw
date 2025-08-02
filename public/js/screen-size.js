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
  const width = window.innerWidth;
  const { bigPhone, tablet, smallDesktop, tinyDesktop, bigDesktop } = BREAKPOINTS;

  console.log("WIDTH");
  console.log(width);

  if (width > bigDesktop) return "bigDesktop";
  if (width > smallDesktop) return "smallDesktop";
  if (width > tinyDesktop) return "tinyDesktop";
  if (width > tablet) return "tablet";
  if (width > bigPhone) return "bigPhone";
  return "smallPhone";
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
    short: { width: "300", height: "533" },
    long: { width: "410", height: "231" },
  },
};
