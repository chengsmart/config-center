const Router = require("koa-router");
const login = new Router();
// const UserModel = require("../model/user.js");
const query = require('../common/db.js');


// /login/list
login.get("/list", async (ctx, next) => {
  /* 使用 */
  const sql ='SELECT * FROM t_user'
const list  = await query(sql);
 
  ctx.response.status = 200;
  ctx.response.body = {
    resCode:0,
    msg:'',
    resData:list
  };
  await next();
});

// login
login.get("/", async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = "login";
  await next();
});

module.exports = login;
