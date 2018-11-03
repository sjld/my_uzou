const express=require("express");
const router=express.Router();
const pool =require("../pool");
const session = require('express-session');
router.post("/signin",(req,res)=>{//登录功能
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var sql="SELECT * FROM user WHERE uname=? and upwd=?";
    pool.query(sql,[uname,upwd],(err,result)=>{
       if(err) throw err;
       if(result.length>0){
           res.writeHead(200);
           var user=result[0];
           req.session.uid=user.uid
           res.write(JSON.stringify({
               ok:1,
               msg:"ok"
           }))
       }else{
           res.write(JSON.stringify({
               ok:0,
               msg:"用户名或者密码错误"
           }))
       }
       res.send();  
   })
})
router.get("/isLogin",(req,res)=>{
    res.writeHead(200);
    if(req.session.uid===undefined){
        res.write(JSON.stringify({
            ok:0
        }))
        res.end()
    }else{
        var uid=req.session.uid;
        var sql="SELECT * from user where uid=?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) console.log(err);
            var user=result[0];
            res.write(JSON.stringify({
                ok:1,
                uname:user.uname
            }))
            res.send()
        })
    }
})
router.get("/signout",(req,res)=>{
    req.session["uid"]=undefined;
    res.end();
})
router.get('/testuname',(req,res)=>{
        var uname=req.query.uname;
         var sql="select *from user where uname=?";
         pool.query(sql,[uname],(err,result)=>{
            if(err) throw err;
            if(result.length>0){res.send("1");}
            else{res.send("0");}
         });
});
router.post("/register",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var email=req.body.email;
     console.log(uname,upwd,email)
    var sql="insert into user (uname,upwd,email) value(?,?,?)"
    pool.query(sql,[uname,upwd,email],(err,result)=>{
        res.writeHead(200,{"Content-Type":"application/json;charset=utf-8"})
        console.log(result);  
        if(err) console.log(err)
        if(result.affectedRows>0){
           res.write(JSON.stringify({
               ok:1,
               msg:"注册成功"
           }))
        }
        res.end()      
    })  
})
    /* router.post('/register',(req,res)=>{
         var uname=req.body.uname;
         var upwd=req.body.upwd;
         var email=req.body.email;
         
         if(!uname){
           res.send("用户名不能为空");
           return;
         }
         if(!upwd){
           res.send("密码不能为空");
           return;
         }
         if(!email){
           res.send("邮箱不能为空");
           return;
         }
         var sql="insert into user values(null,?,?,null,null,null,?,null)";
         pool.query(sql,[uname,upwd,email],(err,result)=>{
            if(err) throw err;	  
            res.send("注册成功");
         });	
     });*/
module.exports=router;
