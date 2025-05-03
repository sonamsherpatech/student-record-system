const { fetchStudents, postStudent, updateStudent, deleteStudent, fetchSingleStudent } = require("../controllers/studentController")

const route = require("express").Router()

route.route("/students").get(fetchStudents).post(postStudent)

route.route("/students/:id").patch(updateStudent).delete(deleteStudent).get(fetchSingleStudent)


module.exports = route