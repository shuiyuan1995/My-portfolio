window.onload = function () {
	//获取事件源
	var banner = document.getElementById('banner');
	var ul = banner.children[0];
	var liArr = ul.children;
	var imgWidth = banner.offsetWidth;
	var spanArr = banner.children[1].children;
	//复制第一张图片所在的li,添加到ul的最后面。
	var ulNewLi = liArr[0].cloneNode(true);
	ul.appendChild(ulNewLi);
	//添加定时器,固定向右切换图片
	var key = 0;
	var timer = setInterval(autoPlay,3000);
	function autoPlay() {
		key++;
		if(key > liArr.length-1){
			ul.style.left = 0;
            key = 0;
		}
		animate(ul,-key*imgWidth);
	}
	banner.onmouseover = function () {
        clearInterval(timer);
    }
    banner.onmouseout = function () {
        timer = setInterval(autoPlay,2000);
    }

    //左右切换图片
    spanArr[0].onclick = function () {
		key--;
		console.log(key);
		if(key < 0){
			ul.style.left = -5*imgWidth + "px";
            key = 4;
		}
		animate(ul,-key*imgWidth);
	}
	spanArr[1].onclick = function () {
		key++;
		if(key > liArr.length-1){
			ul.style.left = 0;
            key = 1;
		}
		animate(ul,-key*imgWidth);
	}
	function animate(ele,target){
        clearInterval(ele.timer);
        var speed = target>ele.offsetLeft?10:-10;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if(Math.abs(val)<Math.abs(speed)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },8)
    }
}