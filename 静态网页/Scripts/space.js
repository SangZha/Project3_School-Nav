    $(function(){ 
        navigation_slide();
        $('.main-right-reply').addClass('active');
        $('.main-left-li').first().addClass('active');
    });

    $('.userprofile-username-span').hover(function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    });

    $('.userprofile-username-span').click(function(){
        $(this).addClass('hide');
        $(this).prev().addClass('active').focus();
    });
    $('.userprofile-username-input').blur(function(){
        $(this).removeClass('active');
        $(this).next().removeClass('hide');
    })
/* userinfo-userface 用户上传头像的接口 */
    $('.userinfo-userface').click(function(){
        alert("这里是用户上传头像的地方");
    })

    function navigation_slide(){
        var topX = $('.main-left-li').find('.active').parent().position().top;
        $('.main-left-slide').css('top',topX);
    };

    $('.main-left-li').hover(function(){
        var SlideToX = $(this).position().top;
        $('.main-left-slide').css('top',SlideToX);
    },
    function(){
        var CurrentX = $('.main-left-li').find('.active').parent().position().top;
        $('.main-left-slide').css('top',CurrentX);
    })

    $('.main-left-li').click(function(){
        var slide = $(this).data('slide');
        if(!$(this).hasClass('active')){
            $('.main-left-li').removeClass('active');
            $('.main-left-li').children().removeClass('active');
            $(this).addClass('active');
            $(this).children().addClass('active');

            $('.main-right-reply,.main-right-topic,.main-right-edit,.main-right-onload').removeClass('active');
            $('.main-right-'+ slide +'').addClass('active');
        }
    });

    $(document).on('ready', function () {
        var temp = $('.hidden').text();
        $('.userprofile-usersign-textarea').val(temp);
    })