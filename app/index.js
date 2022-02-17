import Koa from "koa";
import compose from "koa-compose";
import cors from "koa2-cors";
import kjerror from "koa-json-error";

import MD from "./middlewares/index";
import utils from "./common/utils";
import router from "./router/index";

const app = new Koa();

const port = "8888";
const host = "localhost";

app.use(
  kjerror((err) => {
    return {
      ...err,
      // status: err.status,
      // message: err.message,
      // data: err.resData,
    };
  })
);
app.use(compose(MD));
// app.use(
//   cors({
//     origin: function (ctx) {
//       //设置允许来自指定域名请求
//       // if (ctx.url === "/test") {
//       //   return "*"; // 允许来自所有域名请求
//       // }
//       return "*"; //只允许http://localhost:8080这个域名的请求
//     },
//     maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//     credentials: true, //是否允许发送Cookie
//     // allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //设置所允许的HTTP请求方法
//     // allowHeaders: ["Content-Type", "Authorization", "Accept"], //设置服务器支持的所有头信息字段
//     // exposeHeaders: ["WWW-Authenticate", "Server-Authorization"], //设置获取其他自定义字段
//   })
// );
// app.use(router.routes());
app.context.utils = utils;

app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`);
});

// app.on("error", (err, ctx) => {
//   if (ctx) {
//     ctx.body = {
//       code: 9999,
//       message: `程序挂了啊···：${err.message}`,
//     };
//   }
// });
