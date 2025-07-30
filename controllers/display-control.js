import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const indexDisplay = async (req, res) => {
  res.sendFile(path.join(__dirname, "../html/index.html"));
};

export const otherDisplay = (req, res) => {
  res.sendFile(path.join(__dirname, "../html/other.html"));
};

export const trollDisplay = (req, res) => {
  res.sendFile(path.join(__dirname, "../html/troll.html"));
};

export const display404 = (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../html/404.html"));
};

export const display500 = (error, req, res, next) => {
  console.log(error);
  res.status(500).sendFile(path.join(__dirname, "../html/500.html"));
};
