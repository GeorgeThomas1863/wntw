import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getVidObjFS = async () => {
  const vidObj = fs.readFileSync(join(__dirname, "../data/vid-data.json"), "utf8");
  return vidObj;
};
