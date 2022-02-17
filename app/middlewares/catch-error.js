import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/index";
const catchError = () => {
  return async (ctx, next) => {
    return next().catch(async (err) => {
      let token = ctx.header.token;
      // let payload = await util.promisify(jsonwebtoken.verify)(jwtConfig.secret);
      const res = await jsonwebtoken.verify(token, jwtConfig.secret);

      console.log(token, res);
      console.log(err, err.status);
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
          resCode: 400001,
          msg: err.message,
          data: null,
        };
      } else {
        throw err;
      }
    });
  };
};
export default catchError;
