$(function () {
	//设定没页高度为浏览器可见高
	$("section > div").css("height",$(window).height());
	var color = ["red","blue","#fff","yellow"]
	//初始化
	var winPos = $(window).scrollTop();
	var bool = true;
	$('html, body').animate({scrollTop: 0},1); 
	$(".contact-span span").each(function (i,n) {
		$(n).css("color",color[i]);
	});
	max();
	if ($(window).width() <= 768) {
		$(".skill-main-lis > li").eq(0).siblings().hide();
		$(".skill-list li").click(function () {
			$(this).addClass("active").siblings().removeClass("active");
			$(".skill-main-lis > li").eq($(this).index()).show().siblings().hide();
			$(".header-nav li").eq($("aside li.active").index()).addClass("active").siblings().removeClass("active");
			$(".header-nav span").html($(".header-nav li.active").html());
		});
	}
	//鼠标触碰
	$("aside li").mouseenter(function () {
		$(this).addClass("new");
	});
	$("aside li").mouseleave(function () {
		$(this).removeClass("new");
	});
	$("aside li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		$('html, body').animate({scrollTop: $(this).index()*$(window).height()}, 500); 
	});
	$(".header-nav span").click(function () {
		$(".header-nav li").show();
		return false;
	})
	$(".header-nav li").click(function (event) {
		$(this).addClass("active").siblings().removeClass("active");
		$(".header-nav span").html($(".header-nav li.active").html());
		$("aside li").eq($(this).index()-1).addClass("active").siblings().removeClass("active");
		$('html, body').animate({scrollTop: ($(this).index()-1)*$(window).height()}, 500);
		$(".header-nav li").hide();
	})
	$(window).click(function () {
		$(".header-nav li").hide();
	})
	//鼠标滚动
	$(window).mousewheel(function(event, delta) {
		if (bool) {
         if (delta < 0 && $("aside li.active").index() <= 4) {
         	if ($("aside li.active").index() == 4) {
         		return false;
         	}
         	bool = false;
         	$('html, body').animate({scrollTop: ($("aside li.active").index()+1)*$(window).height()}, 500,function () {
         		bool = true;
         	});
         	$("aside li.active").next().addClass("active").siblings().removeClass("active");
         	$(".header-nav li.active").next().addClass("active").siblings().removeClass("active");
         	$(".header-nav span").html($(".header-nav li.active").html());
         }else{
         	bool = false;
         	$('html, body').animate({scrollTop: ($("aside li.active").index()-1)*$(window).height()}, 500,function () {
         		bool = true;
         	});
         	$("aside li.active").prev().addClass("active").siblings().removeClass("active");
         	$(".header-nav li.active").prev().addClass("active").siblings().removeClass("active");
         	$(".header-nav span").html($(".header-nav li.active").html());
         }
        }
	});
	// 主页动画
	$(".home-banner").animate({top: "17%"}, 500,function () {
		$(".home-text p").eq(0).animate({paddingTop: "0px"}, 500,function () {
			$(".home-text hr").animate({width: "70%"}, 500,function () {
				$(".home-text p").eq(1).animate({paddingTop: "0px"}, 500,function () {
					$(".home-text p").eq(2).animate({paddingTop: "0px"}, 500,function () {
						$(".home-text p").eq(3).animate({paddingTop: "0px"}, 500,function () {
							$(".home-text p").eq(4).animate({paddingTop: "0px"}, 500)
						});
					});
				});
			});
		});
	});
	//二页动画
	$(window).scroll(function () {
		if ($(window).scrollTop() == $(window).height() && $("aside li.active").index() == 1) {
			$(".info-main-icon").addClass("info-main-iconafter");
			$(".info-text p").eq(0).animate({paddingTop: "0px"}, 500,function () {
				$(".info-text p").eq(1).animate({paddingTop: "0px"}, 500,function () {
					$(".info-text p").eq(2).animate({paddingTop: "0px"}, 500,function () {
						$(".info-text p").eq(3).animate({paddingTop: "0px"}, 500)
					});
				});
			});
		}
	});
	//技能动画
	$(".skill-main-lis > li").mousemove(function (e) {
		var w = $(this).width()/4;
		var h = $(this).height()/8;
		var X = Math.floor(e.pageX - $(this).offset().left);
		var Y = Math.floor(e.pageY - $(this).offset().top);
		$(this).css({
			transform:"rotateX("+X/w+"deg) rotateY("+Y/h+"deg)"
		});
	})
	$(".skill-main-lis > li").mouseleave(function () {
		$(this).css({
			transform:"rotateX(0deg) rotateY(0deg)"
		});
	})
	$("#nextbtn").click(function () {
		var index = $(".demo-list .active").index();
		console.log(index);
		if (index == 3) {
			index = 0;
		}else{
			++index;
		}
		$(".demo-list li").eq(index).addClass("active").siblings().removeClass("active");
		$(".demo-main > div").eq(index).show(500).siblings("div").hide(500);
	})
	$("#prevbtn").click(function () {
		var index = $(".demo-list .active").index();
		if (index == 0) {
			index = 3;
		}else{
			--index;
		}
		$(".demo-list li").eq(index).addClass("active").siblings().removeClass("active");
		$(".demo-main > div").eq(index).show(500).siblings("div").hide(500);
	})
	$(".demo-list li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		$(".demo-main > div").eq($(this).index()).show(500).siblings().hide(500);
	})
	//浏览器宽度与高度变化时页面高度 
	$(window).resize(function () {
		$("section > div").css("height",$(window).height());
		$('html, body').animate({scrollTop: ($("aside li.active").index())*$(window).height()},0);
		max();
		$("title").html($(window).width());
		if ($(window).width() <= 768) {
			$(".skill-main-lis > li").eq(0).siblings().hide();
			$(".skill-list li").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				$(".skill-main-lis > li").eq($(this).index()).show().siblings().hide();
			})
			$(".header-nav li").eq($("aside li.active").index()).addClass("active").siblings().removeClass("active");
			$(".header-nav span").html($(".header-nav li.active").html());
		}else {
			$(".skill-main-lis > li").show();
		}
	});
	function max() {
		$(".skill-main-lis > li").css("height","auto");
		var max = 0;
		$(".skill-main-lis > li").each(function (i,n) {
			if ($(n).height() > max) {
				max = $(n).height();
			}
		})
		$(".skill-main-lis > li").css("height",max);
	}
})