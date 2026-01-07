// 创建所有跟账号有关的接口
const Router = require('koa-router');
const {login} = require('../controllers/authController.js')  // {login: fn}

const router = new Router({
    prefix: '/api/auth'  // 所有接口都以 /api/auth 开头(路由前缀)
});

router.post('/login', login);

module.exports = router