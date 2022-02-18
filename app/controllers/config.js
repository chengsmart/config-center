import Router from "koa-router";
import verify from "../middlewares/jwt";
import ConfigService from "../service/config";
const config = new Router();

// config/list
config.get("/list", verify, async (ctx, next) => {
  let { source } = ctx.query;
  console.log("source", source);
  let status;
  let body;
  try {
    const res = await ConfigService.queryConfig(source);
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

// /config
config.post("/", verify, async (ctx, next) => {
  let { key, source, state } = ctx.request.body;
  let status;
  let body;
  try {
    const res = await ConfigService.createConfig(key, source, state);
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

// /config
config.put("/", async (ctx, next) => {
  ctx.response.status = 200;
  ctx.response.body = "config";
  await next();
});

module.exports = config;
