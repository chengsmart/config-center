import Router from "koa-router";
// const UserModel = require("../model/user.js");
import query from "../common/db";

const login = new Router();
// /login/list
login.get("/list", async (ctx, next) => {
  /* 使用 */
  const sql = "SELECT * FROM t_user";
  const list = await query(sql);

  ctx.response.status = 200;
  ctx.response.body = {
    resCode: 0,
    msg: "",
    resData: list,
  };
  await next();
});

// login
login.get("/", async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = "login";
  await next();
});

module.exports = login
