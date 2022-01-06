const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');


/**
 * 引入自定义文件
 */
const router = require('../router');
const response = require('./response');
const error = require('./error');

/**
 * 由于koa接收到的post请求参数并不是json格式，我们需要将其转换为json
 * 参数解析
 */
const mdKoaBody = bodyParser();

/**
 * 统一返回格式
 */
const mdResHandler = response();
 
 /**
  * 错误处理
  */
const mdErrorHandler = error();

/**
 * 路由处理
 */
const mdRoute = router.routes();

/**
 * koa-router中间件，主要用于 405 Method Not Allowed 这个状态码相关
 * 如果不加这个中间件，如果接口是get请求，而前端使用post请求，会返回 404 状态码，接口未定义。
 * 如果加了这个中间件，这种情况时，会返回405 Method Not Allowed ，提示 request method 不匹配
 * 并在响应头返回接口支持的请求方法，更有利于调试
 * 现在是全局应用，也可以局部应用，但是局部应用就失去了意义，建议全局应用
 */ 
 const mdRouterAllowed = router.allowedMethods();


 /**
 * 跨域处理
 */
const mdCors = cors({
  origin: '*',
  credentials: true,
  allowMethods: [ 'GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH' ]
});

module.exports = [
  mdKoaBody,
  mdResHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed
];
