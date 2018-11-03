$(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(4)").on("click",function(){
    $(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(2)").show();
    $("hr").hide();
    $(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(4)").hide()
    $(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(5)").show();
})
$(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(5)").on("click",function(){
    $(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(2)").hide();
    $("hr").show();
    $(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(4)").show();
    $(".uzou-hotel>.row>.col-lg-3>:nth-child(2)>:nth-child(5)").hide();
})
$(".uzou-hotel>.row>.col-lg-3>.bg-white>ul").on("click","li",function(){
    var li=$(this).html();
    $(".uzou-hotel>.row>.col-lg-3>span").html(li)
})
$(function(){
    var pno=0;
    function loadPage(no=0){
        pno=no;
    $.ajax({
        url:"http://localhost:3000/uhotel/u_hotel",
        type:"get",
        data:{pno},
        dataType:"json",
        success:function(res){
            console.log(res);
            //var Res=res.slice(1); 
            var {place,price,pic,details,zhus,foods,jies}=res;
            var html='';
            for(var p of res){
                html+=`<div class="block bg-white">
                <img src="${p.pic}" alt=""/>
                <div class="right">
                    <span class="price">¥${p.price}起</span><br>
                    <span class="place">${p.place}</span>
                    <p class="intr">${p.details}
                    </p>
                    <img src="img/uzou-english.png" alt=""/>
                    <img src="${p.zhus}" alt=""/>
                    <img src="${p.foods}" alt=""/>
                    <img src="${p.jies}" alt=""/>
                    <h6>卖家：Villa</h6>
                </div>
            </div>`
            }
           $(".blocka").html(html);
           var html="";
           for(var i=1;i<=pageCount;i++){
            html+=` <li class="text-muted small page-link ${i==pno+1?'active':''}">${i}</li>`
           }  
           var $ul=$("#Page>ul")
           if(pno==0){
            $ul.children().first().addClass("disabled")
          }else{
            $ul.children().first().removeClass("disabled")
          }
          if(pno==pageCount-1){
            $ul.children().last().addClass("disabled")
          }else{
            $ul.children().last().removeClass("disabled")
          }
        }
    })}
    loadPage();
})