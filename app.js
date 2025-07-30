//TO DO: GET THE THUMBNAIL LOADING / DISPLAY TO WORK

import express from "express";
import routes from "./routes/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes
app.use(routes);

app.listen(1863);
