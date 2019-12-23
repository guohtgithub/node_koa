module.exports = (sequelize,dataTypes) => {
    return sequelize.define('tableInfo',{
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            allwoNull:false,
            autoIncrement:true
        },
        username:{
            type:dataTypes.STRING,
            allwoNull:false,
            field:'username'
        },
        phone:{
            type:dataTypes.STRING,
            allwoNull:false,
            field:'phone'
        },
        email:{
            type:dataTypes.STRING,
            allwoNull:false,
            field:'email'
        },
        description:{
            type:dataTypes.TEXT,
            allwoNull:false,
            field:'description'
        }
    },{
        timestamps:false,
        freezeTableName: true
    })
}