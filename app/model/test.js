const axios = require('axios')
const add = async ctx => {

  // body 需要用query来接收参数
  // console.log(ctx.request.query)
  
  const res = await axios.get("https://www.baidu.com")
  console.log(res.data, '=123')

  // 业务错误调用统一错误处理
  // ctx.utils.assert('', ctx.utils.throwError(10001, '验证码失效'))

  console.log(ctx.request.body, '=cnm')

  ctx.body = ctx.request.body
}

module.exports = {
  add
}