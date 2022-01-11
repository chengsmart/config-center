const response = () => {
  return async (ctx, next) => {
    ctx.res.fail = ({ code, data, msg }) => {
      ctx.body = {
        code,
        data,
        msg,
      };
    };

    ctx.res.success = msg => {
      ctx.body = {
        code: 200,
        data: ctx.body,
        msg: msg || 'success',
      };
    };

    await next();
  };
};

export default response;
