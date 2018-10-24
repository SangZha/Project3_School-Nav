$(document).ready(function() {
	buildPictures();
});

/* 生成地图导航区的图片 */	
	function buildPictures(){
		/* 给导航区图片的img标签赋值来生成图片 */
			$('.pictures-current').children('.pictures-img-label').attr('src','img/1-1500500.jpg');
			$('.pictures-up').children('.pictures-img-label').attr('src','img/1-1501500.jpg');
			$('.pictures-right').children('.pictures-img-label').attr('src','img/1-1500501.jpg');
			$('.pictures-bottom').children('.pictures-img-label').attr('src','img/1-1499500.jpg');
			$('.pictures-left').children('.pictures-img-label').attr('src','img/1-1500499.jpg');
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
			$('.pictures-current').children('.pictures-img-label').attr('src','img/1-'+ change_id +'.jpg');
			$('.pictures-up').children('.pictures-img-label').attr('src','img/1-'+ up_id +'.jpg')
			$('.pictures-right').children('.pictures-img-label').attr('src','img/1-'+ right_id +'.jpg')
			$('.pictures-bottom').children('.pictures-img-label').attr('src','img/1-'+ bottom_id +'.jpg')
			$('.pictures-left').children('.pictures-img-label').attr('src','img/1-'+ left_id +'.jpg')
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
	
	$('.order-post').click(function(){
		if($('.reply-input').is(':hidden')){
			if(!$('.reply-input').is(':animated')) {
			$('.reply-input').animate({
					height: 'show',
					paddingTop: 'show',
					paddingBottom: 'show'
				}, 500)
			}
		} 
		else {
			if(!$('.reply-input').is(':animated')) {
				$('.reply-input').animate({
					height: 'hide',
					paddingTop: 'hide',
					paddingBottom: 'hide'
				}, 500)
			}
		}
});
	

    //replybox_location 存放评论框的位置
    var replybox_location = $(this).parents('.comments-info').children(".comments-box");
    //textarea_length 存放动态出现的评论框中的内容
    var textarea_length = replybox_location.find('.comments-box-textarea').val();
    //replyto_id 获取当前 回复按键 评论的ID
    var replyto_id
    //replyto_userid 获取当前 回复按键 被回复者的ID
    var replyto_userid;
    //replyto_name 获取当前 回复按键 被回复者的名字
    var replyto_name;

    $(".comments-meta-reply,.replies-meta-reply").click(function () {
        replybox_location = $(this).parents('.comments-info').children(".comments-box");
        textarea_length = replybox_location.find('.comments-box-textarea').val();

//增加一个if事件，判断是否是回复他人，如果是在textarea中提前放好被回复人姓名
        if ($(this).is('.replies-meta-reply')) {          
            replyto_id = $(this).parents('.replies-li-lable').data('id');              
            replyto_name = $(this).parent().prev().children('.replies-info-username').text();
            replyto_userid = $(this).parents('.comments-info').children('.comments-info-username').data("uid");

            //如果当前 回复按键 存在回复框
            if ($(this).parents('.comments-replies').next().hasClass('active')) {     // <-- 再进行一次判断，为了区分同一评论中的回复楼层和回复楼中楼
                //如果当前动态生成评论框未输入文字
                if (textarea_length == '') {
                    //动态添加目标名称
                    replybox_location.find('.comments-box-textarea').val("回复 " + replyto_name + " :");
                    //对 data-* 进行修改 不然传值后对象就错了
                        $(".comments-box-post").data("aid", replyto_id);
                        $(".comments-box-post").data("uid", replyto_userid);
                        $(".comments-box-post").attr("data-aid", replyto_id);
                        $(".comments-box-post").attr("data-uid", replyto_userid);
                }
                else if (replybox_location.find('.comments-box-textarea').val() == "回复 " + replyto_name + " :") {
                    $(".comments-box").removeClass('active');
                }
                else {
                    //删除(达到点击出现再点消失)
                    replybox_location.find('.comments-box-textarea').val("回复 " + replyto_name + " :");
                        $(".comments-box-post").data("aid", replyto_id);
                        $(".comments-box-post").data("uid", replyto_userid);
                        $(".comments-box-post").attr("data-aid", replyto_id);
                        $(".comments-box-post").attr("data-uid", replyto_userid);
                }
            }
            else {
                if ($(".comments-li-lable").find(".comments-box").hasClass('active')) {  //如果 评论区列表 存在回复框
                    $(".comments-box").removeClass('active');   //删除(达到整个评论区回复框只出现一个的效果)
                }
				replybox_location.find('.comments-box-textarea').val("回复 " + replyto_name + " :");
                $(this).parents('.comments-replies').next().addClass('active');
					$(".comments-box-post").data("aid", replyto_id);
					$(".comments-box-post").data("uid", replyto_userid);
					$(".comments-box-post").attr("data-aid", replyto_id);
					$(".comments-box-post").attr("data-uid", replyto_userid);
            }
        }
//内容同上，只有textarea少一个name而已
        else {
            replyto_id = $(this).parents('.comments-li-lable').data('id');  
            replyto_userid = $(this).parent().prev().prev().data('uid');

            if ($(this).parents('.comments-info').children('.comments-box').hasClass('active')) {
                if (textarea_length == '') {
                    $(".comments-box").removeClass('active');
                }
                else {
                    replybox_location.find('.comments-box-textarea').val('');
                    $(".comments-box-post").data("aid", replyto_id);
                    $(".comments-box-post").data("uid", replyto_userid);
                    $(".comments-box-post").attr("data-aid", replyto_id);
                    $(".comments-box-post").attr("data-uid", replyto_userid);
                }
            }
            else {
                if ($(".comments-li-lable").children(".comments-box").hasClass('active')) {
                        $(".comments-box").removeClass('active');   
                }
                replybox_location.addClass('active')
					$(".comments-box-post").data("aid", replyto_id);
					$(".comments-box-post").data("uid", replyto_userid);
					$(".comments-box-post").attr("data-aid", replyto_id);
					$(".comments-box-post").attr("data-uid", replyto_userid);
            }
        }
    });
