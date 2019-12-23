const loginModel = require('../modules/login')

class loginController {
  static async create(ctx){
    let req = ctx.request.body
    let checkUser = await loginModel.checkUser(req)
    if(checkUser.length === 1){
      ctx.response.status = 200
      ctx.body = {
        code:200,
        message:'用户已存在'
      }
    }else{
      let createUser = await loginModel.createLogin(req)
     
      ctx.response.status = 200
      if(createUser){
        ctx.body = {
          code:200,
          message:'用户创建成功',
        }
      }else{
        ctx.body = {
          code:200,
          message:'用户创建失败',
        }
      }
    }
  }

  static async login(ctx){
    let req = ctx.request.body
    let userLogin = await loginModel.getUserInfo(req.username,req.password)
    ctx.response.status = 200
    if(userLogin.length == 1 && (
      userLogin[0].phone == req.username ||
      userLogin[0].username == req.username || 
      userLogin[0].email == req.username)){
      ctx.body = {
        code:200,
        message:'登录成功'
      }
    }else{
      ctx.body = {
        code:200,
        message:'登录失败'
      }
    }
  }
}

module.exports = loginController