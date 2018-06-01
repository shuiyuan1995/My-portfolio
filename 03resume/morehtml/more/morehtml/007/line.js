/*
	constructor { line } 折线图构造函数
	param { ctx: Context } 绘图环境
	param { data: Array } 绘制折线图所需的数据
	param { padding: Object } 设置坐标轴到画布的边距
	param { arrow: Object } 设置箭头的宽高
*/
function Line(ctx,data,padding,arrow) {
	this.ctx = ctx;
	this.data = data;
	//坐标轴距离画布上下左右的边距
	this.padding = padding || {top: 10, right: 10, bottom: 10, left: 10}
	// 坐标轴中箭头的宽和高
	this.arrow = arrow || {width:6, height:10};
	// 坐标轴上顶点的坐标
	this.yTop = {x:this.padding.left, y:this.padding.top};
	// 坐标轴原点的坐标
	this.origin = {x:this.padding.left, y:this.ctx.canvas.height - this.padding.bottom};
	// 坐标轴右顶点的坐标
	this.xRight = {x:this.ctx.canvas.width - this.padding.right, y:this.ctx.canvas.height - this.padding.bottom};
	//坐标轴默认可显示数据的最大值
	this.maxX = this.ctx.canvas.width - this.padding.left - this.padding.right - this.arrow.height;
	this.maxY = this.ctx.canvas.height - this.padding.top - this.padding.bottom - this.arrow.height;
}
Line.prototype = {
	constructor:Line,
	draw:function () {
		this.drawCoord();
		this.drawArrow();
		this.drawLine();
	},
	// 坐标轴
	drawCoord:function () {
		this.ctx.beginPath();
		this.ctx.moveTo(this.yTop.x,this.yTop.y);
		this.ctx.lineTo(this.origin.x,this.origin.y);
		this.ctx.lineTo(this.xRight.x,this.xRight.y);
		this.ctx.stroke();
	},
	//箭头
	drawArrow:function () {
		// 上顶点箭头
		this.ctx.beginPath();
		this.ctx.moveTo(this.yTop.x,this.yTop.y+this.arrow.height/2);
		this.ctx.lineTo(this.yTop.x - this.arrow.width/2,this.yTop.y + this.arrow.height);
		this.ctx.lineTo(this.yTop.x,this.yTop.y);
		this.ctx.lineTo(this.yTop.x + this.arrow.width/2,this.yTop.y + this.arrow.height);
		this.ctx.lineTo(this.yTop.x,this.yTop.y+this.arrow.height/2)
		this.ctx.stroke();
		this.ctx.fill()
		// 右顶点箭头
		this.ctx.beginPath();
		this.ctx.moveTo(this.xRight.x - this.arrow.height/2,this.xRight.y);
		this.ctx.lineTo(this.xRight.x - this.arrow.height,this.xRight.y - this.arrow.width/2);
		this.ctx.lineTo(this.xRight.x,this.xRight.y);
		this.ctx.lineTo(this.xRight.x - this.arrow.height,this.xRight.y + this.arrow.width/2);
		this.ctx.lineTo(this.xRight.x - this.arrow.height/2,this.xRight.y);
		this.ctx.stroke();
		this.ctx.fill();
	},
	drawLine:function () {
		this.ctx.beginPath();
		var _this = this;

		// 数据缩放的比例
		var ratioX = this.maxX / this.data.length;
		var ratioY = this.maxY / Math.max.apply(null,this.data);
		var ratioData = this.data.map(function (val,i) {
			return val * ratioY;
		})
		//坐标轴中指定位置画点
		ratioData.forEach(function (val , index) {
			_this.ctx.fillRect(_this.origin.x + (index * ratioX), _this.origin.y - val,4,4);
		});
		//坐标轴中画折线
		ctx.beginPath();
		ratioData.forEach(function (val , index) {
			_this.ctx.lineTo(_this.origin.x + (index * ratioX) + 2, _this.origin.y - val + 2);
		});
		this.ctx.stroke();
	}
};