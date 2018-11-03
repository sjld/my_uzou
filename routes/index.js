const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/gettotal",(req,res)=>{
    var sql="SELECT pic FROM  zhusu";
    pool.query(sql,[],(err,result)=>{
      if(err) console.log(err);
      //res.send(result);
      res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
      })
      res.write(JSON.stringify(result));
      res.end();
    })
  })
router.get("/busU",(req,res)=>{
  var sql="SELECT pic FROM  bashiyou";
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    //res.send(result);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(result));
    res.end();
  })
})
module.exports=router;