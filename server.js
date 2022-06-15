import express from "express";
import axios from "axios";
import { siteModel } from "./models.js";
import { siteView } from "./views.js";

const app = express();
const port = 3007;

app.get("/", (req, res) => {
  res.send(siteView(siteModel));
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
