window.onload = function () {
	(function (w) {
		// 初始化
		// 顶部随机广告
		var topBill = ["0.jpg"];
		// 页游广告
		var webBottom = ["0.gif"];
		var web = {
			i:["5-29","5-28","5-28","5-28","5-27","5-27","5-27"],
			A:["西游伏妖篇","传奇霸业","乾坤战纪","不良人","最佳阵容","剑侠情缘2网页版","御天下"],
			S:["1区","143区","10区","7区","13区","28区","2区"],
			Img:["0 (10).jpg","0 (12).jpg","0 (13).jpg","0 (14).jpg","0 (15).jpg","0 (16).jpg","0 (17).jpg"]
		};
		// 手游广告
		var phoneBottom = ["0 (18).jpg"];
		var phone = {
			A:["妖怪宝可萌","神龙武士","绝世神功"],
			i:["开始冒险！","魔幻竞技","碾压龙傲天"],
			Img:["0 (11).jpg","0 (19).jpg","0 (20).jpg"]
		}
		// banner底部广告
		var bannerBottom = ["0.png","0 (1).png","0 (2).png"];
		//banner
		var banner = {
			Img:["0 (1).jpg","0 (2).jpg","0 (3).jpg","0 (4).jpg","0 (5).jpg"],
			name:["庶子风流","全民进化时代","梦醒细无声","超维术士","游戏天地"]
		};
		// 通知底部广告
		var noticeBottom = ["0 (6).jpg"];
		// 通知内容
		var notice = {
			title:["梦幻西游征文获奖名单"],
			a:["「公告」PC红包功能暂停通知","「资讯」近战法师剧版最新进展","「资讯」乘风御剑新书重磅来袭","「资讯」小刀锋利新书《无疆》","你在三国的前世是谁","女神级宫斗"],
			em:["页游","页游"]
		}
		// 订阅消息
		var subscribe = ["八指琴魔1230订阅了《大唐御医》","孙宗义订阅了《太浩》","太阳爱冰棒订阅了《我是杀毒软件》","放飞的人订阅了《校花的贴身高手》","永夜之旅订阅了《美酒供应商》","暗夜※繁星订阅了《有扇通往地下城的门》"]

		var arr1 = [
			{
				width:"47px",
				height:"69px",
	            top:"30px",
	            right:"154px",
	            zIndex:1,
	            display:"none"
			},
			{
				width:"59px",
				height:"87px",
	            top:"22px",
	            right:"113px",
	            zIndex:2,
	            display:"block"
			},
			{
				width:"74px",
				height:"109px",
	            top:"12px",
	            right:"63px",
	            zIndex:3,
	            display:"block"
			},
			{
				width:"90px",
				height:"122px",
	            top:"0px",
	            right:"0px",
	            zIndex:4,
	            display:"block"
			},
			{
				width:"74px",
				height:"109px",
	            top:"12px",
	            right:"-44px",
	            zIndex:3,
	            display:"block"
			},
			{
				width:"59px",
				height:"87px",
	            top:"22px",
	            right:"-80px",
	            zIndex:2,
	            display:"block"
			},
			{
				width:"47px",
				height:"69px",
	            top:"30px",
	            right:"-108px",
	            zIndex:1,
	            display:"none"
			},
		]
		var arr2 = [
			{
				width:"74px",
				height:"109px",
	            top:"20px",
	            left:"20px",
	            zIndex:2,
	            display:"block"
			},
			{
				width:"90px",
				height:"112px",
	            top:"0px",
	            left:"61px",
	            zIndex:3,
	            display:"block"
			},
			{
				width:"74px",
				height:"109px",
	            top:"20px",
	            left:"120px",
	            zIndex:2,
	            display:"block"
			}
		]

		// 内容图片加载
		for (var i = 0; i < web.i.length; i++) {
			$("#webDl").append("<dd><h5><span></span><i>"+web.i[i]+"</i><a href='###'>"+web.A[i]+"</a><strong>"+web.S[i]+"</strong></h5><p><a href='###'><img src='img/"+web.Img[i]+"'/><span class='bill'></span></a></p></dd>")
		}
		for (var i = 0; i < phone.i.length; i++) {
			$("#phoneDl").append("<dd><h5><a href='###'>"+phone.A[i]+"</a><i>"+phone.i[i]+"</i></h5><p><a href='###'><img src='img/"+phone.Img[i]+"' alt='><span class='bill'></span> </a> </p> </dd>")
		}
		imgChange("#top-bill",topBill[0]);
		imgChange("#webBottom",webBottom[0]);
		imgChange("#phoneBottom",phoneBottom[0]);
		$("#phoneDl dd").eq(0).addClass("active").find("h5").prepend("<span></span>");
		$("#webDl dd").eq(0).addClass("active");
		imgChange("#bannerBottom1",bannerBottom[0]);
		imgChange("#bannerBottom2",bannerBottom[1]);
		imgChange("#bannerBottom3",bannerBottom[2]);
		imgChange("#noticeBottom",noticeBottom[0]);
		for (var i = 0; i < banner.name.length; i++) {
			var obj = $("#banner li").eq(i).find("img");
			imgChange(obj,banner.Img[i]);
			$("#bannertext a").eq(i).append(banner.name[i])
		}
		for (var i = 0; i < arr1.length; i++) {
			$("#slides > div").eq(i).css(arr1[i]);
		}
		for (var i = 0; i < arr2.length; i++) {
			$("#hotslide > li").eq(i).css(arr2[i]);
		}
		// 页游广告鼠标移入事件
		$("#webDl dd").mouseover(function () {
			$(this).addClass("active").siblings().removeClass("active");
		})
		bannertroll();
		textChange("#noticetitle",notice.title[0]);
		for (var i = 0; i < notice.a.length; i++) {
			 var $a = $("#noticetext a").eq(i);
			 textChange($a,notice.a[i]);
			 if (i > 3) {
			 	$a.prepend("<em>"+notice.em[i-4]+"</em>")
			 }
		}
		for (var i = 0; i < subscribe.length; i++) {
			var $a = $("#subscribe li").eq(i).find("a");
			 textChange($a,subscribe[i]);
		}
		subscribetroll();
		// 图片加载
		function imgChange (obj,img) {
			$(obj).attr("src","img/"+img);
		}

		tabtext("#all","#alltext");
		tabtext("#free","#freetext");
		tabtext("#vip","#viptext");
		// 最近更新tab
		function tabtext(obj,obj1) {
			$(obj).click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				$(obj1).css("display","block").siblings().css("display","none");
			})
		}

		// 排行榜更多
		$("#more").click(function () {
			var h = $("#moretext").height();
			console.log(h);
			if (h == 423) {
				$(this).find("span").addClass("up");
				$("#moretext").animate({height:"597px"})
			}else{
				$(this).find("span").removeClass("up");
				$("#moretext").animate({height:"423px"})
			}
			
		})

		//banner轮播图
		var j;
		function bannertroll () {
			j = 0;
			$("#banner li").eq(0).clone(true).appendTo("#banner")
			$("#banner li").eq(j).siblings().css({
				transform: "translateX(100%)"
			});
			var timer = setInterval(time,3000);
			$("#banner").parent().mouseenter(function () {
				clearInterval(timer);
			});
			$("#banner").parent().mouseleave(function () {
				timer = setInterval(time,3000);
			});
			$("#bannertext a").click(function (){
				var index = $(this).index();
				if (index > j) {
					$("#banner li").eq(index).css({
						transition:"all 0.8s",
						transform: "translateX(0)"
					});
					$("#banner li").eq(j).css({
						transition:"all 0.8s",
						transform: "translateX(-100%)"
					});
					$("#bannertext a").eq(index).addClass("active").siblings().removeClass("active");
					j = index;
				}else if(index < j){
					$("#banner li").eq(index).css({
						transition:"all 0.8s",
						transform: "translateX(0)"
					});
					$("#banner li").eq(j).css({
						transition:"all 0.8s",
						transform: "translateX(100%)"
					});
					$("#bannertext a").eq(index).addClass("active").siblings().removeClass("active");
					j = index;
				}
			})
		};
		var max = $("#banner li").length;
		function time () {
			j++;
			$("#banner li").eq(j).css({
				transition:"all 0.8s",
				transform: "translateX(0)"
			});
			$("#banner li").eq(j-1).css({
				transition:"all 0.8s",
				transform: "translateX(-100%)"
			});
			$("#bannertext a").eq(j).addClass("active").siblings().removeClass("active");
			if (j >= max-1) {
				j = 0;
				$("#bannertext a").eq(j).addClass("active").siblings().removeClass("active");
			}
		};
		$("#banner li").on("webkitTransitionEnd",function () {
			for (var i = 0; i < max; i++) {
				if (j > i) {
					$("#banner li").eq(i).css({
						transition:"all 0s",
						transform: "translateX(-100%)"
					});
				}else if (j < i){
					$("#banner li").eq(i).css({
						transition:"all 0s",
						transform: "translateX(100%)"
					});
				}
			}
			if (j == 0) {
				$("#banner li").eq(0).css({
					transition:"all 0s",
					transform: "translateX(0)"
				});
			}
		});

		carouselmove("#carousel","#prevbtn1","#nextbtn1");
		hotslidemove($("#hotslide li"));
		hotslidemove($("#hotslide1 li"));
		hotslidemove($("#hotslide2 li"));
		// 编辑推荐轮播图
		var flag = true;
		var t = 0;
		function hotslidemove(obj) {
			var timer3 = setInterval(time3,3000);
			function time3() {
				$obj = $(obj);
				arr2.unshift(arr2.pop());
				for (var i = 0; i < $obj.length; i++) {
		    		var newarr = arr2[i];
		    		$($obj[i]).animate(arr2[i],(function (newarr,obj) {
		    			$($obj[i]).css("display",newarr.display);
		    			flag = true;
		    		})(newarr,$($obj[i])));
		    	}
			}
		}
		function carouselmove(obj1,obj2,obj3) {
			$(obj2).click(function () {
				if (flag) {
					t--;
					if (t<0) {
						t = 6;
					}
		    		flag = false;
		    		move(obj1,false);
		    	}
			});
			$(obj3).click(function () {
				if (flag) {
					t++;
					if (t>6) {
						t = 0;
					}
		    		flag = false;
		    		move(obj1,true);
		    	}
			});
			var timer2 = setInterval(time2,3000);
			function time2 () {
				$(obj3).trigger("click");
			}
			$(obj1).mouseenter(function () {
				clearInterval(timer2);
			});
			$(obj1).mouseleave(function () {
				timer2 = setInterval(time2,3000);
			});
		}

		function move(obj1,bool) {
	    	//判断bool
	    	if (obj1 == "#carousel") {
	    		$("#slidesnav li").eq(t).addClass("active").siblings().removeClass("active");
	    		var slides = $("#slides > div");
	    	}
	    	if (bool == true || bool == false) {
	    		if (bool) {
	    			arr1.unshift(arr1.pop());
	    		}else{
	    			arr1.push(arr1.shift());
	    		}
	    	}
	    	for (var i = 0; i < slides.length; i++) {
	    		var newarr = arr1[i];
	    		$(slides[i]).animate(arr1[i],(function (newarr,obj) {
	    			$(slides[i]).css("display",newarr.display);
	    			flag = true;
	    		})(newarr,$(slides[i])));
	    	}
	    }

		// 文字加载
		function textChange (obj,text) {
			$(obj).text(text);
		}
		// 订阅消息滚动
		var c;
		function subscribetroll() {
			c = 0;
			$("#subscribe li").eq(c).siblings().css({
				transform: "translateY(100%)"
			});
			var timer1 = setInterval(time1,2000);
			$("#subscribe").parent().mouseenter(function () {
				clearInterval(timer1);
			});
			$("#subscribe").parent().mouseleave(function () {
				timer = setInterval(time1,2000);
			});
		}
		function time1 () {
			c++;
			$("#subscribe li").eq(c).css({
				transition:"all 0.8s",
				transform: "translateY(0)"
			});
			$("#subscribe li").eq(c-1).css({
				transition:"all 0.8s",
				transform: "translateY(-100%)"
			});
			if (c > $("#subscribe li").length-1) {
				c = 0;
				$("#subscribe li").eq(c).css({
					transition:"all 0.8s",
					transform: "translateY(0)"
				});
				$("#subscribe li").eq($("#subscribe li").length-1).css({
					transition:"all 0s",
					transform: "translateY(100%)"
				});
			}
		};
		$("#subscribe li").on("webkitTransitionEnd",function () {
			for (var i = 0; i < $("#subscribe li").length; i++){
				if (c > i) {
					$("#subscribe li").eq(i).css({
						transition:"all 0s",
						transform: "translateY(100%)"
					});
				}
			}
		});

	}(window))
}