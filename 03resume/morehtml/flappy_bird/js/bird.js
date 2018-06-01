(function (w) {
	// constructor { Bird } 鸟构造函数
    // param { ctx: Context } 绘图环境
    // param { img: Image } 鸟图
    // param { widthFrame: number } 一排的帧数
    // param { heightFrame: number } 一列的帧数
    // param { x: number } 鸟的起始x轴坐标
    // param { y: number } 鸟的起始y轴坐标
    function Bird( ctx, img, widthFrame, heightFrame, x, y) {
		this.ctx = ctx;
		this.img = img;
		this.widthFrame = widthFrame;
		this.heightFrame = heightFrame;

		this.x = x;
		this.y = y;

		// 一个小鸟的宽和高
		this.width = this.img.width / this.widthFrame;
		this.height = this.img.height / this.heightFrame;

		//当前绘制某个方向的第几帧
		this.currentFrame = 0;

		//小鸟下落速度
		this.speed = 2;
		this.speedPlus = 0.5;

		this.bind();
	};
	Bird.prototype = {
		construcotor:Bird,
		// 绘制
		draw:function () {
			var baseRadian = Math.PI / 180 *10;
			var maxRadian = Math.PI / 180 *45;

			var rotateRadian = baseRadian * this.speed;

			rotateRadian = rotateRadian>= maxRadian?maxRadian:rotateRadian;
			this.ctx.save();

			this.ctx.translate(this.x + this.width/2, this.y + this.height/2);
			this.ctx.rotate(rotateRadian);
			this.ctx.drawImage(this.img,this.width*this.currentFrame,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
			this.ctx.restore();
		},
		update:function () {
			this.currentFrame = ++this.currentFrame >= this.widthFrame ? 0 :this.currentFrame;
			//小鸟下落
			this.y += this.speed;
			this.speed += this.speedPlus;
		},
		bind:function () {
			var _this = this;
			this.ctx.canvas.addEventListener('click',function () {
				_this.speed = -3;
			});
		}
	};
	var bird = null;
	w.getBird = function( ctx, img, widthFrame, heightFrame, x, y){
		if (!bird) {
			bird = new Bird( ctx, img, widthFrame, heightFrame, x, y);
		}
		return bird;
	};
}(window));