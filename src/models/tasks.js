const Sequelize = require('sequelize')
const connMySQL = require('../dao/conMYSQL')

const Tasks = connMySQL.define('tasks', {
  task: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
})

Tasks.sync({ force: false })
  .then(() => {})

module.exports = Tasks