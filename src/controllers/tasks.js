
const Tasks = require('../models/tasks')

const get = async (req, res) => {

  await Tasks.findAll({
    raw: true,
    order: [
      ['createdAt', 'DESC']
    ]
  })
  .then(tasks => {
    console.log(tasks[0].createdAt)
    // tasks.map
    return res.status(200).json(tasks)
  })
  .catch(err => console.log("Erro ao ler banco de dados", err))
  
}

module.exports = {
  get,
}