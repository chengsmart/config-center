import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/index";

export default async (ctx, next) => {
  const token = ctx.get("token");
  // if (!token) {
  //   console.log("no token");
  //   ctx.throw(401, "no auth");
  // }
  try {
    const res = await jsonwebtoken.verify(token, jwtConfig.secret);
  } catch (error) {
    ctx.status = 401;
    ctx.body = {
      resCode: 400001,
      msg: "token校验失败",
      data: null,
    };
    ctx.throw(401, "auth error");
  }

  await next();
};
