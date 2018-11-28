//小图片左右移动
var $left=$(".container>.row>.col-md-9>.row>.col-md-4>.d1>:first-child");
var $right=$(".container>.row>.col-md-9>.row>.col-md-4>.d1>:last-child");
var $ul=$(".container>.row>.col-md-9>.row>.col-md-4>.d1>:nth-child(2)");
if($ul.css("marginLeft","0")){
    $left.addClass("disabled")
}
var move=0;//记录已经左移的图片个数
$left.on("click",function(){
    if(!$left.is(".disabled")){
        move--;//已经左移的图片个数-1
        //ul的marginLeft始终等于:-li宽度62*左移图片个数
        $(".row>.col-md-4>.d1>ul").css("marginLeft",-64*move);
        $right.removeClass("disabled");}
        if(move==0)
           $left.addClass("disabled")
})
$right.on("click",function(){
    var $right=$(this);
    if(!$right.is(".disabled")){
        move++;//已经左移的图片个数+1
        $(".row>.col-md-4>.d1>ul").css("marginLeft",-64*move)
        //让左边按钮去掉disabled class
        $left.removeClass("disabled")
        /*if($ul.css("marginLeft","-128")){
            $right.addClass("disabled")
        }*/
    }
})
var ul=$left.nextAll()[0]
$("ul>li").on("mouseover",function(){
     var index=$(this).index();
     $(".pic1").eq(index).show().siblings().hide();
     $(".dd").eq(index).show().siblings().hide();
})
/////////////////////////
$(window).scroll(function(){
    //获取当前位置到窗口顶部的距离
    var hnum=$(window).scrollTop();
    if(hnum>585){//当前高度大于导航条到窗口顶部高度
        //切换固定后的类
        $("nav").addClass("fixed");
        $("#introduce").addClass("introduce11");
    }
    else{
        $("nav").removeClass("fixed");
        $("#introduce").removeClass("introduce11");
    }
})
$("table>tbody>:nth-child(2)>:first-child>:nth-child(3)").on("click",function(e){
    e.preventDefault(); 
    var a=$(this);
    var menu=$("#content");
    if(menu.is(":hidden"))
		menu.show()
			else
		menu.hide()
})
////////////////////////////////////////////////////////
var lgDiv=$("#large");
var index=$(this).index();
//var yy=$(".pic1").eq(index);
//lgDiv.style.backgroundImage=`url(yy)`;
//lgDiv.style.backgroundImage=`url(${pics[0].lg})`;
         // var $mImg=$(mImg),//中图片
          //$lgDiv=$(lgDiv),//大图片
          $mask=$("#mask"),//半透明遮罩
          $smask=$("#super-mask");//透明玻璃板
          var MSIZE=100,//mask的大小
          leftMAX=262-MSIZE;//left的最大值
          topMAX=196-MSIZE//top的最大值

      $smask
      .hover(
        function(){
          $mask.toggleClass("d-none");
          lgDiv.toggleClass("d-none");
        }
      )
      .mousemove(function(e){
        var left=e.offsetX-MSIZE/2;
        var top=e.offsetY-MSIZE/2;
        if(left<0) left=0; 
        else if(left>leftMAX) left=leftMAX;
        if(top<0) top=0;
        else if(top>topMAX) top=topMAX;
        $mask.css({left,top});
        
        $("#large>img").css("margin",
          `-${196/49*top}px -${262/62*left}px -${196/49*top}px -${262/62*left}px`)
      })   
$(".d1>ul>li").on("click","a",function(e){
    e.preventDefault();
    var a=$(this);
    var pic=a.html();
    $("#Center").css("display","block");
    $("#cont").css("display","block").html(pic);
    $(".direct_l").on("click",function(){
        var yy=$(".d1>ul>li>a>img").eq(index)
        console.log(yy) 
        console.log(yy.index());
        if(yy!=0){
        $("#cont").css("display","block").html(yy);}
        else{
            $(".direct_l").addClass("disabled");
        }
       
    })
    $(".direct_r").on("click",function(){
        var yy=$(".d1>ul>li>a>img").eq(index)
        console.log(yy)
        /*var bb=$(".d1>ul>li>a>img").index();
        console.log(bb)
        if($(".d1>ul>li>a>img").index()=0){
            $(".direct_r").addClass("disabled")
        }*/
        var vb=yy.siblings();
        console.log(vb)
        $("#cont").css("display","block").html(yy);
        //$(".dd").eq(index).show().siblings().hide();
    })
});
$(".Close").on("click",function(){
    $("#Center").css("display","none");
})
$(".connection").on("click",function(){
    $.ajax({
        url:"http://localhost:3000/login/isLogin",
        type:"get",
        dataType:"json",
        success:function(res){
           if(res.ok==0){
               alert("请先登录");
               $("#choiceWindow").slideDown(300);
               $("#x").on("click",function(){
                   $("#choiceWindow").slideUp(300);
                   $("#backGround").hide();//刷新重新执行验证是否登录
               })
               $("#backGround").show();
           }if(res.ok==1){alert("收藏成功")}
        }
    })
})








