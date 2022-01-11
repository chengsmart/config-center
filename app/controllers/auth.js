import Router from "koa-router";
// const UserModel = require("../model/user.js");
import query from "../common/db";

const auth = new Router();
// /login/list
auth.get("/register", async (ctx, next) => {
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

// auth
auth.get("/", async (ctx, next) => {
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

module.exports = auth
