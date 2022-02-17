import Router from "koa-router";
import verify from "../middlewares/jwt";
import ConfigService from "../service/config";
const config = new Router();

// config/list
config.get("/list", verify, async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = "config-list";
  await next();
});

// /config
config.post("/", verify, async (ctx, next) => {
  console.log(ctx.request, "===");
  console.log(ctx.request.body);
  let { key, source } = ctx.request.body;
  let status;
  let body;
  try {
    const res = await ConfigService.createConfig(key, source);
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
  ctx.response.status = 200;
  ctx.response.body = "config";
  await next();
});

// /config
config.put("/", async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = "config";
  await next();
});

module.exports = config;
