$(function(){
    $(".c").on("click",function(){
        $(".country").hide();
        $(".city").hide()
        if($(".continent").is(":hidden"))
           {$(".continent").slideDown()
           $(".continent").on("click","span",function(){
               var span=$(this);
               var html1=span.html()
               $(".c").html(html1)
               $(".continent").slideUp()
               var html=$(".c").html()
               if(html=="欧洲"){
                   $(".country>.cont").empty().append("<span>瑞典</span><span>挪威</span><span>丹麦</span>")
               }
               else if(html=="北美洲"){
                $(".country>.cont").empty().append("<span>美国</span><span>加拿大</span>")
               }
               else if(html=="非洲"){
                $(".country>.cont").empty().append("<span>突尼斯</span><span>塞舌尔</span>")
               }
               else{$(".country>.cont").empty();}
           })
        }
		else
           $(".continent").slideUp()
        })
    $(".cou").on("click",function(){
        $(".continent").hide();
        $(".city").hide()
        if($(".country").is(":hidden"))
            {$(".country").slideDown()
            $(".country").on("click","span",function(){
                var span=$(this);
                var html=span.html()
                $(".cou").html(html)
                $(".country").slideUp()
                if(html=="美国"){
                    $(".city>.cont").empty().append("<span><a href='America.html'>费城</a></span><span>圣地亚哥</span><span>阿拉斯加</span><span>德克萨斯</span>")
                }
                else if(html=="加拿大"){
                    $(".city>.cont").empty().append("<span>魁北克</span>")
                }
                else{$("city>.cont").empty()}
            })
        }
        else
            $(".country").slideUp()
    })
    $(".cit").on("click",function(){
        $(".country").hide();
        $(".continent").hide()
    if($(".city").is(":hidden"))
        {$(".city").slideDown()
        $(".city").on("click","span",function(){
            var span=$(this);
            var html=span.html()
            $(".cit").html(html)
            $(".city").slideUp()
            
        })
    }
    else
        $(".city").slideUp()
    })
    $(".row>.col-3>div").on("mouseover","img",function(){
        $(this).css("width","130px").css("transition","0.8s").css("height","130px")
    })
    $(".row>.col-3").on("mouseout","div",function(){
        $(".row>.col-3>div>img").css("width","120px").css("height","120px")
    })
})



























