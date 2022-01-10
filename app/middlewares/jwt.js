const jsonwebtoken = require('jsonwebtoken');
const jwtConfig = require("../config/index");

module.exports =  async (ctx, next) => {
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
