
module.exports = require('express')
  .Router()
    .get('/teste', require('../controllers/apiTest').get)