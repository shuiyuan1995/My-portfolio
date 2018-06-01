var data = [{
	"src":"1.jpg",
	"title":"第一怪 竹筒当作水烟袋"
},{
	"src":"2.jpg",
	"title":"第二怪 摘下草帽当锅盖"
},{
	"src":"3.jpg",
	"title":"第三怪 这边下雨那边晒"
},{
	"src":"4.jpg",
	"title":"第四怪 四季衣服同穿戴"
},{
	"src":"5.jpg",
	"title":"第五怪 火车没有汽车快袋"
},{
	"src":"6.jpg",
	"title":"第六怪 火车不通国内通国外"
},{
	"src":"7.jpg",
	"title":"第七怪 老太爬山比猴快"
},{
	"src":"8.jpg",
	"title":"第八怪 鞋子后面多一块"
},{
	"src":"9.jpg",
	"title":"第九怪 脚趾常年露在外"
},{
	"src":"10.jpg",
	"title":"第十怪 鸡蛋用草串着卖"
},{
	"src":"11.jpg",
	"title":"第十一怪 糌粑被叫做饵块"
},{
	"src":"12.jpg",
	"title":"第十二怪 花生蚕豆数堆卖"
},{
	"src":"13.jpg",
	"title":"第十三怪 三只蚊子一盘菜"
},{
	"src":"14.jpg",
	"title":"第十四怪 四个竹鼠一麻袋"
},{
	"src":"15.jpg",
	"title":"第十五怪 树上松毛扭着卖"
},{
	"src":"16.jpg",
	"title":"第十六怪 姑娘被叫做老太"
},{
	"src":"17.jpg",
	"title":"第十七怪 和尚可以谈恋爱"
},{
	"src":"18.jpg",
	"title":"第十八怪 背着娃娃谈恋爱"
}]

//初始化布局
var waterfall = function($wrap,$boxes){
//	计算元素列数
	var boxWidth = $boxes.eq(0).width() + 40
	var windowWidth = $(window).width()
	var colsNumber = Math.floor(windowWidth/boxWidth)
//	设置容器宽度
	$wrap.width(boxWidth * colsNumber)
//	保存每列高度
	var everyHeight = []
	$boxes.each(function(i,v){
		if(i<colsNumber){
			everyHeight[i] = $boxes.eq(i).height() + 40			
		}else{
//			获取最小列高度
			var minHeight = Math.min.apply(null,everyHeight)
//			获取最小列高度索引
			var minIndex = getIndex(minHeight,everyHeight)
			var leftValue = $boxes.eq(minIndex).position().left
//			设置样式
			setStyle($boxes.eq(i),minHeight,leftValue,i)
//			更新高度
			everyHeight[minIndex] += $boxes.eq(i).height()+40
//			鼠标经过动画
			$boxes.eq(i).hover(function(event){
				$(this).stop().animate({
					'opacity':'0.5'
				},500)
			},function(){
				$(this).stop().animate({
					'opacity':'1'
				},500)
			})
		}
	})
}
//获取最小列索引
var getIndex = function(minHeight,everyHeight){
	for (index in everyHeight) {
		if(everyHeight[index] == minHeight){
			return index
		}
	}
}
//设置样式
var getStartNumber = 0
function setStyle (box, top, left, index){
	if(getStartNumber >= index){
		return false
	}
	box.css({
		'position':'absolute',
		'top':top,
		'left':left,
		'opacity':'0'
	}).stop().animate({
		'opacity':'1'
	},1000)
	getStartNumber = index
}
//判断滚动距离
function getCheck($wrap){
	var documentHeight = $(window).height()
	var scrollHeight = $(window).scrollTop()
	var $boxes = $wrap.children('div')
	var lastBoxTop = $boxes.eq($boxes.length - 1).offset().top
	var lastBoxHeight = $boxes.eq($boxes.length - 1).height() + 20
	var lastColHeight = lastBoxTop + lastBoxHeight
	return documentHeight + scrollHeight >=lastColHeight ? true : false
}
//追加元素
function appendBox($wrap){
	if(getCheck($wrap)){
		for(i in data){
			var innerString = '<div><img src="img/falls/'+data[i].src+'" /><a href="#">'+data[i].title+'</a></div>'
			$wrap.append(innerString)
		}
	}else{
		return false
	}
	waterfall($wrap,$wrap.children('div'))
}
//初始化
$(function(){
	var $wrap = $('#wrap')
	var $boxes = $wrap.children('div')
	waterfall($wrap,$boxes)
//	滚动事件
	$(this).scroll(function(event){	
		appendBox($wrap,$boxes)
	})
})
