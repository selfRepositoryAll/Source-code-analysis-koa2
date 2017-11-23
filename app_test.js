const Koa=require('koa')
const app=new Koa()
const router=require('koa-router')()// 生成一个 router的实例
const convert=require('koa-convert')//主要是为了能够实现 中间件是gererator的写法
const  logger =require('koa-logger')
const bodyParse=require('koa-bodyparser')
app.use(convert(bodyParse()))
app.use(convert(logger()))
//app.use(convert());// react 中的那个logger 也是需要执行的 因为他有三个
const index=require('./routes/index')
const users=require('./routes/users')
app.use(async (ctx,next)=>{
    console.log('ctx')
    next()
    console.log('--------------')
})
app.use(async (ctx,next)=>{
    console.log('我因为没有next','background:red;color:#fff');
})
router.use('/',index.routes(),index.allowedMethods())
router.use('/user',users.routes(),users.allowedMethods())
app.use(router.routes(),router.allowedMethods())
module.exports=app