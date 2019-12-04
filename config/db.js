const Sequelize = require('sequelize')

const sequelize = new Sequelize('koadb','root','123456',{
  host:'localhost',
  dialect:'mysql',
  operatorsAliases:false,
  dialectOptions:{
    charset:'utf8mb4',
    collate:'utf8mb4_unicode_ci',
    supportBigNumbers:true,
    bigNumberStrings:true
  },
  pool:{
    max:5,
    min:0,
    acquire:30000,
    adle:10000
  },
  timezone:'+08:00'
})

module.exports = {sequelize}