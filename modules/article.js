const db = require('../config/db')

const Sequelize = db.sequelize

const Article = Sequelize.import('../schema/article.js')

Article.sync({force:false})

class ArticleModel {
  static async createArticle(data){
    return await Article.create({
      title:data.title,
      author:data.author,
      content:data.content,
      category:data.category
    })
  }

  static async getArticleDetail(id){
    return await Article.findOne({
      where:{id}
    })
  }
}

module.exports = ArticleModel