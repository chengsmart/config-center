import Router from "koa-router";
const config = new Router()


// config/list
config.get('/list', async (ctx, next) => {
    ctx.response.status = 200
    ctx.response.body = 'config-list'
    await next()
})

// /config
config.get('/', async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = 'config'
  await next()
})

module.exports = config