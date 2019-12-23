const tableList = require('../modules/tableInfo')

class tableInfoController {
    static async selectAll(ctx){
        let params = JSON.parse(ctx.query.params)

        let data = {
            page:params.page,
            pageSize:params.pageSize
        }
        if(data){
            try{
                console.log(data,'data  param')
                let dataInfo = await tableList.getTableList(data)
                console.log(dataInfo,'data info list')
                ctx.response.status = 200
                ctx.body = {
                    code:200,
                    message:'查询成功',
                    data:dataInfo
                }
            }catch(err){
                ctx.response.status = 412
                ctx.body = {
                    code:200,
                    message:'查询失败',
                    data:err
                }
            }
        }else{
            ctx.response.status = 416
            ctx.body = {
                code:200,
                message:'参数不全'
            }
        }
        
    }

    static async addInfo(ctx){
        let req = ctx.request.body
        let data = {
            username:req.username,
            email:req.email,
            phone:req.phone
        }

        if(data){
            try{
                let dataAdd = await tableList.addTableInfo(data)
                ctx.response.statua = 200
                ctx.body = {
                    code:200,
                    message:'新增成功',
                    data:dataAdd
                }
            }catch(err){
                ctx.response.statua = 416
                ctx.body = {
                    code:200,
                    message:'查询失败',
                    data:err
                }
            }
        }else{
            ctx.response.status = 416
            ctx.body = {
                code:200,
                message:'参数不全'
            }
        }
    }

    static async updataInfo(ctx){
        let req = ctx.request.body
        let dataParam = {
            id:req.id,
            username:req.username,
            email:req.email,
            phone:req.phone
        }

        if(data){
            try{
                let dataUpdata = await tableList.updataTableInfo(dataParam)
                ctx.response.status = 200
                ctx.body = {
                    code:200,
                    message:'更新成功',
                    data:dataUpdata
                }
            }catch(err){
                ctx.response.status = 412
                ctx.body = {
                    code:200,
                    message:'更新失败'
                }
            }
        }else{
            ctx.response.status = 416
            ctx.body = {
                code:200,
                message:'参数不全'
            }
        }
    }
}

module.exports = tableInfoController