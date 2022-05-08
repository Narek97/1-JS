// Node.js y MySql i het kapelu hamar
const Secuelize = require('sequelize')

// db stextat bazayi anuny
const DB_NAME = 'node-todo'
const USER_NAME = 'root'
// MySqli met paroly
const PASSWORD = 'MySql2020'

const sequelize = new Secuelize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize