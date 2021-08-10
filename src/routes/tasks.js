
module.exports = require('express')
  .Router()
    .get('/teste', require('../controllers/tasks').get)
    .post('/teste', require('../controllers/tasks').post)