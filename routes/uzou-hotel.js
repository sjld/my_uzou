const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get('/u_hotel',(req,res)=>{
    var output={pageSize:5} 
   output.pno=req.query.pno;//几条数据
   var sql="select * from zhusu";
   pool.query(sql,[],(err,result)=>{ 
       var RES=result.slice(1)
       console.log(RES);
       if(err) console.log(err);
        output.count=RES.length;
        console.log(RES.length);
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*5,output.pno*5+5);
       res.writeHead(200,{
           "Content-Type":"application/json;charset=utf-8",
           "Access-Control-Allow-Origin":"*"
       })
       res.write(JSON.stringify(output));
       res.end();
   })
})
/*router.get('/page',(req,res)=>{
    var output={pageSize:5} 
   output.pno=req.query.pno;//几条数据
    var sql="select * from zhusu";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        output.count=result.length;//总记录数
        output.pageCount=Math.ceil(output.count/output.pageSize);//总页数
        output.products=result.slice(output.pno*5,output.pno*5+5);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8","Access-Control-Allow-origin":"*"
        })
        res.write(JSON.stringify(output))
        res.end()
    })

})*/
module.exports=router;