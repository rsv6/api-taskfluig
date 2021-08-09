const express = require('express')
const cors = require('cors')

module.exports = () => {
  const app = express()

  app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
  }))

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use(require('../src/routes'))

  app.listen(8081, console.log("Server running on port 8081"))

  return app
}