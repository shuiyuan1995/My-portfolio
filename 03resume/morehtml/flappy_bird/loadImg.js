
	// function { loadImage } 加载图片资源
	// param { imgUrl: Object } 按照key，val形式存储要加载图片资源
	// param { fn: Function } 加载完毕之后，把资源传给这个回调

function loadImg(imgUrl, fn) {
	var imgObj = {};
	var tempImg, loaded = 0, imgLenght = 0;

	for (var key in imgUrl) {
		// 初始化要加载图片的总数
		imgLenght++;
		tempImg = new Image();
		tempImg.onload = function () {
			// 统计已经加载完毕的图像
			loaded++
			if (loaded >= imgLenght) {
				fn(imgObj);
			}
		}
		tempImg.src = imgUrl[key];
		imgObj[key] = tempImg;
	}
}