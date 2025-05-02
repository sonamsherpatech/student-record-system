
// rollno, studentname, faculty, age, blockNum
const BookModel = function (sequelize, DataTypes) {
  return sequelize.define("book", {
    rollNo: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    studentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
    },
    faculty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blockNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
}

module.exports = BookModel