const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const authRoutes = require('./routes/authRoutes.js'); 

const app = new Koa();

// 测试接口
const router = new Router({
    prefix: '/api'  // 所有接口都以 /api 开头(路由前缀)
});
router.get('/test', (ctx) => {
    ctx.body = {
        status: 'ok',
        message: 'koa backend is running'
    }
})

app
    .use(bodyParser())  // 先让 koa 拥有解析参数的能力
    .use(router.routes(), router.allowedMethods())
    .use(authRoutes.routes(), authRoutes.allowedMethods())

app.listen(3000, () => {
    console.log('server is running on port 3000');
})