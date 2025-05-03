const { students } = require("../database/connection")

exports.fetchStudents = async (req, res) => {
  const studentDatas = await students.findAll()
  res.json({
    message: "Student data sucessfully fetched",
    studentDatas,
  })
}

exports.postStudent = async (req, res) => {
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
}

exports.updateStudent = (req, res) => {
  res.json({
    message: "Student data sucessfully updated"
  })
}

exports.deleteStudent = (req, res) => {
  res.json({
    message: "Student data sucessfully delted from database"
  })
}

exports.fetchSingleStudent = async (req, res) => {
  const id = req.params.id

  const studentData = await students.findByPk(id)

  res.json({
    message: "Successfully fetched single student",
    studentData
  })
}