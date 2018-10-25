const express=require('express');
var router=express.Router();
var pool=require('../pool.js')
router.post('/login',(req,res)=>{
    var $uname=req.body.uname;	
	/*console.log($uname);*/
	var $upwd=req.body.upwd;
	if(!$uname){
	  res.send("用户名不能为空");
	  return;
	}
	if(!$upwd){
	  res.send("密码不能为空");
	  return;
	 }
	 var sql='select *from user where uname=? and upwd=?';
	 pool.query(sql,[$uname,$upwd],(err,result)=>{
		 if(err) throw err;
		 console.log(result);
		 if(result.length>0){
		    res.send('登录成功');
		 }
		 else{
		   res.send('登录失败');
		 }
	    /*if($uname==result[0].uname&&$upwd==result[0].upwd){res.send("登录成功");}
		else{res.send("用户名和密码错误");}*/
	 })
});

router.get('/testuname',(req,res)=>{
   var $uname=req.query.uname;
   if(!$uname){
      res.send("用户名不能为空");
	  return;
   }
	var sql="select *from user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
	   if(err) throw err;
	   if(result.length>0){res.send("1");}
	   else{res.send("0");}
	});
});
router.post('/register',(req,res)=>{
    var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
    
	if(!$uname){
	  res.send("用户名不能为空");
	  return;
	}
	if(!$upwd){
	  res.send("密码不能为空");
	  return;
	}
	if(!$email){
	  res.send("邮箱不能为空");
	  return;
	}
	var sql="insert into user values(null,?,?,null,null,null,?,null)";
	pool.query(sql,[$uname,$upwd,$email],(err,result)=>{
	   if(err) throw err;	  
	   res.send("注册成功");
	});	
});
module.exports=router;
