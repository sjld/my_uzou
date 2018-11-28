$(function(){
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
               if(move==2)
               $right.addClass("disabled")
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
    $("ul>li").on("mouseover",function(){
        var index=$(this).index();
        $(".pic1").eq(index).show().siblings().hide();
        $(".dd").eq(index).show().siblings().hide();
   })   
   $("#adult>:nth-child(3)").on("click",function(){
      var n= $("#adult>:nth-child(2)").html()  
         if(n>=0){
             n++
            $("#adult>:nth-child(2)").html(n)  
         }
   })
   $("#adult>:nth-child(4)").on("click",function(){
    var n= $("#adult>:nth-child(2)").html()  
       if(n>0){
           n--
          $("#adult>:nth-child(2)").html(n)  
       }
   })
   $('#DD').calendar({
    trigger: '.Date',
    zIndex: 999,
    format: 'yyyy-mm-dd',
    onSelected: function (view, date, data) {
        console.log('event: onSelected')
    },
    onClose: function (view, date, data) {
        console.log('event: onClose')
        console.log('view:' + view)
        console.log('date:' + date)
        console.log('data:' + (data || 'None'));
    }
    });
    $(".aa").on("click",function(e){
        e.preventDefault();
        if($("#adult>:nth-child(2)").html()==0){
            alert("请选择出发日期和人数")
        }else{
            $.ajax({
                url:"http://localhost:3000/login/isLogin",
                type:"get",
                dataType:"json",
                success: function(res) {
                    if(res.ok==0){
                        alert("请先登录");
                        $("#choiceWindow").slideDown(300);
                        $("#x").on("click",function(){
                            $("#choiceWindow").slideUp(300);
                            $("#backGround").hide();//刷新重新执行验证是否登录
                        })
                        $("#backGround").show();
                    }else{"预定成功，请在个人中心完善身份信息并提交订单"}
                }
            })
        }
    })
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
})