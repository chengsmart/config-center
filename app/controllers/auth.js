import Router from "koa-router";
// const UserModel = require("../model/user.js");
import AuthService from "../service/auth";

const auth = new Router();
// /login/list
auth.get("/register", async (ctx, next) => {
  /* 使用 */
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
  const body = await AuthService.loginApi('chengshuai','111111')

  ctx.response.status = 200;
  ctx.response.body = body;
  await next();
});

module.exports = auth
