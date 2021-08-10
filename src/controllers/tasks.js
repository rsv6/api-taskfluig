
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

const post = async (req, res) => {
  console.log("Route /teste via POST accessed")
  const { fluig, descricao, status } = req.body

  console.log(`Fluig: ${fluig} - Descricao: ${descricao} - Status: ${status}`)
  return await res.json({ msg: `Fluig: ${fluig} - Descricao: ${descricao} - Status: ${status}`})
}
 
module.exports = {
  get,
  post
}