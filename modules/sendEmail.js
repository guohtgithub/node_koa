const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service:'qq', // 运营商选择
  port:465,
  secure:true,
  auth:{
    user:'xxx@qq.com', // 发送方的邮箱
    pass:'myPwd' // 密码
  }
})

let mail = {
  transporter:transporter,
  send(mail,content,callback){
    let mailOptions = {
      from:'"Fred Foo ? " <xxx@qq.com>',
      to:mail,
      subject:'欢迎注册',
      text:`${content}`,
      html:`欢迎注册，验证码为：${content},有效期为五分钟`
    }

    this.transporter.sendMail(mailOptions,(error,info) => {
      if(error){
        callback(-1) // 失败
        return console.log(error)
      }

      console.log('message sent: %s',info.messageId)
      console.log('Preview URl: %s',nodemailer.getTestMessageUrl(info))
      callback(1)
    })
  }
}

module.exports = mail