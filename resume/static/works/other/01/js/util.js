var util = {
	extend: function (o1,o2) {
		for (var key in o2) {
			if (o2.hasOwnProperty(key)) {
				o1[key] = o2[key];
			}
		}
	},
	// function { loadImage } 加载图片资源
	// param { imgUrl: Object } 按照key，val形式存储要加载图片资源
	// param { fn: Function } 加载完毕之后，把资源传给这个回调
	loadImg:function (imgUrl, fn) {
		// 保存图片
		var imgObj = {};
		var tempImg, loaded = 0, imgLenght = 0;

		for (var key in imgUrl) {
			// 初始化要加载图片的总数
			imgLenght++;
			tempImg = new Image();
			tempImg.onload = function () {
				// 统计已经加载完毕的图像
				loaded++
				// 所有的图片都加载完毕
				if (loaded >= imgLenght) {
					fn(imgObj);
				}
			}
			tempImg.src = imgUrl[key];
			imgObj[key] = tempImg;
		}
	}
}