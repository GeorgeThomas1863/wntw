import { getVidObjFS } from "../src/main.js";

export const getVidObjControl = async (req, res) => {
  //could add parsing for number of vids
  const vidObj = await getVidObjFS();
  console.log("VID OBJ");
  console.log(vidObj);
  res.json(vidObj);
};
