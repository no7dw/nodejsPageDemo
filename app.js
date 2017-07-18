const dbs = require('./config').dbs
let db = dbs.get('finance')
let User = require(`./model/User`)
let UserModel = new User(db).init()
let option = {skip:0, limit:1}

const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();

router.get('/h' ,  function(ctx, next) {
  ctx.body = 'hello world';
});

//
router.get('/user' , async function(ctx, next) {
  const ret = await UserModel.find({name: ctx.query.name}, {name:1}, option)
  ctx.body = ret
  next()
});

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000);

