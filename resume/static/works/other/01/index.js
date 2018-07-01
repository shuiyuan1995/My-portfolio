(function (w) {
	function extend(o1,o2) {
		for (var key in o2) {
			if (o2.hasOwnProperty(key)) {
				o1[key] = o2[key];
			}
		}
	}
	/*
		绘制背景
		construcotor { Sky } 背景构造函数
		parasm { ctx: Context } 绘制环境
		parasm { img: Image } 背景图像
		parasm { speed: number } 背景速度
	*/
	function Sky(ctx, img, speed) {
		this.ctx = ctx;
		this.img = img;
		this.width = this.img.width;
		this.height = this.img.height;
		this.speed = speed || 2;

		// 每创建一个实例，len自增
		Sky.len++;

		this.x = this.width * (Sky.len - 1);
		this.y = 0;
	}
	Sky.len = 0;

	Sky.prototype = {
		construcotor:Sky,

		// 绘制背景
		draw:function () {
			this.ctx.drawImage(this.img, this.x, this.y);
		},
		update:function () {
			this.x -= this.speed;
			if (this.x <= -this.width) {
				this.x += this.width * Sky.len;
			}
		}
	};

	/*
	    constructor { Bird } 鸟构造函数
	    param { ctx: Context } 绘图环境
	    param { img: Image } 鸟图
	    param { widthFrame: number } 一排的帧数
	    param { heightFrame: number } 一列的帧数
	    param { x: number } 鸟的起始x轴坐标
	    param { y: number } 鸟的起始y轴坐标
    */

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

	/*
	    constrcutor { Land } 大地
	    param { ctx: Context } 绘图环境
	    param { img: Image } 绘制的图像资源
	    param { speed: number } 速度
    */

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

	extend(Land.prototype, {
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

	/*
	    constructor { Pipe } 管道
	    param { ctx: Context } 绘图环境
	    param { imgDown：Image } 口朝下的管道，在画布的上面
	    param { imgUp：Image } 口朝上的管道，在画布的下面
	    param { space：number } 上下管道的间距
	    param { landHeight：number } 大地的高度
	    param { speed：number } 速度
    */

    function Pipe(ctx,imgDown,imgUp,space,landHeight,speed) {
    	this.ctx = ctx;
        this.imgDown = imgDown;
        this.imgUp = imgUp;
        this.space = space;
        this.landHeight = landHeight;
        this.speed = speed;

        // 管道最小高度
        this.minHeight = 100;

        // 管道默认的宽高
        this.width = this.imgDown.width;
        this.height = this.imgDown.height;

        Pipe.len++;

        this.x = 300 + this.width * 3 * (Pipe.len - 1);
        this.y = 0;

        this._init();

    }
    Pipe.len = 0;

    extend(Pipe.prototype, {
    	// 初始化管道的坐标
    	_init:function () {
    		var maxHeight = this.ctx.canvas.height - this.landHeight - this.space - this.minHeight;

    		var randomHeight = Math.random() * maxHeight;
    		randomHeight = randomHeight < this.minHeight ? this.minHeight : randomHeight;

            this.downY = randomHeight - this.height;
            this.upY = randomHeight + this.space;         
        },         
        // 绘制管道         
        draw:function (){             
        	this.ctx.drawImage(this.imgDown,this.x,this.downY);
        	this.ctx.drawImage(this.imgUp,this.x,this.upY);
        	this._drawPath();         
        },        
        // 根据管道的宽高和坐标绘制对应的路径
		_drawPath:function () {
			this.ctx.rect(this.x,this.downY,this.width,this.height);
			this.ctx.rect(this.x,this.upY,this.width,this.height);
			this.ctx.stroke();         
		},  
		update:function () {
			this.x -= this.speed;
			if (this.x <= -this.width) {
				this._init();
				this.x += this.width * 3 * Pipe.len;
			}
		}
	})

	w.Sky = Sky;
	w.Bird = Bird;
	w.Land = Land;
	w.Pipe = Pipe;
}(window))