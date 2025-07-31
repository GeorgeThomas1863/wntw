// 1600+ = bigDesktop //4 long 1 short
// 1024-1599 = smallDesktop //4 long 1 short
// 768-1023 = tablet // 2 shorts 2 long
// 401-767 = bigPhone // 2 shorts 1 long
// <400 = smallPhone //1 short 1 long

export const BREAKPOINTS = {
  bigDesktop: 1600,
  smallDesktop: 1024,
  tablet: 768,
  bigPhone: 401,
  // smallPhone: <400,
};

export const getScreenSize = async () => {
  const width = window.innerWidth;
  const { bigPhone, tablet, smallDesktop, bigDesktop } = BREAKPOINTS;

  console.log("WIDTH");
  console.log(width);

  if (width > bigDesktop) return "bigDesktop";
  if (width > smallDesktop) return "smallDesktop";
  if (width > tablet) return "tablet";
  if (width > bigPhone) return "bigPhone";
  return "smallPhone";
};

// Video size definitions
export const vidDimensions = {
  bigDesktop: {
    long: { width: "560", height: "315" },
    short: { width: "315", height: "560" },
  },

  smallDesktop: {
    long: { width: "560", height: "315" },
    short: { width: "315", height: "560" },
  },

  tablet: {
    long: { width: "500", height: "281" },
    short: { width: "250", height: "444" },
  },

  bigPhone: {
    long: { width: "350", height: "197" },
    short: { width: "200", height: "356" },
  },

  smallPhone: {
    long: { width: "410", height: "231" },
    short: { width: "300", height: "533" },
  },
};
