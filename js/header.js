$(function(){
    $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
    //使ajax请求
    $.ajax({
        url:"http://localhost:3000/header.html",
        type:"get",
        success:function(res){
            $("#header").replaceWith(res);
            $.ajax({
                url:"http://localhost:3000/login/islogin",
                type:"get",
                dataType:"json",
                success:function(res){
                  if(res.ok==1){   
                      $("#signin").show().css("margin-left","-55px");
                      $("#uname").html(res.uname);
                      $("#SPAN").html(res.uname)
                      $("#signout").show();
                      $("#login").hide();
                      $("#image").show();
                    }
                  $("#signout").click(function(){
                    $.ajax({
                      url:"http://localhost:3000/login/signout",
                      type:"get",
                      success:function(){
                        location.reload();
                      }
                    })
                  })
                }
              })  
            $("#login").on("click",function(){
                $("#choiceWindow").slideDown(300);
                $("#backGround").show();
                $(".btn_login").on("click",(function(){
                    var uname=$("#Login>.Login>form>:first-child>input").val(); 
                    var upwd=$("#Login>.Login>form>:nth-child(2)>input").val();
                    $.ajax({
                        url:"http://localhost:3000/login/signin",
                        data:{uname,upwd},
                        type:"post",
                        dataType:"json",
                        success:function(res){
                            if(res.ok==1){
                                alert("登录成功！")
                            }else{
                                alert("用户名或密码错误!")
                            }
                            location.reload();
                        }
                    })  
                }))
                $("#uName").on("blur",function(){
                    var uname=$("#uName").val();
                    if(uname.length<2||uname.length>8){
                        alert("用户名必须2~8")
                    }else{
                    $.ajax({
                        url:"http://localhost:3000/login/testuname",
                        type:"get",
                        data:{uname},
                        dataType:"json",
                        success:function(res){
                            if(res==1){
                              $("#uname-msg").html("用户名已存在") 
                            }
                            if(res==0){
                                $("#uname-msg").html("用户名可用")
                            }
                        }
                    })
                }
                })
                $(".pwd>button").on("click",function(){
                    var uname=$("#uName").val()
                    var upwd=$("#uPwd").val()
                    var email=$("#Email").val()
                    var reupwd=$("#reupwd").val()
                    var reg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                    var ok=reg.test(email);
                    if(!ok){
                        alert("请输入正确的邮箱")
                    }else if(upwd.length<4||upwd.length>10){
                        alert("密码必须4~10")
                    }else if(upwd!=reupwd){
                        alert("请保持密码一致")
                    }else if(!$(".pwd>:checkbox").is(":checked")){
                        alert("请阅读悠走条款")
                    }
                    else{
                    $.ajax({
                        url:"http://localhost:3000/login/register",
                        type:"post",
                        data:{uname,upwd,email},
                        dataType:"json",
                        success:function(res){
                            if(res.ok==1)alert(res.msg);
                            location.reload();
                        },
                       
                    })
                }
                }) 
                $("#x").on("click",function(){
                    $("#choiceWindow").slideUp(300);
                    $("#backGround").hide();//刷新重新执行验证是否登录
                })
                $("#Login>.Login>.floor1>span>a").on("click",function(){
                    $("#Login").hide();
                    $("#Reg").show();
                })
                $("#Reg>.Login>.floor1>span>a").on("click",function(){
                    $("#Login").show();
                    $("#Reg").hide();
                })
            })
            $(".help>:first-child").on("focus",function(){
                $("#place").show();
                $("table a").on("click",function(){
                    var a=$(this).html();
                    $(".help input").val(a); 
                    $("#place").hide();
                    
                })
            })          
            $("#search").click(function(){    
                var text=$(".help>input").val(); 
                if($.trim(text)!=""){
                    //console.log(text)
                    $.ajax({
                        url:"http://localhost:3000/franch/search",
                        type:"get",
                        data:{text},
                        dataType:"json",
                        success:function(res){
                           console.log(res);
                           location.href=`france.html?text=${text}`
                            
                        }
                    })
                    
                }
            })     
            $(".CLASS").on("mouseover",function(){
                $(".UL").show()    
            }).on("mouseout",function(){
                $(".UL").hide()
            })
        }
    })   
})









