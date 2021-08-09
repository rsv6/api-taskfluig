const Sequelize = require('sequelize')

const { 
  HST_MYSQL,
  DTB_MYSQL, 
  USR_MYSQL, 
  PWD_MYSQL
} = process.env

// console.log(host)

const connection = new Sequelize(
	DTB_MYSQL,
	USR_MYSQL,
	PWD_MYSQL,
	{
		host: HST_MYSQL,
		dialect: 'mysql'
	}
)

module.exports = connection
