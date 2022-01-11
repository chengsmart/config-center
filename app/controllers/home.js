import Router from "koa-router";
import verify from "../middlewares/jwt";
// const UserModel = require("../model/user.js");

const home = new Router();

// home/list
home.get('/list',verify, async (ctx, next) => {
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