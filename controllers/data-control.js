import { getSocialsDataFS, getVidDataFS } from "../src/main-backend.js";

export const getSocialsDataControl = async (req, res) => {
  //could add parsing for number of vids
  const socialsData = await getSocialsDataFS();

  res.json(socialsData);
};

export const getVidDataControl = async (req, res) => {
  //could add parsing for number of vids
  const vidData = await getVidDataFS();

  res.json(vidData);
};
