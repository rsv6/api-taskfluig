const conJSON = require('../dao/conJSON')

const get = (req, res) => {
  console.log("Route acceded /teste GET")
  return res.json(conJSON)
}

module.exports = {
  get,
}