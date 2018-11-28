const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get('/franch',(req,res)=>{
    var sql="SELECT pic,price ,title, subtitle,sale,country,jies,zhus from franch";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
router.get('/order',(req,res)=>{
    var sql ="SELECT pic,price ,title, subtitle,sale,country,jies,zhus from franch order by price";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
router.get('/search',(req,res)=>{
    var text=req.query.text
    var sql=`select * from franch where title like '%${text}%'`;
    console.log(text)
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        console.log(result);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result));
        res.end();
    })
})
module.exports=router;