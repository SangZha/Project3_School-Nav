 $('.comment-icon-first').on('mousemove', function (e) {
			var oEvent = e|| window.event;
			var oTotalWidth = $(this).width();
			var oTotalHeight = $(this).height();
			var oMinWidth = oEvent.offsetX - 3/10*oTotalWidth;
			var oMaxWidth = oEvent.offsetX - 7/10*oTotalWidth;
			var oCurrentWidth = oEvent.offsetX - 1/2*oTotalWidth;
			var oCurrentHeight = oEvent.offsetY - 1/2*oTotalHeight;
			if(oMinWidth > 0 && oMaxWidth < 0){		
				if(oCurrentWidth >= 0){
					$('.icon-sun').removeClass('sun-move-right').addClass('sun-move-left');
				}
				else{
					$('.icon-sun').removeClass('sun-move-left').addClass('sun-move-right');
				}
			}
	});
		$('.comment-icon-first').on('mouseleave', function () {
				$('.icon-sun').removeClass('sun-move-right').removeClass('sun-move-left');
		});
	
	$('.comment-icon-second,.comment-icon-third').on('mouseover',function(){
		$(this).children('.cloud-1').addClass('cloud-move-1');
		$(this).children('.cloud-2').addClass('cloud-move-2');
		$(this).children('.cloud-3').addClass('cloud-move-3');
	});
		$('.comment-icon-second,.comment-icon-third').on('mouseleave', function () {
			$('.cloud-1').removeClass('cloud-move-1');
			$('.cloud-2').removeClass('cloud-move-2');
			$('.cloud-3').removeClass('cloud-move-3');
		});
		
	$('.flower-1,.flower-2,.flower-3,.flower-4').on('mouseover', function () {
			$(this).addClass('flower-over-padding');
	});
	$('.flower-1,.flower-2,.flower-3,.flower-4').on('mouseout', function () {
				$(this).removeClass('flower-over-padding');
		});		
		
/* 生成地图导航区的图片 */	
	function buildPictures(){
		/* 给导航区图片的img标签赋值来生成图片 */
			$('.pictures-current').children('.pictures-img-label').attr('src','../img/1-1500500.jpg');
			$('.pictures-up').children('.pictures-img-label').attr('src','../img/1-1501500.jpg');
			$('.pictures-right').children('.pictures-img-label').attr('src','../img/1-1500501.jpg');
			$('.pictures-bottom').children('.pictures-img-label').attr('src','../img/1-1499500.jpg');
			$('.pictures-left').children('.pictures-img-label').attr('src','../img/1-1500499.jpg');
		/* 生成 存放图片的div的 data-*的属性，方便跳转 */
			$('.pictures-current').data('id','1500500');		
			$('.pictures-up').data('id','1501500');		
			$('.pictures-right').data('id','1500501');		
			$('.pictures-bottom').data('id','1499500');
			$('.pictures-left').data('id','1500499');
		/* 更改 存放图片的div的 data-*的属性的前端显示 */
			$('.pictures-current').attr('data-id','1500500');
			$('.pictures-up').attr('data-id','1501500');
			$('.pictures-right').attr('data-id','1500501');
			$('.pictures-bottom').attr('data-id','1499500');
			$('.pictures-left').attr('data-id','1500499');
		/* 生成 图片跳转的 data-*的属性，方便跳转 */	
			$('.skip-icon-up').data('id','1501500');		
			$('.skip-icon-right').data('id','1500501');		
			$('.skip-icon-bottom').data('id','1499500');
			$('.skip-icon-left').data('id','1500499');
		/* 更改 图片跳转的 data-*的属性的前端显示 */
			$('.skip-icon-up').attr('data-id','1501500');
			$('.skip-icon-right').attr('data-id','1500501');
			$('.skip-icon-bottom').attr('data-id','1499500');
			$('.skip-icon-left').attr('data-id','1500499');
	}
/* 更换地图导航区的的图片的data的id */
	function changePictures(skip_direction,change_id){
		/* 记录将要跳转的上下左右的图片id */
		var up_id = change_id*1 + 1000*1;
		var right_id = change_id*1 + 1*1;
		var bottom_id = change_id*1 - 1000*1;
		var left_id = change_id*1 - 1*1;
		
		/* 更改 存放图片的div的 data-*的属性*/
			$('.pictures-current').data('id',change_id);		
			$('.pictures-up').data('id',up_id);		
			$('.pictures-right').data('id',right_id);		
			$('.pictures-bottom').data('id',bottom_id);
			$('.pictures-left').data('id',left_id);
			
			$('.pictures-current').attr('data-id',change_id);
			$('.pictures-up').attr('data-id',up_id);
			$('.pictures-right').attr('data-id',right_id);
			$('.pictures-bottom').attr('data-id',bottom_id);
			$('.pictures-left').attr('data-id',left_id);
		/* 更改 图片跳转的 data-*的属性*/
			$('.skip-icon-up').data('id',up_id);		
			$('.skip-icon-right').data('id',right_id);		
			$('.skip-icon-bottom').data('id',bottom_id);
			$('.skip-icon-left').data('id',left_id);
			
			$('.skip-icon-up').attr('data-id',up_id);
			$('.skip-icon-right').attr('data-id',right_id);
			$('.skip-icon-bottom').attr('data-id',bottom_id);
			$('.skip-icon-left').attr('data-id',left_id);	
		/* 在下滑动画结束后根据所选方向更改的图片的地址 */
		setTimeout(function(){
			$('.pictures-current').children('.pictures-img-label').attr('src','../img/1-'+ change_id +'.jpg');
			$('.pictures-up').children('.pictures-img-label').attr('src','../img/1-'+ up_id +'.jpg')
			$('.pictures-right').children('.pictures-img-label').attr('src','../img/1-'+ right_id +'.jpg')
			$('.pictures-bottom').children('.pictures-img-label').attr('src','../img/1-'+ bottom_id +'.jpg')
			$('.pictures-left').children('.pictures-img-label').attr('src','../img/1-'+ left_id +'.jpg')
		},500); 
	}

	$('.skip-icon-up').on('click',function(){
		var skip_direction = $('.pictures-up');
		var current_id = $('.pictures-current').data('id');
		var next_id  = current_id*1 + 1000*1;
			
		if(next_id >= 1501499){
			$(this).addClass('invisible');
		}
		if(next_id <= 1501499){
			$('.skip-icon-bottom').removeClass('invisible');
		}
		
		$('.pictures-current').animate({top:'100%',bottom:'-100%'}, {duration: 500});
		$('.pictures-up').animate({top:'0',bottom:'0'}, {duration: 500});

		changePictures(skip_direction,next_id);
		
		setTimeout(function(){
			$('.pictures-current').animate({top:'0',bottom:'0'}, {duration: 0});
			$('.pictures-up').animate({top:'-100%',bottom:'100%'}, {duration: 0});
		},200);  
	});
	
	$('.skip-icon-right').on('click',function(){
		var skip_direction = $('.pictures-right');
		var current_id = $('.pictures-current').data('id');
		var next_id  = current_id*1 + 1*1;

		if(next_id == 1500501 || next_id == 1501501 || next_id == 1499501){
			$(this).addClass('invisible');
		}
		else{
			$('.skip-icon-left').removeClass('invisible');
		}
		
		$('.pictures-current').animate({left:'-100%',right:'100%'}, {duration: 500});
		$('.pictures-right').animate({left:'0',right:'0'}, {duration: 500});

		changePictures(skip_direction,next_id);
		
		setTimeout(function(){
			$('.pictures-current').animate({left:'0',right:'0'}, {duration: 0});
			$('.pictures-right').animate({left:'100%',right:'-100%'}, {duration: 0});
		},200);  
	});
	
	$('.skip-icon-bottom').on('click',function(){
		var skip_direction = $('.pictures-bottom');
		var current_id = $('.pictures-current').data('id');
		var next_id  = current_id*1 - 1000*1;
		
		if(next_id <= 1499501){
			$(this).addClass('invisible');
		}
		if(next_id >= 1499501){
			$('.skip-icon-up').removeClass('invisible');
		}
		
		$('.pictures-current').animate({top:'-100%',bottom:'100%'}, {duration: 500});
		$('.pictures-bottom').animate({top:'0',bottom:'0'}, {duration: 500});

		changePictures(skip_direction,next_id);
		
		setTimeout(function(){
			$('.pictures-current').animate({top:'0',bottom:'0'}, {duration: 0});
			$('.pictures-bottom').animate({top:'100%',bottom:'-100%'}, {duration: 0});
		},200); 
	});
	
	$('.skip-icon-left').on('click',function(){
		var skip_direction = $('.pictures-left');
		var current_id = $('.pictures-current').data('id');
		var next_id  = current_id*1 - 1*1;
		
		if(next_id == 1500499 || next_id == 1501499 || next_id == 1499499){
			$(this).addClass('invisible');
		}
		else{
			$('.skip-icon-right').removeClass('invisible');
		}
		
		$('.pictures-current').animate({left:'100%',right:'-100%'}, {duration: 500});
		$('.pictures-left').animate({left:'0',right:'0'}, {duration: 500});

		changePictures(skip_direction,next_id);
		
		setTimeout(function(){
			$('.pictures-current').animate({left:'0',right:'0'}, {duration: 0});
			$('.pictures-left').animate({left:'-100%',right:'100%'}, {duration: 0});
		},200); 
	});
	
	$('.navigation-a-lable').hover(function(){
		$(this).addClass('active');
		$(this).parent('.navigation-li-lable').addClass('active');
	},
	function(){
		$(this).removeClass('active');
		$(this).parent('.navigation-li-lable').removeClass('active');
	});

    $(document).on('ready', function () {
		buildPictures();
	});
