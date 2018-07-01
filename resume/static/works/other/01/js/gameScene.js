(function (w) {
	// constructor { Scene } 游戏场景
	// param { ctx: Context } 绘图环境
	// param { imgObj: Object } 创建角色所需的图像资源
	function Scene(ctx,imgObj) {
		this.ctx = ctx;
		this.imgObj = imgObj;

		this.listeners = [];

		// 存储游戏所需的所有角色
		this.roles = [];
		this._initRoles();
	}
	Scene.prototype = {
		constructor:Scene,
		_initRoles:function () {
			//创建背景
            this.roles.push(getSky(this.ctx,this.imgObj.sky,3));
            this.roles.push(getSky(this.ctx,this.imgObj.sky,3));

            //管道
            for (var i = 0; i < 6; i++) {
                this.roles.push(getPipe(this.ctx,this.imgObj.pipeDown,this.imgObj.pipeUp, 150, this.imgObj.land.height,3));
            }

            //大地
            for (var i = 0; i < 4; i++) {
                this.roles.push(getLand(this.ctx,this.imgObj.land,3));
            }

            //创建鸟
            this.roles.push(getBird(this.ctx,this.imgObj.bird,3,1,10,10));
		},
		// 添加听众
		addListener:function (listener) {
			this.listeners.push(listener);
		},
		// 监听小鸟死亡
        triggerBirdOver: function() {
            // 死亡时告知所有的听众
            this.listeners.forEach( function( liste ) {
                liste();
            });
        },
		//开始游戏
		draw:function () {
			//判断小鸟有没有碰撞
            var bird = getBird();
            var birdCoreX = bird.x + bird.width / 2;
            var birdCoreY = bird.y + bird.height / 2;
            if ( this.ctx.isPointInPath( birdCoreX, birdCoreY )
                || birdCoreY < 0
                || birdCoreY > (this.ctx.canvas.height - this.imgObj.land.height) ){

                // 监听到了小鸟死亡
                this.triggerBirdOver();
            }else{
            	this.ctx.beginPath();
	            this.roles.forEach(function (role) {
	                role.draw();
	                role.update();
	            });
            }	
		}
	};
	w.getGameScene = function (ctx,imgObj) {
		return new Scene(ctx,imgObj);
	}
}(window))