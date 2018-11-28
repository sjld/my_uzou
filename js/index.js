function imglb(){
    var img=slider.querySelector(".show")
    img.className="";
    var next=img.nextElementSibling;
    if(next!=null)
      next.className="show";
    else
      img.parentNode.children[0].className="show"
  }
  var timer=setInterval(imglb,1000)
    //鼠标移入停止 引出继续
   /*slider.onmouseover=function(){
      clearInterval(timer)
    }
    slider.onmouseout=function(){
      timer=setInterval(imglb(),1000)
    }*/
  /*var ul=$(".content>ul.tabs");
  $(ul).on("click","li",function(e){
     var $a=$(e.target);
     if($a.is("a")){
       $a.parent().addClass("active").siblings().removeClass("active")
     }
  })*/
$(".tabs li").click(
  function(e){
    $(this).addClass("on").siblings().removeClass("on")
    var index=$(this).index()//获取索引值
    $("#introduce_body>div").eq(index).fadeIn().siblings().fadeOut()
  }
)
$(function(){
  $.ajax({
    url:"http://localhost:3000/index/gettotal",
    type:"get",
    dataType:"json",//ajax可自动将json转为obj
    success:function(res){
      // var {pic}=res;
      var html=`
      <div id="floor_left">
        <a href="uzou-hotel.html"><img src="${res[0].pic}" alt=""></a>
      </div>
      <div id="floor_right">
        <div id="floor_right1">
          <a href=""><img src="${res[1].pic}"></a>
          <a href=""><img src="${res[2].pic}"></a>
          <a href=""><img src="${res[3].pic}"></a>
        </div>
        <div id="floor_right2">
          <a href=""><img src="${res[4].pic}"></a>
          <a href=""><img src="${res[5].pic}"></a>
          <a href="place_department.html"><img src="${res[6].pic}"></a>
          <a href=""><img src="${res[7].pic}"></a>
        </div>
      </div>`
    var divCard=document.querySelector("#content2");
    divCard.innerHTML=html;  
    }
  })
})
$(function(){
  $.ajax({
    url:"http://localhost:3000/index/busU",
    type:"get",
    dataType:"json",//ajax可自动将json转为obj
    success:function(res){
      //var {pic}=res;
      var html=`
      <div id="floor_left">
        <img src="${res[0].pic}" alt="">
      </div>
      <div id="floor_right">
        <div id="floor_right1">
          <a href=""><img src="${res[1].pic}"></a>
          <a href=""><img src="${res[2].pic}"></a>
          <a href=""><img src="${res[3].pic}"></a>
        </div>
        <div id="floor_right2">
          <a href=""><img src="${res[4].pic}"></a>
          <a href=""><img src="${res[5].pic}"></a>
          <a href=""><img src="${res[6].pic}"></a>
          <a href=""><img src="${res[7].pic}"></a>
        </div>
      </div>`
    var divCard=document.querySelector("#content3");
    divCard.innerHTML=html;  
    }
  })
})

















