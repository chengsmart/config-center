import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/index";

export default async (ctx, next) => {
  const token = ctx.get("token");
  console.log(`token=${token}`);
  if (!token) {
    console.log("no token");
    // ctx.throw(401, "no auth");
  }
  try {
    const res = await jsonwebtoken.verify(token, jwtConfig.secret);
    console.log("verify=", res);
  } catch (error) {
    console.log("verify==", error);
    ctx.status = 401;
    ctx.body = {
      code: 0,
    };
    ctx.throw(401, "auth error");
  }
  try {
    await next();
  } catch (err) {
    console.log("catch=", err);
  }
};
