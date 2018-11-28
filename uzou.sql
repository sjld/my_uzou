SET NAMES UTF8;
DROP DATABASE IF EXISTS uzou;
CREATE DATABASE uzou CHARSET=UTF8;
USE uzou;
#创建用户列表
CREATE TABLE user(
 uid  int primary key auto_increment, 
 uname VARCHAR(8),
 upwd int,
 gender bool,
 realname  varchar(8),
 phone  char(11),
 email  char(20)
);
insert into user value(1,"tom",123,1,"汤姆","18235701849","tom@qq.com");
INSERT INTO user value(null,"hyf",1849,"0","黄玉峰","","hyf@qq.com");
INSERT INTO user value(null,"ghh",3611,"0","高慧慧","","ghh@qq.com");
INSERT INTO user value(null,"gjh",8911,"0","高金红","","gjh@qq.com");
INSERT INTO user value(null,"slx",5852,"0","申立新","","slx@qq.com");
INSERT INTO user value(null,"xmr",8900,"0","肖明睿","","xmr@qq.com");
#创建景点列表
create table place(
 place varchar(100),
 day int,
 price float,
 salecount  text,
 hot char(5),
 recommend  varchar(100)
);
insert into place value("北京",7,3000,200,"五星","故宫、天安门、天坛");
#创建住宿列表
CREATE TABLE zhusu(
   pno  int primary key auto_increment,
   place varchar(100),
   price float,
   pic varchar(128),
   details varchar(128),
   zhus varchar(128),
   food varchar(128),
   jies varchar(128)

);
INSERT INTO zhusu value(NULL,"住宿","","img/21.png","","","","");
INSERT INTO zhusu value(NULL,"苏梅岛碧石别墅1号","4320","img/22.png","碧石别墅1号（Samui Turquoise Villa 1）是一座拥有全景海景的现代设计风格别墅。别墅位于曾蒙（Choeng Mon）有名的地方，仅需4分钟车程即可到达机场。您可以轻松步行至迷人的海滩，想去热闹的查汶地区（Chaweng）仅需10分钟的车程。您还能探访浪漫的当地渔村，体验当地风情。","img/uzou-zhus.png","img/uzou-foods.png","img/uzou-jies.png");
INSERT INTO zhusu value(NULL,"苏梅岛月影别墅","3617","img/23.png","无论您是因为出差或度假而造访苏梅岛，月影别墅都会是您的最佳住宿选择。离市中心仅有4 km，游客可以尽情领略市区内的迷人风景。","img/uzou-zhus.png","img/uzou-jies.png","img/uzou-foods.png");
INSERT INTO zhusu value(NULL,"苏梅岛茵塔别墅","10702","img/24.png","雅致的别墅空间与自然环境融合为一体，标志性的建筑主题是屋顶结构——雪松木瓦，倾斜式的屋顶拉长了整个空间高达10米的，覆盖了整个生活区，让卧室更宽敞。知名演员孙俪和邓超曾入住此别墅。","img/uzou-zhus.png","","img/uzou-foods.png");
INSERT INTO zhusu value(NULL,"日本北海道安奈北别墅","5720","img/25.png","安奈北别墅，从其一楼的入口到其二楼的阅读室，非常轻松地营造出一种宽敞的氛围。而且这个别墅最大的优势在于紧邻着一家餐厅和滑雪场，同时还能最大限度的保证清幽的环境。敞亮的窗户，为这里的客人提供了良好的视野，羊蹄山（Mount Yotei ）和大比罗夫滑雪场（the Grand Hirafu ski hill）就处于目之所及的地方。","img/uzou-zhus.png","","");
INSERT INTO zhusu value(NULL,"日本北海道阿萨西别墅","4010","img/26.png","阿萨西别墅是一间主打“别致”和“品味”的精致雪屋别墅，地理位置优越，周围建有餐厅、酒吧，并且提供免费的接驳车服务。这里可以轻松地欣赏到羊蹄山（Mt.Yotei）的壮丽风景，由于别墅内的华丽布置，这里成为了比罗夫（Hirafu）最喜爱的住所之一。","img/uzou-zhus.png","","img/uzou-foods.png");
INSERT INTO zhusu value(NULL,"斯里兰卡艾拉丽雅花园-慕贝拉别墅","815","img/27.png","慕贝拉别墅（Villa Muhudu Bella）是一栋富有趣味的海滩度假别墅，是艾拉丽雅花园别墅之一。别墅特殊的几何构造令人着迷。","img/uzou-zhus.png","img/uzou-jies.png","");
INSERT INTO zhusu value(NULL,"普吉岛哈尔玛利亚别墅","11790","img/28.png","哈尔玛利亚别墅是一个充分利用它自身壮丽海滨地理位置优势的精致度假胜地。这个别墅追求热带极简主义，广泛使用的自然原始材料模糊了室内和室外的界限。","img/uzou-zhus.png","","");
#创建签证列表
#创建巴士游列表
CREATE TABLE bashiyou(
   place varchar(100),
   price float,
   details varchar(128),
   producesummary varchar(128),
   producedetails  varchar(128),
   priceintroduce_conclude varchar(128),
   priceintroduce_inconclude varchar(128),
   reserve varchar(128),
   pic varchar(128),
   picdetails varchar(128)
);
INSERT INTO bashiyou VALUE("","","","","","","","","img/31.jpg","");
INSERT INTO bashiyou VALUE("法国古堡卢瓦尔河谷一日游","EUR 60 (￥ 477) 起","巴黎之后最佳行程，领略法兰西另一面的风情 闻名世界的卢瓦尔城堡; 法国国宝「堡王」香波古堡; 香艳浪漫「堡后」雪侬梭古堡","巴黎之后最佳行程，领略法兰西另一面的风情
闻名世界的卢瓦尔城堡; 法国国宝「堡王」香波古堡; 香艳浪漫「堡后」雪侬梭古堡","巴黎（180公里）→ 香波古堡Chambord（55公里）→ 雪侬梭古堡Chenonceau（240公里）→ 巴黎早上九时整于巴黎歌剧院门前集合出发，前往世界知名的旅游景区卢瓦尔河谷。卢瓦尔河被称为法国的母亲河，是法国最长的河流，流程一千廿公里。河谷两岸有闻名世界的卢瓦尔城堡群，随处可见壮丽华美的城堡，星罗棋布地散落着大大小小的葡萄种植园，这里展现着法兰西另一面的风情，是法国恬静古典的后花园。卢瓦尔河谷城堡，有很多巳被列为联合国教科文组织文化遗产名录；其中香波古堡及雪侬梭古堡最受人们宠爱。我们首先游览有「堡王」称誉的香波堡，此堡是法国 国王弗朗索瓦一世为炫耀皇权及国势在一五一九年下令兴建的狩猎行宫，他从意大利请来了艺术大师达芬奇等人，把意大利文艺复兴时期的辉煌艺术和建筑风格移植 到法国，为法兰西的文艺复兴奠定了基础，香波堡被法国人视为国宝，一九八一年被列入世界文化遗产名录。下午转赴有「堡后」之称的雪侬梭古堡游览，横跨卢瓦 尔河支流希尔河河面而建的雪侬梭古堡，享利二世将城堡送给情妇，自始雪侬梭古堡的堡主均为女性，先后有王后，宠妃和贵妇人在这里居住过，因此流传下许多香艳缠绵的故事，是卢瓦尔河谷宫堡群中最富有浪漫情调及最瑰丽的“水上城堡”。下午五时回程，预计晚上七时左右返抵巴黎结束行程。","往返交通（九座位或以上旅游车）、中文导游","各景点门票及餐饮。各类保险、旅游证件，签证费用。额外或行程以外要求安排之自费节目。当地导游、司机及华藉领队之小费。（4欧元/人/天，大人小孩同价）
在非本公司所能控制之情况下，如罢工及交通延误，而引发之额外支出。","临时取消及退款办法
一经报名后在任何情况或理由下需要取消订位，需按照下列章则扣除费用以作赔偿：
(1)出发日前16天或以上，双方可作任何更改提前或延期出发，不作任何费用扣除；
(2)出发日前15天内，需扣除全数团费50%；
(3)出发日前 7天内，需扣除全数团费100%。
其他细则
(1)在任何理由及情况下团员若逾时而赶不上巴士出发，本公司恕不负责及概不退还任何费用。
(2)航机或巴士如因故障或塞车而延误出发时间，须将行程更改或取消节目，团员不得借故反对及退出，如遇上天气恶劣、罢工或突发意外，引致行程延误，团员不得借故要求赔偿或索回团费。
(3)团员须自行负责有效之旅游证件(护照)及签证，在任何情况下或即使团员持有效之旅游证件及入境签证，如在入境时为当地移民局（ 海关 )拒绝入境，概与本公司无关，一切损失团员自行负责，团费恕不退还保险问题建议团员自行投保旅游平安保险及行李保险，有关投保手续可向报名之旅行社或直接与本公司查询。请提前3天预订，下单前请再次与客服确认是否有位置。","img/32.jpg","img/39.jpg");
INSERT INTO bashiyou VALUE("枫丹白露、吉维尼、巴比松艺术村一日游
","EUR 60 (￥ 474) 起","最适合住在巴黎的自游行旅客，当天来回的一天旅游节目。 印象派画家大师莫奈宅邸及庭园、富丽堂皇法王行宫枫丹白露宫、巴比松画派诞生地巴比松艺术村。","最适合住在巴黎的自游行旅客，当天来回的一天旅游节目
印象派画家大师莫奈宅邸及庭园; 富丽堂皇法王行宫枫丹白露宫; 巴比松画派诞生地巴比松艺术村
（注：莫奈宅邸及庭园每年11月1日至3月31日关闭休馆，期间游覧莫奈宅邸的行程将改游尚蒂伊城堡）
尚蒂伊城堡是一座古老的城堡，位于巴黎北郊40公里的尚蒂伊Chantilly。它包括两座附属的建筑：大城堡毁于法国革命期间，1870年代重建，小城堡于大约1560年为蒙莫朗西公爵修建。其声誉毫不输于周遭的凡尔赛宫、枫丹白露宫、沃子爵城堡等著名建筑。成龙影片《十二生肖》是史上首度在此取景的电影，此堡因而在中国闻名。","巴黎（75公里）→ 吉维尼Giverny（140公里）→ 枫丹白露Fontainebleau（10公里）→ 巴比松Barbizon（60公里）→ 巴黎
早上九时整于巴黎歌剧院门前集合出发，前往小镇吉维尼，这镇因拥有印象派画家的先驱者克劳德莫奈（Claude Monet）的故居及唯美的莫奈花园而享誉全球，莫奈后半生的时光是在这里度过的；自从莫奈的宅邸及庭园开放给游客参观以来，每年便吸引无数的游客到访。游毕转赴枫丹白露，十二世纪法王路易七世开始在此修建城堡、后经歴代君王扩建和装饰，最终枫丹白露成为一座富丽堂皇的行宫。拿破仑称帝后，选择以枫丹白露宫作为皇宫，对其加以修复。宫内的主要景点有舞厅、会议厅、黛安娜壁画长廊、百盘廊、王后沙龙等等。一八一四年，拿破仑被迫在这里签字让位，并对其近卫军团发表了著名的告别演说。下午前往紧靠着枫丹白露森林区内的巴比松艺术村，这里正是巴比松画派的诞生地，十九世纪这里迷人的风景和纯朴的民风吸引了画家来这里写生，后来几乎成为一条画家村，巴比松画派活跃于十九世纪三十至四十年代，主张描绘民族特色的法国农村风景、代表画家包括：鲁索、柯罗、米勒等；时至今日，巴比松已变身为艺术村，小小的村落有多家餐厅、画廊和旅馆，深入巷子里，是一大片蓊郁的森林，风景优美。下午五时回程，预计晚上六时左右返抵巴黎结束行程。","往返交通（九座位或以上旅游车）、中文导游
","各景点门票及餐饮。各类保险、旅游证件，签证费用。额外或行程以外要求安排之自费节目。当地导游、司机及华藉领队之小费。（4欧元/人/天，大人小孩同价）在非本公司所能控制之情况下，如罢工及交通延误，而引发之额外支出。","","img/33.jpg","");
INSERT INTO bashiyou VALUE("","","","","","","","","img/34.jpg","");
INSERT INTO bashiyou VALUE("","","","","","","","","img/35.jpg","");
INSERT INTO bashiyou VALUE("","","","","","","","","img/36.jpg","");
INSERT INTO bashiyou VALUE("","","","","","","","","img/37.jpg","");
INSERT INTO bashiyou VALUE("","","","","","","","","img/38.jpg","");

#创建商旅-商铺列表
CREATE TABLE shop(
  product varchar(128),
  price float,
  salecount  varchar(128),
  hot  varchar(128),
  details varchar(128),
  pic varchar(128)
);
INSERT INTO shop VALUE("高地及圣安德鲁斯高尔夫行程-黄金套餐","EUR 3,157 起/人","","","行程中包含2顿午餐，1顿晚餐 七晚球场附近双人间住宿，麦克唐纳德卢萨克斯酒店是位于圣安德鲁斯的4星级酒店 全程六场球 机场接机服务，24小时服务热线 全程提供陪同服务，豪华用车","img/shop1");
INSERT INTO shop VALUE("圣安德鲁斯&爱丁堡高尔夫行程-黄金套餐
","EUR 4,118 起/人","","","行程中包含2顿午餐，1顿晚餐 五晚球场附近双人间住宿 全程六场球 机场接机服务，24小时服务热线 全程提供陪同服务，豪华用车及饮品(报价基于8人起) 球童、订车、行程建议、旅游观光、餐厅","img/shop2");
INSERT INTO shop VALUE("圣安德鲁斯高尔夫-黄金套餐","EUR 3,351 起/人","","","行程中包含2顿午餐，1顿晚餐 麦克唐纳德卢萨克斯酒店是位于圣安德鲁斯的4星级酒店 全程提供陪同服务，豪华用车及饮品 提供车上GPS使用 提供打球接送服务","img/shop3");
#创建图片表
CREATE TABLE picture(
  sm varchar(128),
  md varchar(128),
  lg varchar(128)
);
INSERT INTO picture VALUE("image/1s.jpg","image/1m.jpg","img/1.jpg");
INSERT INTO picture VALUE("image/2s.jpg","image/2m.jpg","img/2.jpg");
INSERT INTO picture VALUE("image/3s.jpg","image/3m.jpg","img/3.jpg");
INSERT INTO picture VALUE("image/4s.jpg","image/4m.jpg","img/4.jpg");
INSERT INTO picture VALUE("image/5s.jpg","image/5m.jpg","img/5.jpg");
INSERT INTO picture VALUE("image/6s.jpg","image/6m.jpg","img/6.jpg");
#法国
CREATE TABLE franch(
  id int  primary key auto_increment, 
  pic varchar(128),
  price varchar(25),
  title varchar(32),
  subtitle varchar(128),
  sale varchar(25),
  country varchar(128),
  jies varchar(128),
  zhus varchar(128)
);
INSERT INTO franch VALUES(null,"img/a.jpg","¥ 1,303 起","法国个人旅游-申根签证","法国个人旅游-申根签证 有效期3个月 停留期使馆根据行程批","顺通签证","","","");
INSERT INTO franch VALUES(null,"img/b.jpg","EUR 1,337 起","瑞士冰川、法国香槟9天私家团·独立成团（需二次确认）","","欧来欧去","img/uzou-china.png","img/uzou-jies.png","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/c.jpg","EUR 1,267 起","南法西班牙热情9天私家团·独立成团（需二次确认）","","欧来欧去","img/uzou-china.png","img/uzou-jies.png","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/d.jpg","EUR 1,169 起","南法普罗旺斯小城故事9天私家团·独立成团（需二次确认）","","欧来欧去","img/uzou-china.png","img/uzou-jies.png","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/e.jpg","EUR 1,169 起","南法普罗旺斯小城故事9天私家团·独立成团（需二次确认）","","欧来欧去","img/uzou-china.png","img/uzou-jies.png","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/f.jpg","EUR 1,124 起","法国古堡醇酒8天私家团·独立成团（需二次确认）","","欧来欧去","img/uzou-china.png","img/uzou-jies.png","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/g.jpg","EUR 1,314 起","意大利、瑞士、法国经典3国9天私家团·独立成团（需二次确认）","","欧来欧去","img/uzou-china.png","img/uzou-jies.png","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/h.jpg","EUR 66 起","法国古堡卢瓦尔河谷一日游（需二次确认）","","欧来欧去","img/uzou-china.png","","");
INSERT INTO franch VALUES(null,"img/i.png"," EUR 66 起","圣米歇尔山一日游（需二次确认）","","欧来欧去","img/uzou-china.png","","");
INSERT INTO franch VALUES(null,"img/j.png"," EUR 486 起","法国+西班牙+安道尔7天6晚巴士循环游【全年保证出发 安道尔 波尔多 香波堡】","","欧来欧去","img/uzou-china.png","","");
INSERT INTO franch VALUES(null,"img/k.png"," EUR 486 起","英国一地7天6晚巴士循环深度游【全年保证出发 伦敦 爱丁堡 曼彻斯特】","","欧来欧去","img/uzou-china.png","","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/l.jpg"," EUR 486 起","法国+比利时+荷兰+卢森堡+德国 7天6晚巴士循环游【全年保证出发 凡尔赛宫 风车村】","","欧来欧去","img/uzou-china.png","","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/a.jpg"," EUR 486 起","瑞士+意大利+梵蒂冈+摩纳哥+法国 7天6晚巴士循环游【全年保证出发 威尼斯 戛纳】","","欧来欧去","img/uzou-china.png","","img/uzou-zhus.png");
INSERT INTO franch VALUES(null,"img/xxl.jpg"," ¥ 1,612 起","新西兰个人旅游","新西兰个人旅游 有效期1年 有效期内####数次停留 停留期90天/次
","顺通签证","","","");
#旅局
CREATE TABLE lvju(
  id int  primary key auto_increment, 
  continent varchar(32),
  country varchar(32),
  city varchar(32),
  pic varchar(128),
  title varchar(32)
);
INSERT INTO lvju VALUES(null,"Europe","Sweden","Sweden","http://localhost:3000/img/Logo.jpg","瑞典旅游局");
INSERT INTO lvju VALUES(null,"Africa","cse","cse","http://localhost:3000/img/Logo.jpg","塞舌尔旅游局");
INSERT INTO lvju VALUES(null,"North America","America","alsj","http://localhost:3000/img/00003.jpg","美国阿拉斯加旅游局");
INSERT INTO lvju VALUES(null,"Africa","tns","tns","http://localhost:3000/img/ALASKA.jpg","突尼斯旅游局");
INSERT INTO lvju VALUES(null,"North America","America","dkss","http://localhost:3000/img/0001.png","美国德克萨斯旅游局");
INSERT INTO lvju VALUES(null,"North America","America","jz","http://localhost:3000/img/texa1.jpg","美国加州圣地亚哥旅游局");
INSERT INTO lvju VALUES(null,"North America","America","fc","http://localhost:3000/img/0000.png","美国费城旅游局");
INSERT INTO lvju VALUES(null,"North America","America","gd","http://localhost:3000/img/LOGO1.jpg","关岛旅游局");
INSERT INTO lvju VALUES(null,"North America","Canada","kbk","http://localhost:3000/img/aq.jpg","魁北克旅游局");
INSERT INTO lvju VALUES(null,"Europe","Norway","nw","http://localhost:http://3000/img/a2e7974e-8387-4b07-8d03-9b058a7bfd70.png","挪威旅游局");
INSERT INTO lvju VALUES(null,"Europe","Denmark","Denmark","http://localhost:3000/img/de.jpg","丹麦旅游局");