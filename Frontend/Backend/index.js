const express = require('express')
const app = express()
const port = process.env.PORT||3003
require("./config/db")

const dotenv = require("dotenv");
const cors = require('cors')
const route=require("./router/router")
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
dotenv.config();
app.use("/",route)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})