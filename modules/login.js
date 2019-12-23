const db = require('../config/db')
const sequelize = require('sequelize')

const Sequelize = db.sequelize

const $or = sequelize.Op.or

const Login = Sequelize.import('../schema/login.js')

Login.sync({force:false})

class LoginModel {
  static async createLogin(data){
    let users =  await Login.create({
      username:data.username,
      password:data.password,
      phone:data.phone,
      email:data.email
    })
    return users
  }

  static async checkUser(data){
    let userInfo = await Login.findAll({
      where:{
        [$or]:[
          {username:data.username},
          {phone:data.phone},
          {email:data.email}
        ]
      }
    })
    return userInfo
  }

  static async getUserInfo(username,password){
    return await Login.findAll({
      where:{
        password,
        [$or]:[
          {username},
          {phone:username},
          {email:username}
        ]
      }
    })
  }
}

module.exports = LoginModel