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

module.exports = router
