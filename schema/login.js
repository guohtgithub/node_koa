module.exports = (sequelize,dataTypes) => {
  return sequelize.define('user',{
    id:{
      type:dataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    username:{
      type:dataTypes.STRING,
      allowNull:false,
      field:'username'
    },
    password:{
      type:dataTypes.STRING,
      allowNull:false,
      field:'password'
    },
    phone:{
      type:dataTypes.STRING,
      allowNull:false,
      field:'phone'
    },
    email:{
      type:dataTypes.STRING,
      allowNull:false,
      field:'email'
    }
  },{
    timestamps:false,
    freezeTableName: true
  })
}