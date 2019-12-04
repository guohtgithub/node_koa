class Resolve {
  success(msg='success',errorCode=0,code=200){
    return{
      msg,
      code,
      errorCode
    }
  }

  json(data,msg='success',errorCode=0,code=200){
    return{
      code,
      data,
      errorCode,
      msg
    }
  }
}
module.exports = {
  Resolve
}