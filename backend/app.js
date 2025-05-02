const express = require('express')
const app = express()
const { students } = require('./database/connection')
app.use(express.json())

app.get("/students", async (req, res) => {
  const studentDatas = await students.findAll()
  res.json({
    message: "Student data sucessfully fetched",
    studentDatas,
  })
})

app.post("/students", async (req, res) => {
  console.log(req.body)
  const { rollNo, studentName, age, faculty, blockNum } = req.body

  await students.create({
    rollNo,
    studentName,
    age,
    faculty,
    blockNum
  })

  res.json({
    message: "Student data sucessfully sent"
  })
})

app.patch("/students/:id", (req, res) => {
  res.json({
    message: "Student data sucessfully updated"
  })
})

app.delete("/students/:id", (req, res) => {
  res.json({
    message: "Student data sucessfully delted from database"
  })
})

app.listen("3020", () => {
  console.log("system is listening at port 3020")
})