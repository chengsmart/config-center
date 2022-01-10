const Koa = require('koa');
const compose = require('koa-compose');
const koaBody = require('koa-body');
const cors = require('koa2-cors')

const MD = require('./middlewares/');
const utils = require('./common/utils.js');
const router = require('./router/index.js');

const app = new Koa();

const port = '8888'
const host = 'localhost'

app.use(compose(MD));
app.use(cors())
app.use(koaBody());
app.use(router.routes());
app.context.utils = utils;

app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`);
});

app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      code: 9999,
      message: `程序挂了啊···：${err.message}`
    };
  }
});

