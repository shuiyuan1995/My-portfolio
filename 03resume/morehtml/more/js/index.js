window.onload = function () {
	var moreH = {
		Url:["../yancheng/index.html","../copeqd/index.html","morehtml/001/index.html","morehtml/002/index.html","morehtml/003/index.html","morehtml/004/index.html","morehtml/005/index.html","morehtml/006/index.html","morehtml/007/index.html","morehtml/008/index.html","morehtml/009/index.html","morehtml/010/index.html","morehtml/011/index.html","morehtml/012/index.html","morehtml/013/index.html","morehtml/014/index.html","morehtml/015/index.html","morehtml/016/index.html","morehtml/017/index.html","morehtml/018/index.html","morehtml/019/index.html","morehtml/020/index.html"],
		name:["盐城宝赢滤材有限公司","起点中文网(仿)","筋斗云","立方体","放大镜","写一个字","转红包看照片","帧动画","坐标系","饼图","BisLite","弹性伸缩Tabs选项卡","手风琴效果","轮播图","可控制调节进度条","盲僧","百分比进度条","canvas 实例","全屏响应浏览器轮播图","滑动加载进度条","进度条动画","豆瓣一刻"],
		img:["img/001.png","img/002.png","img/003.png","img/004.png","img/005.png","img/006.png","img/007.png","img/008.png","img/009.png","img/010.png","img/011.png","img/012.png","img/013.png","img/014.png","img/015.png","img/016.png","img/017.png","img/018.png","img/019.png","img/020.png","img/021.png","img/022.png"]
	}
	for (var i = 0; i < moreH.name.length; i++) {
		$("<li><h2><a href='"+moreH.Url[i]+"'>"+moreH.name[i]+"</a></h2><a href='"+moreH.Url[i]+"'><div><img src='"+moreH.img[i]+"'></div></a></li>").appendTo("#more")
	}
	$("#more img").load(function () {
		changew();
	})
	$(window).resize(function () {
		changew();
	});
	function changew() {
		var w = $("#box").width();
		var index = Math.floor(w/240);
		var marw = w%240/(index-1);
		if (marw < 20) {
			index = index -1;
			marw = (w%240+240)/(index-1);
		}
		var harr = [];
		var minTop = 0;
		var len = $("#more li").length;
		for (var i = 0; i < len; i++) {
			if (i < index) {
				harr[i] = minTop;
			}else{
				minTop = Math.min.apply(null,harr);
			}
			var ind = getmintopindex(harr,minTop);
			var left = ind*(240+marw);
			$("#more li").eq(i).css({
				left:left+"px",
				top:minTop+"px"
			});
			harr[ind] += $("#more li").eq(i).height() + 20;
		}
	}
	function getmintopindex(harr,val) {
		for(var i in harr){
	        if(harr[i]  == val){
	            return i;
	        }
	    }
	}
}