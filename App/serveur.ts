import { router } from "./router";

export const express = require("express");
const port = 4000;
const app = express();
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("listen on port ", +port);
});
