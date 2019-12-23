const moment = require('moment')

module.exports = (sequelize,dataTypes) =>{
  return sequelize.define('article',{
    id:{
      type:dataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    title:{
      type:dataTypes.STRING,
      allowNull:false,
      field:'title'
    },
    author:{
      type:dataTypes.STRING,
      allowNull:false,
      field:'author'
    },
    content:{
      type:dataTypes.TEXT,
      allowNull:false,
      field:'content'
    },
    category:{
      type:dataTypes.TEXT,
      allowNull:false,
      field:'category'
    },
    createdAt:{
      type:dataTypes.DATE,
      get(){
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    updatedAt:{
      type:dataTypes.DATE,
      get(){
        return moment(this.getDataValue('updateAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  },{
    timestamps:false,
    freezeTableName: true
  })
}