const db = require('../config/db')
// const sequelize = require('sequelize')

const Sequelize = db.sequelize

const tableInfo = Sequelize.import('../schema/tableInfo')

tableInfo.sync({force:false})

class TableInfoModel {
    static async addTableInfo(data){
        console.log(data,'data info')
        return await tableInfo.create({
            username:data.username,
            phone:data.phone,
            email:data.email,
            description:null
        })
    }

    static async getTableList(data){
        return await tableInfo.findAndCountAll({
            limit:data.pageSize,
            offset:data.pageSize * (data.page - 1)
        })
    }

    static async updataTableInfo(data){
        return await tableInfo.updata({
            phone:data.phone,
            email:data.email,
            username:username
        },{
            where:{
                id:data.id
            }
        })
    }
}

module.exports = TableInfoModel