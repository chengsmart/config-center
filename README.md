# Config Center

基于 node koa 搭建的项目

## 项目启动

```bash
node app/index.js # 本地开发环境，运行dev2接口，不运行前端监控 (本地开发建议启动该环境)
```

## 项目结构

app
├── common // 工具类
│   ├── utils // 目前只挂载了一个业务错误统一提示

├── controllers // 目前没有做单独的 service 处理业务代码逻辑
│   ├── index // 统一出口导出  
 │   └── test // 单独接口类似 action 及 service 处理业务

├── middlewares // 统一进行整理为了让入口不显得那么冗余
│   ├── error // 错误统一提示  
 │   ├── index // 整体入口 整合提示及路由及自定义配置
│   └── response // 统一接口返回处理

├── log // 日志模块 目前还没有，后续加上
│   ├── index // 错误统一提示

├── router  
 │   ├── index // 活动配置相关页面 活动页 大转盘 直播等
│   ├── routes // 主包目录 只包含 首页 分类 购物车 和 个人中心
└── index.js // 项目入口， 启动项
