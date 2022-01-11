import Koa from 'koa';
import compose from 'koa-compose';
import koaBody from 'koa-body';
import cors from 'koa2-cors';

import MD from './middlewares/index';
import utils from './common/utils';
import router from './router/index';

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

