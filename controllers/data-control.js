import { getSocialsDataFS, getVidDataFS } from "../src/main-backend.js";

export const getSocialsDataControl = async (req, res) => {
  //could add parsing for number of vids
  const socialsData = await getSocialsDataFS();

  // console.log("SOCIALS DATA");
  // console.log(socialsData);

  res.json(socialsData);
};

export const getVidDataControl = async (req, res) => {
  //could add parsing for number of vids
  const vidData = await getVidDataFS();

  // console.log("VID DATA");
  // console.log(vidData);

  res.json(vidData);
};
