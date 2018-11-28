const express=require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const index=require('./routes/index')
const uhotel=require('./routes/uzou-hotel')
const login=require("./routes/login");
const franch=require("./routes/franch");
const placedepartment=require("./routes/place_department")
var app=express();
app.listen(3000,()=>{
   console.log('服务器构建成功');
});
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(session({
  secret: '128位随机字符串',
  resave: false,
  saveUninitialized: true,
}))
app.use("/index",index);
app.use("/uhotel",uhotel);
app.use("/placedepartment",placedepartment);
app.use("/login",login);
app.use("/franch",franch);


