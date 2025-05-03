const express = require('express')
const app = express()

const studentRoute = require('./routes/studentRoute')
require('./database/connection')
app.use(express.json())

app.use("", studentRoute)

app.listen("3020", () => {
  console.log("system is listening at port 3020")
})