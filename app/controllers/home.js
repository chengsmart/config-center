const Router = require('koa-router')
const home = new Router()

// home/list
home.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'home-list'
    await next()
})
// /home
home.get('/', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'home'
    await next()
})


module.exports = home