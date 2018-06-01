(function (w) {
	// 角度转换为弧度
	function angleToRadian(angle) {
		return Math.PI / 180 *angle;
	}
	// 混入式继承
	function extend(o1,o2) {
		for (var key in o2) {
			if (o2.hasOwnProperty(key)) {
				o1[key] = o2[key];
			}
		}
	}
/*
 constrcutor { Pipe } 饼图构造函数
 param { x: number } 圆心x轴坐标
 param { y: number } 圆心y轴坐标
 param { r: number } 圆半径
 param { data: Array } 绘制饼图所需的数据
*/
function Pipe(x,y,r,data) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.data = data;
	this.colors = ["orange","orchid","palegoldenrod", "palegreen", "paleturquoise", "peru", "pink"];
}
extend(Pipe.prototype, {
	draw:function () {
		var _this = this;
		var num = 0;
		this.data.forEach(function (obj) {
			num += obj.val;
		})
		var baseAngle = 360/num;
		var startAngle = 0;
		var endAngle = 0;
		var lineAngle = 0,
		lineX,lineY;

		// 画扇形
		this.data.forEach(function (obj,i) {
			startAngle = endAngle;
			endAngle = endAngle + baseAngle * obj.val;
			lineAngle = startAngle + baseAngle * obj.val/2;
			lineX = _this.x + (_this.r + 20) * Math.cos(angleToRadian(lineAngle));
			lineY = _this.y + (_this.r + 20) * Math.sin(angleToRadian(lineAngle));
			// 画扇形
			ctx.beginPath();
			ctx.moveTo(_this.x,_this.y);
			ctx.arc(_this.x,_this.y,_this.r,angleToRadian(startAngle),angleToRadian(endAngle));
			ctx.closePath();
			ctx.fillStyle = _this.colors[i];
			ctx.fill();
			// 画平分线
			ctx.beginPath();
			ctx.moveTo(_this.x,_this.y);
			ctx.lineTo(lineX,lineY);
			ctx.strokeStyle = _this.colors[i];
			ctx.stroke();
			//文字
			if (lineAngle>=90 && lineAngle <= 270) {
				ctx.textAlign = "right";
			}else{
				ctx.textAlign = "left";
			}
			ctx.fillText(obj.msg,lineX,lineY);
		});
	}
});
w.Pipe = Pipe;
}(window));