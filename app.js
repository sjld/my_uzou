const express=require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const index=require('./routes/index')
var app=express();
app.listen(3000,()=>{
   console.log('服务器构建成功');
});
const bodyparser=require('body-parser');
app.use(express.static('./public'));
app.use(bodyparser.urlencoded({
  extended:false
}));
app.use("/index",index);


