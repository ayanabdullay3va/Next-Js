
const express = require('express')
const app = express()
const port = process.env.PORT||3003
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
console.log(process.env.PORT)
require("./config/db")
app.use(bodyParser.json())
const router=require("./router/router")
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use("/",router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})