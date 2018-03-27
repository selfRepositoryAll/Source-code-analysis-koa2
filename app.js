const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const index = require('./routes/index');
const users = require('./routes/users')

app.keys = ['im a newer secret', 'i like turtle'];
//------- 和express 比较一下------------
const views = require('koa-views');
// 这个是执行静态资源文件
//express app.static() 可以在看一下
// 中间件
app.use(require('koa-static')(__dirname + '/public'))
//express app.use(express.static(path.resolve('./public)))
// 然后就要指定 在那里渲染
app.use(views(__dirname + '/views', {
  extension: 'jade'
}))

// converted
// views
// dispatch
app.use(async (ctx, next) => {
  console.log('222');
  ctx.cookies.set('name', 'tobi', { signed: true });
  ctx.cookies.set('age', 10);
  // context.req
  // console.log('yangchongduo');
  // console.log(ctx.req);
  // console.log(ctx.request);
  console.log(ctx.request.host);
  console.log('>>>>>>>>>>');
  // ctx.request.querystring
  // this.assert
  // 直接断言
  // ctx.assert(this.user, 401, 'Please login!');
  // 抛出错误
  // ctx.throw('name required', 400)

  await next()
})
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


/*
* app.set('view engine','html');
 //对html的模板按EJS的语法来进行渲染
 app.engine('html',require('ejs').__express);
 app.set('views',path.resolve('views'));
* */
//这个位置可以是  use 这是嵌套的可以
router.use('/index', index.routes(), index.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())
app.use(router.routes(), router.allowedMethods())
app.on('err', (err, ctx) => {
  console.log(err)
})
module.exports = app






























