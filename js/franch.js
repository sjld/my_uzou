$(function(){
    if(location.search.indexOf("text=")!=-1){
        var text=decodeURI(location.search.split("=")[1]);
    $.ajax({
        url:"http://localhost:3000/franch/search",
        type:"get",
        data:{text},
        dataType:"json",
        success:function(res){
            console.log(res)
            var {pic, price ,title,subtitle,sale,country,jies,zhus}=res;
            var html="";
            for(var p of res){
                html+=`<div class="block bg-white">
                <img src="${p.pic}" alt=""/>
                <div class="right">
                    <span class="price">${p.price}</span><br>
                    <span class="place">${p.title}</span>
                    <p class="intr">${p.subtitle}
                    </p>
                    <img src="${p.country}" alt=""/>
                    <img src="${p.jies}" alt=""/>
                    <img src="${p.zhus}" alt=""/>
                    <h6>卖家：${p.sale}</h6>
                </div>
            </div> `          
            }
            $("#cont").html(html);
            $(".Count").html(res.length);
            $.ajax({
                url:"http://localhost:3000/franch/order",
                data:{price},
                dataType:"json",
                type:"get",
                success:function(res){
                    var {pic, price ,title,subtitle,sale,country,jies,zhus}=res;
                var html="";
                for(var p of res){
                    html+=`<div class="block bg-white">
                    <img src="${p.pic}" alt=""/>
                    <div class="right">
                        <span class="price">${p.price}</span><br>
                        <span class="place">${p.title}</span>
                        <p class="intr">${p.subtitle}
                        </p>
                        <img src="${p.country}" alt=""/>
                        <img src="${p.jies}" alt=""/>
                        <img src="${p.zhus}" alt=""/>
                        <h6>卖家：${p.sale}</h6>
                    </div>
                </div> `          
                }
                $(".LI>.menu_top").on("click",function(){
                    $("#cont").html(html);
                })
                $(".LI>.menu_bottom").on("click",function(){
                    location.reload();
                })
                
               }
             
            })
        }
    })
    };
})