(function (w) {
	function extend(o1,o2) {
		for (var key in o2) {
			if (o2.hasOwnProperty(key)) {
				o1[key] = o2[key];
			}
		}
	}
	/*
		constructor { Person } 构造函数
		param { ctx: Context } 绘制环境
		param { img: Image } 绘制的图像
		param { widthFrame: number } 图像一排有多少个人
		param { heightFrame: number } 图像一列有多少个人
		param { x: number } 指定人物绘制的x轴坐标
		param { y: number } 指定人物绘制的y轴坐标
		param { renderWidth: number } 人物绘制时的宽
		param { renderHeight: number } 人物绘制时的高
	*/
	function Person(ctx, img, widthFrame, heightFrame, x, y, renderWidth, renderHeight) {
		this.ctx = ctx;
		this.img = img;
		this.widthFrame = widthFrame;
		this.heightFrame = heightFrame;

		this.x = x;
		this.y = y;
		this.renderWidth = renderWidth;
		this.renderHeight = renderHeight;

		// 一个人的宽和高
		this.width = this.img.width / this.widthFrame;
		this.height = this.img.height / this.heightFrame;

		// 当前绘制某个方向的第几帧
		this.currentFrame = 0;

		// 当前行走的方向，默认是第一排的方向
		this.direction = 0;
	}

	extend(Person.prototype, {
		// 绘制
		draw:function () {
			this.ctx.drawImage(this.img,this.width * this.currentFrame,this.height * this.direction,this.width,this.height,this.x,this.y,this.renderWidth,this.renderHeight);
		},
		// 绑定事件
		bind:function () {
			var _this = this;
			document.addEventListener('keydown',function (e) {
				switch(e.keyCode){
					case 37:
						_this.direction = 1;
						break;
					case 38:
						_this.direction = 3;
						break;
					case 39:
						_this.direction = 2;
						break;
					case 40:
						_this.direction = 0;
						break;
				}
			});
		},
		// 更新小人的数据
		update:function () {
			switch(this.direction){
				// 向下
				case 0:
					this.y += 2;
					this.y = this.y > this.ctx.canvas.height ? -this.height : this.y;
					break;
				// 向左
				case 1:
					this.x -= 2;
					this.x = this.x < -this.width ? this.ctx.canvas.width : this.x;
					break;
				// 向右
				case 2:
					this.x += 2;
					this.x = this.x > this.ctx.canvas.width ? -this.width : this.x;
					break;
				// 向上
				case 3:
					this.y -= 2;
					this.y = this.y < -this.height ? this.ctx.canvas.height : this.y;
					break;
			}
		}
	});
	w.Person = Person;
}(window))