import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/index";

export default async (ctx, next) => {
  const token = ctx.get("token");
  if (token === "") {
    ctx.throw(401, "no auth");
  }
  try {
    await jsonwebtoken.verify(token, jwtConfig.verify);
  } catch (error) {
    ctx.throw(401, "invalid token");
  }
  await next();
};
