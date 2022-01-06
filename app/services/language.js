const axios = require("axios");
const getLangCode = async (ctx) => {
  // body 需要用query来接收参数
  // console.log(ctx.request.query)
const {languageId,version }= ctx.request.body;
  const res = await axios.post(
    "https://mobile.jtmm.ru/website/imLanguageSource/getListByCode",
    { languageId, version }
  );
  // console.log(res.data, "=123");

  // 业务错误调用统一错误处理
  // ctx.utils.assert('', ctx.utils.throwError(10001, '验证码失效'))

  console.log(ctx.request.body, "=cnm");

  ctx.body = res.data.data;
};
const getLangCodeZh = async (ctx) => {
  // body 需要用query来接收参数
  // console.log(ctx.request.query)

  const res = await axios.post(
    "https://mobile.jtmm.ru/website/imLanguageSource/getListByCode",
    { languageId: "zh-CN", version: '' }
  );
  console.log(res.data, "=123");

  // 业务错误调用统一错误处理
  // ctx.utils.assert('', ctx.utils.throwError(10001, '验证码失效'))

  console.log(ctx.request.body, "=cnm");

  ctx.body = res.data;
};

module.exports = {
  getLangCode,
  getLangCodeZh,
};
