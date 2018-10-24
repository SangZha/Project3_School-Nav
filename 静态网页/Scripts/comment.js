	$('.up-title').hover(function(){
		$('.up-background,.up-title,.title-p-lable').removeClass('active');
	},
	function(){
		$('.up-background,.up-title,.title-p-lable').addClass('active');
	});

	$('.school-name').hover(function(){
		$('.school-name').addClass('hover');
	},
	function(){
		$('.school-name').removeClass('hover');
	});
	
	
	$('.select-li-lable').click(function() {
	//判断对象是显示还是隐藏
	if($(this).children('.select-school').is(':hidden')){
		//表示隐藏
		if(!$(this).children('.select-school').is(':animated')) {
			$('.province-icon').removeClass('active');
			$(this).children('.select-province').children('.province-icon').addClass('active');
			//如果当前没有进行动画，则添加新动画
			$(this).children('.select-school').animate({
					height: 'show'
				}, 500)
				//siblings遍历select-school的元素
				.end().siblings().find('.select-school').hide(1000);
		}
	} else {
		//表示显示
		if(!$(this).children('.select-school').is(':animated')) {
			$('.province-icon').removeClass('active');
			$(this).children('.select-school').animate({
					height: 'hide'
				}, 500)
				.end().siblings().find('.select-school').hide(1000);
		}
	}
});

	function search_province(n){
		var li_place = $('.select-li-lable:eq('+ n +')');
		$('.province-icon').removeClass('active');
		li_place.children('.select-province').children('.province-icon').addClass('active');
		
		li_place.children('.select-school').animate({
					height: 'show'
				}, 500)
				.end().siblings().find('.select-school').hide(1000);
	}
/* 搜索只用了 switch case 进行简单的数据对比， 之后必须考虑用户可以搜索学校， 并且不能使用switch 方法了。 （字符串匹配 abc.indexof("ab") != 0）*/
	$('.select-search').bind('input propertychange', function() {
    	var input_content = $('.select-search').val();
		
		switch(input_content){
			case("江"):case("江西"):case("江西省"):
				search_province(0);
				break;
			case("四"):case("四川"):case("四川省"):
				search_province(1);
				break;
			case("浙"):case("浙江"):case("浙江省"):
				search_province(2);
				break;
			case("广"):case("广东"):case("广东省"):
				search_province(3);
				break;
			case("湖"):case("湖南"):case("湖南省"):
				search_province(4);
				break;
			case("湖北"):case("湖北省"):
				search_province(5);
				break;
		}
});

	$('.suspension-userhead,.suspension-userpop-forhover').hover(function(){
		$('.suspension-userpop-forhover').addClass('active');
	},
	function(){
		$('.suspension-userpop-forhover').removeClass('active');
});
	
	$('.suspension-menu').click(function(){
		var usermode = $('.main-suspension').data('mode');
		var menu_li =$('.menupop-'+ usermode +'').children('.menupop-li-lable');
		if($(this).children().hasClass('active')){
			
			$(this).children().removeClass('active');
			menu_li.removeClass('active');
			
			menu_li.addClass('inactive');
			setTimeout(function(){
				menu_li.removeClass('inactive');
				$('.menupop-'+ usermode +'').removeClass('active');
			},600);
		}
		else{
			$(this).children().addClass('active');
			$('.menupop-'+ usermode +'').addClass('active');
			$('.menupop-'+ usermode +'').children('.menupop-li-lable').addClass('active');
		}
		
});

	$('.suspension-backtop').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 400);	
    });

    $('.toggle-post').click(function () {
        var url = window.location.search;
        var n = 1;
        if (url == '') {
            window.location.href = "/Comment/Post?id="+n+""; 
        }
        else {
            window.location.href = "/Comment/Post" +url+ ""; 
        }

    })
    $('.toggle-login').click(function () {
        window.location.href = "/Home/Home";
    })