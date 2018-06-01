var canvasw = window.innerWidth;
var canvash = window.innerHeight;

var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

// canvas.width = canvasw;
// canvas.height = canvash;

var img = new Image();
var radius = 50;
var clippingRegion = {x:-1,y:-1,r:radius};
var leftm = 0,
	topm = 0;
img.src = "demo.jpg";
img.onload = function (e) {
	$("#blur-div").css({
		width:canvasw + "px",
		height:canvash + "px"
	});
	$("#blur-img").css({
		width:img.width + "px",
		height:img.height + "px"
	});

	if (img.width < canvasw) {
		canvas.width = img.width;
		$("#canvas").css("left",(canvasw-img.width)/2 + "px");
	}else{
		canvas.width = canvasw;
	}
	if (img.height < canvash) {
		canvas.height = img.height;
		$("#canvas").css("top",(canvash-img.height)/2 + "px");
	}else{
		canvas.height = canvash;
	}
	$("#blur-img").css("left",(canvasw-img.width)/2 + "px");
	$("#blur-img").css("top",(canvash-img.height)/2 + "px");

	leftm = (img.width - canvas.width)/2;
	topm = (img.height - canvas.height)/2;
	console.log(leftm,topm)

	initCanvas();
}

function initCanvas() {
	clippingRegion = {x:radius+Math.random()*(canvas.width-2*radius),y:radius+Math.random()*(canvas.height-2*radius),r:radius};
	draw(img,clippingRegion);
}

function setClippingRegion(clip) {
	context.beginPath();
	context.arc(clip.x,clip.y,clip.r,0,Math.PI*2,false);
	context.clip();
}

function draw(img,clip) {
	context.clearRect(0,0,canvas.width,canvas.height);

	context.save();
	setClippingRegion(clip);
	context.drawImage(img,leftm,topm,canvas.width,canvas.height,0,0,canvas.width,canvas.height);
	context.restore();
}

function show() {
	var timer = setInterval(function () {
		if (clippingRegion.r >= 2*Math.max(canvas.width,canvas.height)) {
			clearInterval(timer);
		}
		clippingRegion.r += 20; 
		draw(img,clippingRegion);
	},30);
}

function reset() {
	initCanvas();
}
canvas.addEventListener("touchstart",function (e) {
	e.preventDefault();
})