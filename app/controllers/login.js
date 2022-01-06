const Router = require('koa-router')
const login = new Router()

// /login/list
login.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'login-list'
    await next()
})

// login
login.get('/', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = 'login'
  await next()
})

module.exports = login