const Router = require('koa-router')

const router = new Router({
  prefix:'/api'
})

const ArticleController = require('../controllers/article')
router.post('/article',ArticleController.create)
router.get('/article/:id',ArticleController.detail)

const LoginController = require('../controllers/login')
router.post('/login',LoginController.login)
router.post('/register',LoginController.create)

const tableInfoController = require('../controllers/table')
router.get('/tableInfo/list',tableInfoController.selectAll)
router.post('/tableInfo/add',tableInfoController.addInfo)
router.post('/tableInfo/updata',tableInfoController.updataInfo)

module.exports = router
