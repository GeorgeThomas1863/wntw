import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//json parse needed to correctly return as json rather than string
export const getSocialsDataFS = async () => {
  const socialsData = fs.readFileSync(join(__dirname, "../data/socials-data.json"), "utf8");
  return JSON.parse(socialsData);
};

export const getVidDataFS = async () => {
  const vidData = fs.readFileSync(join(__dirname, "../data/vid-data.json"), "utf8");
  return JSON.parse(vidData);
};
