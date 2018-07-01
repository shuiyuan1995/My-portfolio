(function (w) {
	// constrcutor { Land } 大地
    // param { ctx: Context } 绘图环境
    // param { img: Image } 绘制的图像资源
    // param { speed: number } 速度
    function Land(ctx, img, speed) {
		this.ctx = ctx;
		this.img = img;
		this.speed = speed || 2;

		// 每创建一个实例，len自增
		Land.len++;

		this.x = this.img.width * (Land.len - 1);
		this.y = this.ctx.canvas.height - this.img.height;
	}
	Land.len = 0;

	util.extend(Land.prototype, {
		// 绘制背景
		draw:function () {
			this.ctx.drawImage(this.img, this.x, this.y);
		},
		update:function () {
			this.x -= this.speed;
			if (this.x <= -this.img.width) {
				this.x += this.img.width * Land.len;
			}
		}
	});
	w.getLand = function (ctx, img, speed) {
		return new Land(ctx, img, speed);
	};
}(window));