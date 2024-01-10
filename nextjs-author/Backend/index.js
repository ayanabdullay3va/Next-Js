const express = require("express");
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./src/route/router");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/", userRouter); // new


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});