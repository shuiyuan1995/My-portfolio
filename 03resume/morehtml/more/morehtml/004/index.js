var canvasw = Math.min(600, $(window).width() - 20);
var canvash = canvasw;

var strokeColor = "black";
var isMouseDown = false;
var lastLoc = {x:0,y:0};
var lastTimestamp = 0;
var lastLineWidth = -1;

var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

canvas.width = canvasw;
canvas.height = canvash;

$("#controller").css("width",canvasw+"px")

drawGrid();
$("#clearbtn").click(function (e) {
	context.clearRect(0,0,canvasw,canvash);
	drawGrid();
})
$(".colorbtn").click(function (e) {
	$(".colorbtn").removeClass("colorbtnselected");
	$(this).addClass("colorbtnselected");
	strokeColor = $(this).css("background-color");
})

function beginStroke(point) {
	isMouseDown = true;
	lastLoc = wondowToCanvas(point.x,point.y);
	lastTimestamp = new Date().getTime();
}

function endStroke() {
	isMouseDown = false;
}

function moveStroke(point) {
	var curLoc = wondowToCanvas(point.x,point.y);
	var curTimestamp = new Date().getTime();
	var s = calcDistance(curLoc,lastLoc);
	var t = curTimestamp - lastTimestamp;
	var lineWidth = calcLineWidth(t,s);

	context.beginPath();
	context.moveTo(lastLoc.x,lastLoc.y);
	context.lineTo(curLoc.x,curLoc.y);

	context.strokeStyle = strokeColor;
	context.lineWidth = lineWidth;
	context.lineCap = "round";
	context.lineJoin = "round";
	context.stroke();

	lastLoc = curLoc;
	lastTimestamp = curTimestamp;
	lastLineWidth = lineWidth;
}

canvas.onmousedown = function (e) {
	e.preventDefault();
	beginStroke({x:e.clientX,y:e.clientY});
}
canvas.onmouseup = function (e) {
	e.preventDefault();
	endStroke();
}
canvas.onmouseout = function (e) {
	e.preventDefault();
	endStroke();
}
canvas.onmousemove = function (e) {
	e.preventDefault();
	if (isMouseDown) {
		moveStroke({x:e.clientX,y:e.clientY});
	}
}
canvas.addEventListener('touchstart',function (e) {
	e.preventDefault();
	touch = e.touches[0];
	beginStroke({x:touch.pageX,y:touch.pageY});
});
canvas.addEventListener("touchmove",function (e) {
	e.preventDefault();
	if (isMouseDown) {
		touch = e.touches[0];
		moveStroke({x:touch.pageX,y:touch.pageY});
	}
});
canvas.addEventListener("touchend",function (e) {
	e.preventDefault();
	endStroke();
});

function calcLineWidth(t,s) {
	var v = s/t;
	var resultLineWidth;
	if (v <= 0.1) {
		resultLineWidth = 25;
	}else if (v >= 10) {
		resultLineWidth = 1;
	}else{
		resultLineWidth = 30 - (v-0.1)/(10-0.1)*(30-1)
	}
	if (lastLineWidth == -1) {
		return resultLineWidth;
	}
	return lastLineWidth*2/3 + resultLineWidth*1/3;
}

function calcDistance(loc1,loc2) {
	return Math.sqrt((loc1.x - loc2.x)*(loc1.x - loc2.x) + (loc1.y - loc2.y)*(loc1.y - loc2.y));
}

function wondowToCanvas(x,y) {
	var bbox = canvas.getBoundingClientRect();
	return {x:Math.round(x-bbox.left),y:Math.round(y-bbox.top)};
}

function drawGrid() {

	context.save();

	context.strokeStyle = "rgb(230,11,9)";

	context.beginPath();
	context.moveTo(3,3);
	context.lineTo(canvasw - 3,3);
	context.lineTo(canvasw - 3, canvash - 3);
	context.lineTo(3, canvash - 3);
	context.closePath();

	context.lineWidth = 6;
	context.stroke();

	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(canvasw,canvash);

	context.moveTo(canvasw,0);
	context.lineTo(0,canvash);

	context.moveTo(canvasw/2,0);
	context.lineTo(canvasw/2,canvash);

	context.moveTo(0,canvash/2);
	context.lineTo(canvasw,canvash/2);

	context.lineWidth = 1;
	context.setLineDash([5,8]);
	context.stroke();

	context.restore();
}

	