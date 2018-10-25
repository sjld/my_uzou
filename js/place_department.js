//小图片左右移动
//找到左边按钮-后退
var $left=$(".container:nth-child(4)").html();
console.log($left);






/*/小图片左右移动
var $ul=$(ul);
var $left=//找到左边按钮-后退按钮
    $("#preview>div>div.card-body>img:first")
//找到右边按钮-前进按钮
var $right=$left.nextAll().last()
//如果pics中图片总数<=4
if(pics.length<=4)
//为右边按钮添加disabled class
    $right.addClass("disabled")
var moved=0;//记录已经左移的图片个数
$left.on("click",function(){
    var $left=$(this);
    if(!$left.is(".disabled")){
        moved--;//已经左移的图片个数-1
        //ul的marginLeft始终等于:-li宽度62*左移图片个数
        $ul.css("marginLeft",-62*moved)//不用px
        $right.removeClass("disabled")
        if(moved==0)
            $left.addClass("disabled")
    }
})
$right.on("click",function(){
    var $right=$(this);
    if(!$right.is(".disabled")){
        moved++;//已经左移的图片个数+1
        $ul.css("marginLeft",-62*moved)
        //让左边按钮去掉disabled class
        $left.removeClass("disabled")
        //如果pics中的图片总个数-moved次数==4
        if(pics.length-moved==4)
        //为右边按钮加上disabled class
            $right.addClass("disabled")
    }
})*/
var test=false;
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
   










