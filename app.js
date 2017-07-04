const dbs = require('./config').dbs
let db = dbs.get('finance')
let User = require(`./model/User`)
let UserModel = new User(db).init()
let option = {skip:2, limit:1}
UserModel.find({}, {name:1}, option, function(err, result){
  console.log(result)
})