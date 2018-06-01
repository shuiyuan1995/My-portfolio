$(function(){
	//一级菜单显示隐藏
	showhide()
	//二级菜单显示隐藏
	hoverSubMenu()
	//搜索框关键字匹配效果
	search()
	//分享显示隐藏
	share()
	//地址显示隐藏
	address()
	//地址切换
	clickTabs()
	//迷你购物车显示隐藏
	hoverMiniCart()
	//点击切换产品选项
	clickProductTabs()
	//移动小图片
	moveMiniImg()
	//悬停小图，显示对应大图
	hoverMiniImg()
	//中图放大镜
	bigImg()
	
	function bigImg(){
		var $mediumImg = $('#mediumImg')
		var $mask = $('#mask')
		var $maskTop = $('#maskTop')
		var $largeImgContainer = $('#largeImgContainer')
		var $loading = $('#loading')
		var $largeImg = $('#largeImg')
		var maskWidth = $mask.width()
		var maskHeight = $mask.height()
		var maskTopWidth = $maskTop.width()
		var maskTopHeight = $maskTop.height()
		
		$maskTop.hover(function(){
			$mask.show()
			var src = $mediumImg.attr('src').replace('-m.','-l.')
			$largeImg.attr('src',src)
			$largeImgContainer.show()
			$largeImg.on('load',function(){
				$maskTop.mousemove(function(event){
					var left = 0
					var top = 0
					var eventLeft = event.offsetX
					var eventTop = event.offsetY
					left = eventLeft - maskWidth/2
					top = eventTop - maskHeight/2
					left = left<0?0:left
					console.log(maskTopWidth)
					left = left>(maskTopWidth-maskWidth)?maskTopWidth-maskWidth:left
					top = top<0?0:top
					top = top>(maskTopHeight-maskHeight)?maskTopHeight-maskHeight:top
					$mask.css({
						left:left,
						top:top
					})
					var largeWidth = $largeImg.width()
					var largeHeight = $largeImg.height()
					left = left*largeWidth/maskTopWidth
					top = top*largeHeight/maskTopHeight
					$largeImg.css({
						left:-left,
						top:-top
					})
				})
				$largeImg.show()
				$loading.hide()
			})
		},function(){
			$mask.hide()
			$largeImgContainer.hide()
			$largeImg.hide()
		})
	}
	
	function hoverMiniImg(){
		$('#icon_list>li').hover(function(){
			var $img = $(this).children()
			$img.addClass('hoveredThumb')
			var src = $img.attr('src').replace('.jpg','-m.jpg')
			$('#mediumImg').attr('src',src)
		},function(){
			$(this).children().removeClass('hoveredThumb')
		})
	}
	
	function moveMiniImg(){
		var $as = $('#preview>h1>a')
		var $backward = $as.first()
		var $forward = $as.last()
		var $Ul = $('#icon_list')
		var SHOW_COUNT = 5
		var imgCount = $Ul.children('li').length
		var moveCount = 0
		var liWidth = $Ul.children(':first').width()
		if(imgCount>SHOW_COUNT){
			$forward.attr('class','forward')
		}
		$forward.click(function(){
			if(moveCount == imgCount-SHOW_COUNT){
				return
			}
			moveCount++
			$backward.attr('class','backward')
			if(moveCount == imgCount-SHOW_COUNT){
				$forward.attr('class','forward_disabled')
			}
			$Ul.css({
				left:-moveCount*liWidth
			})
		})
		$backward.click(function(){
			if(moveCount == 0){
				return
			}
			moveCount--
			$forward.attr('class','forward')
			if(moveCount == 0){
				$backward.attr('class','backward_disabled')
			}
			$Ul.css({
				left:-moveCount*liWidth
			})
		})
	}
	
	function clickProductTabs(){
		var $lis = $('#product_detail>ul>li')
		var $contents = $('#product_detail>div:gt(0)')
		$lis.click(function(){
			$lis.removeClass('current')
			this.className = 'current'
			$contents.hide()
			var index = $(this).index()
			$contents.eq(index).show()
		})
	}
	
	function hoverMiniCart(){
		$('#minicart').hover(function(){
			this.className = 'minicart'
			$(this).children(':last').show()
		},function(){
			this.className = ''
			$(this).children(':last').hide()
		})
	}
	
	function clickTabs(){
		$('#store_tabs>li').click(function(){
			$('#store_tabs>li').removeClass('hover')
			this.className = 'hover'
		})
	}
	
	function address(){
		var $select = $('#store_select')
		
		$select.hover(function(){
			$(this).children(':gt(0)').show()
		},function(){
			$(this).children(':gt(0)').hide()
		})
		.children(':last')
		.click(function(){
			$select.children(':gt(0)').hide()
		})
	}
	
	function share(){
		var isOpen = false
		var $shareMore = $('#shareMore')
		var $parent = $shareMore.parent()
		var $as = $shareMore.prevAll('a:lt(2)')
		var $b = $shareMore.children()
		
		$shareMore.click(function(){
			if (isOpen) {
				$parent.css('width',155)
				$as.hide()
				$b.removeClass('backword')
			} else{
				$parent.css('width',200)
				$as.show()
				$b.addClass('backword')
			}
			isOpen = !isOpen
		})
	}
	
	function search(){
		$('#txtSearch')
		.on('keyup focus',function(){
			var txt = this.value.trim()
			if(txt){
				$('#search_helper').show()
			}
		})
		.blur(function(){
			$('#search_helper').hide()
		})
	}
	
	function hoverSubMenu(){
		$('#category_items>div').hover(function(){
			$(this).children(':last').show()
		},function(){
			$(this).children(':last').hide()
		})
	}

	function showhide(){
		$('[name=show_hide]').hover(function(){
			var id = this.id + '_items'
			$('#'+id).show()
		},function(){
			var id = this.id + '_items'
			$('#'+id).hide()
		})
	}
	
})
