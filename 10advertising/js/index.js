$(function(){
	var ismoving = false
	// 初始化
	var direction = {up:1,right:2,down:3,left:4}
	//初始化两个坐标
	var now = {col:1,row:1}
	var last = {col:0,row:0}

	// 滑动事件
	$('.page').swipeUp(function() {
		if (ismoving) {
			return
		}
		 last.col = now.col
		 last.row = now.row
		 if (last.col < 5) {
		 	now.col = last.col + 1
		 	now.row = last.row
		 	movePage(direction.up)
		 }		 
	})
	$('.page').swipeLeft(function() {
		if (ismoving) {
			return
		}
		 last.col = now.col
		 last.row = now.row
		 if (last.row == 1 && last.col != 1 && last.col != 5) {
		 	now.col = last.col
		 	now.row = last.row + 1
		 	movePage(direction.left)
		 }		 
	})
	$('.page').swipeRight(function() {
		if (ismoving) {
			return
		}
		 last.col = now.col
		 last.row = now.row
		 if (last.row == 2 && last.col != 1 && last.col != 5) {
		 	now.col = last.col
		 	now.row = last.row - 1
		 	movePage(direction.right)
		 }	
	})
	$('.page').swipeDown(function() {
		if (ismoving) {
			return
		}
		 last.col = now.col
		 last.row = now.row
		 if (last.col > 1) {
		 	now.col = last.col - 1
		 	now.row = last.row
		 	movePage(direction.down)
		 }			 
	})
	// 定义滑动功能
	function movePage(dir){
		//初始化参与动画页面
		var lastPage = '.page-' + last.col + '-' + last.row
		var nowPage = '.page-' + now.col + '-' + now.row
		// 初始化动画类
		var inClass = ''
		var outClass = ''
		switch (dir){
			case direction.up:
				outClass = 'pt-page-moveToTop'
				inClass = 'pt-page-moveFromBottom'
				break
			case direction.right:
				outClass = 'pt-page-moveToRight'
				inClass = 'pt-page-moveFromLeft'
				break
			case direction.down:
				outClass = 'pt-page-moveToBottom'
				inClass = 'pt-page-moveFromTop'
				break
			case direction.left:
				outClass = 'pt-page-moveToLeft'
				inClass = 'pt-page-moveFromRight'
				break
		}
		ismoving = true
		$(lastPage).addClass(outClass)
		$(nowPage).removeClass('hide')
		$(nowPage).addClass(inClass)
		$(nowPage).find('img').addClass('hide')

		setTimeout(function () {
			$(lastPage).removeClass(outClass)
			$(lastPage).addClass('hide')
			$(lastPage).find('img').addClass('hide')
			$(nowPage).find('img').removeClass('hide')
			$(nowPage).removeClass(inClass)
			ismoving = false
		},600)
	}
})