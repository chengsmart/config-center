const koaRouter = require('koa-router');
const fs = require('fs');
const router = new koaRouter({
  prefix: '/api', // 统一前缀，接口全部为 /api/xxx 格式
});


// 其他页面通过 router 加载
let controllers = fs.readdirSync(__dirname + '/../controllers')
controllers.forEach((element) => {
  let module = require(__dirname + '/../controllers/' + element)
  // 禁用 module.allowedMethods()，保证/的正确匹配
  router.use('/' + element.replace('.js', ''), module.routes())
})


module.exports = router;
