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
auth.post("/", async (ctx, next) => {
  let { name, passwd } = ctx.request.body;
  let status;
  let body;
  try {
    const res = await AuthService.loginApi(name, passwd);
    status = 200;
    body = res;
  } catch (error) {
    status = 200;
    body = error;
    console.log("error", error);
  } finally {
    ctx.response.status = status;
    ctx.response.body = body;
    await next();
  }
});

module.exports = auth;
