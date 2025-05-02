const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL)


sequelize.authenticate()
  .then(() => {
    console.log("Sucessfully Connected")
  })
  .catch((err) => {
    console.log("Error in connection", err)
  })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.students = require("./models/student.model")(sequelize, DataTypes)

sequelize.sync({ alter: false })
  .then(() => console.log("Migration Sucessfull"))
  .catch((err) => console.log("Error in Migration : ", err))

module.exports = db