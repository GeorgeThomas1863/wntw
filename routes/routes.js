import express from "express";

import { indexDisplay, otherDisplay, trollDisplay, display404, display500 } from "../controllers/display-control.js";
import { getVidObjControl } from "../controllers/data-control.js";

const router = express.Router();

router.get("/api/vid-data", getVidObjControl);

router.get("/", indexDisplay);

router.use("/other", otherDisplay);

router.use("/world-news/pope-leo-to-visit-turkey-maybe-usa-too", trollDisplay);

router.use(display404);

router.use(display500);

export default router;
