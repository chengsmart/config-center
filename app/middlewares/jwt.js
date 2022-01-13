import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/index";

export default async (ctx, next) => {
  const token = ctx.get("token");
  console.log(token, "token");
  if (token === "") {
    console.log("no token");
    ctx.throw(401, "no auth");
  }
  try {
    await jsonwebtoken.verify(token, jwtConfig.secret);
  } catch (error) {
    ctx.throw(401, "invalid token");
  }
  await next();
};
